
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
    }

    getCoords(){

        fetch('https://get.geojs.io/v1/ip/geo.json')
        .then(response => response.json())
        .then(response => {

            let coords ={
                latitude: response.latitude,
                longitude: response.longitude
            }
            localStorage.coords = JSON.stringify(coords);
        })

        .then (response => this.mapInit())

        .catch (error => {
            console.log(error);
        });
    }

    mapInit(){
        
        let coords = JSON.parse(localStorage.coords);

        let mousePositionControl = new ol.control.MousePosition( {
            // используется градусная проекция
            projection: 'EPSG:4326',
            // переопределяем функцию вывода координат
            coordinateFormat: function(coordinate) {
                // сначала широта, потом долгота и ограничиваем до 5 знаков после запятой
                return ol.coordinate.format(coordinate, '{y}, {x}', 5);
            }
    } );
    
        let maps = new ol.Map({
            controls: ol.control.defaults().extend([
                new ol.control.ZoomSlider(),
                mousePositionControl,
                new ol.control.OverviewMap(),
                new ol.control.ScaleLine()
            ]),
            target: 'map',
            layers: [
              new ol.layer.Tile({
                source: new ol.source.XYZ({
                    url: 'http://{a-c}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png'
                })
              })
            ],
            view: new ol.View({
              center: ol.proj.fromLonLat([parseInt(coords.longitude),
                                          parseInt(coords.latitude)]),
              zoom: 7
            })
          });
          
    }

    request(view,pages){
        
        if(!window.fetch) {

            view.customElements(document.querySelector('.loader'),'delete');
            view.updateBroswer();
            return;
        }

        fetch(`${this.URI+this.type}?${this.country}&category=${this.CATEGORY}&apiKey=${this.KEY}`)

        .then(response => response.json())
        .then(response => {

            if (localStorage.news){
                
            this.correctUTF = [];
            this.buffer = JSON.parse(localStorage.news);
            let filterNews =  response.articles.filter( (item,i) =>{

            let its = this.buffer.find(it => it.description === item.description);

            return  its === undefined;
            });

            filterNews.length && filterNews.forEach(element => this.buffer.unshift(element));

            let findItem = this.buffer || response.articles;

            this.correctUTF = findItem.filter (item => item.source.name != 'Rg.ru');
            localStorage.news = JSON.stringify(this.correctUTF);

            }})

            .then(response => {
                
                fetch('https://get.geojs.io/v1/ip/geo.json')
                .then(response => response.json())
                .then(response => {
                    
                    let coords ={
                        latitude: response.latitude,
                        longitude: response.longitude
                    }
                    localStorage.coords = JSON.stringify(coords);
                })
        
                .then (response => this.mapInit())
        
                .catch (error => {
                    console.log(error);
                });
            })

            .then(response => {

            sessionStorage.state = window.location.hash.slice(2);
            pages.currentState = sessionStorage.state;
            view.showNews();
            view.checkState(pages);
            view.customElements(document.querySelector('.loader'),'delete');

        })

        .catch((error) => {
            console.log(error.message);

            sessionStorage.state = window.location.hash.slice(2);
            pages.currentState = sessionStorage.state;
            view.showNews();
            
            view.checkState(pages);
            view.customElements(document.querySelector('.loader'),'delete');
        });
}

    parseJsonNews(article = localStorage.news){

    return JSON.parse(article);
    }
    
    stringifyNews(article){

        localStorage.news = JSON.stringify(article);
    }
}