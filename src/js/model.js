

class Pages {

    constructor(){

        this.state = 'index';
    }

    set currentState(index) {

        this.state = index;
    }

    get currentState() {

        return this.state;
    }
}


class News {

    constructor(type = 'top-headlines',lang = 'ru'){

        this.KEY = '92084bd2e2064d8d856eb2c499818785';
        this.URI = 'https://newsapi.org/v2/';
        this.CATEGORY = 'technology';
        this.type = type;
        this.country = `country=${lang}`;
        this.buffer = false;
        this.correctUTF = [];

        this.error = null;
    }

    getCoords(){
        

          function error(err) {

            let coords ={
                latitude: 53.9130256,
                longitude: 27.4998984,
                error: true,
            }

            localStorage.coords = JSON.stringify(coords);
          };


        navigator.geolocation.getCurrentPosition(function success(pos) {
            let response = pos.coords;
            
            let coords ={
                latitude: response.latitude,
                longitude: response.longitude,
                error: false,
            }


            localStorage.coords = JSON.stringify(coords);
        },error);


    }

    static mapInit(mapIn = document.querySelector('.ol-viewport')){

        if (!mapIn){

        let mousePositionControl = new ol.control.MousePosition( {
            // используется градусная проекция
            projection: 'EPSG:4326',
            // переопределяем функцию вывода координат
            coordinateFormat: function(coordinate) {
                // сначала широта, потом долгота и ограничиваем до 3 знаков после запятой
                return ol.coordinate.format(coordinate, '{y}, {x}', 3);
            }
    } );

        return new ol.Map({
            controls: ol.control.defaults().extend([
                new ol.control.ZoomSlider(),
                mousePositionControl,
                new ol.control.OverviewMap(),
                new ol.control.ScaleLine()
            ]),
            target: 'map',
            layers: [
                new ol.layer.Tile({

                    source: new ol.source.OSM()

                })
            ],
            view: new ol.View({
            center: ol.proj.fromLonLat([27.4998984,53.9130256]),
            zoom: 7
            })
        });

        }

    }

    request(view,pages){

        if (!window.fetch) return false;

        window.fetch(`${this.URI+this.type}?${this.country}&category=${this.CATEGORY}&apiKey=${this.KEY}`)

        .then(response => response.json())
        .then(response => {

            this.correctUTF = [];
            this.buffer = localStorage.news ? JSON.parse(localStorage.news) : response.articles;
            let filterNews =  response.articles.filter( (item,i) =>{

            let its = this.buffer.find(it => it.description === item.description);

            return  its === undefined;
            });

            filterNews.length && filterNews.forEach(element => this.buffer.unshift(element));

            let findItem = this.buffer || response.articles;

            this.correctUTF = findItem.filter (item => item.source.name != 'Rg.ru');
            localStorage.news = JSON.stringify(this.correctUTF);

            })

            .then(response => {

            sessionStorage.state = window.location.hash.slice(2);
            pages.currentState = sessionStorage.state;
            view.showNews();
            view.checkState(pages);
            view.customElements(document.querySelector('.loader'),'delete');

        })

        .catch((error) => {

            sessionStorage.state = window.location.hash.slice(2);
            pages.currentState = sessionStorage.state;
            view.showNews();
            view.checkState(pages);
            view.customElements(document.querySelector('.loader'),'delete');
        });
}

    parseJsonNews(article = localStorage.news){

        return article ? JSON.parse(article) : false;
    }

    stringifyNews(article){

        localStorage.news = JSON.stringify(article);
    }
}
