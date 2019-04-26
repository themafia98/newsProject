

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
        this.articlesNews = [];

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

    request(view,pages,db){

        if (!window.fetch) return false;
        
        window.fetch(`${this.URI+this.type}?${this.country}&category=${this.CATEGORY}&apiKey=${this.KEY}`)

        .then(response => response.json())
        .then(response => sessionStorage.news = JSON.stringify(response.articles))
        .then(response => { return db.openDateBase(view,pages,response);})

        .catch((error) => {

            sessionStorage.state = window.location.hash.slice(2);
            pages.currentState = sessionStorage.state;
            view.showNews();
            view.checkState(pages);
            view.customElements(document.querySelector('.loader'),'delete');
        });
}


    parseJsonNews(article = sessionStorage.news){

        return article ? JSON.parse(article) : false;
    }

    stringifyNews(article){

        sessionStorage.news = JSON.stringify(article);
    }
}


class DataBase {

    constructor(data = []){
        this.storeData = [];
        this.requestArticle = [];
        this.dbItems = null;
    }

    openDateBase(view,pages,storeData){

        let self = this;

        this.requestArticle = JSON.parse(sessionStorage.news);

        if (!window.indexedDB) return;

        const dbPromise = window.indexedDB.open('newsDB',1);
        dbPromise.onupgradeneeded = function(event) {
            
            const db = event.target.result;
            let objectStore = db.createObjectStore("news", {autoIncrement:true});

            // Create an index to search customers by name. We may have duplicates
            // so we can't use a unique index.
            objectStore.createIndex("name",'name', { unique: false });

            // Store values in the newly created objectStore.

            for (let i = 0; i < self.storeData.length; i++){

                objectStore.add(self.storeData[i]);
            }

        };

        dbPromise.onsuccess = (e) => { 
            
            const db = e.target.result;

            this.dbItems = db.transaction('news').objectStore('news').getAll();
        
            this.dbItems.onsuccess = (e) => {
                const news = e.target.result;
    
                         this.correctUTF = [];
                         
                        this.buffer = news.length ? news : this.requestArticle;
                            
            
                        for (let item of this.buffer){

                            (item.source) && (item.name = item.source.name);
                            item.source && (delete item.source);
                            item.author !== undefined && (delete item.author);
                            item.content !== undefined && (delete item.content);
                        }
                        
                        let filterNews =  this.requestArticle.filter( (item,i) =>{
                        let its = this.buffer.find(it => it.description === item.description);
                        return  its === undefined;
                        });
                        
                        if (filterNews.length) {
                            filterNews.forEach(element => this.buffer.unshift(element));
                            console.log(filterNews);
                        }
                        
                        let findItem = this.buffer || this.requestArticle;

                        this.correctUTF = findItem.filter (item => item.name != 'Rg.ru');

                        let trans = db.transaction('news','readwrite');
            
                        for (let i = 0; i < this.correctUTF.length; i++ ){
                            
                            trans.objectStore('news').put(this.correctUTF[i],i+1);
                        }

                    sessionStorage.removeItem('news');
  
                    sessionStorage.state = window.location.hash.slice(2);
                    pages.currentState = sessionStorage.state;
                    view.showNews(news);
                    view.checkState(pages);
                    view.customElements(document.querySelector('.loader'),'delete');

    }

        }
    // .then(db => {  console.log(db);  /* db.result.transaction('news').objectStore('news').getAll() */ })
    //     .then(news => {
    //         
    //         news.onsuccess = (e) => {
    //          this.correctUTF = [];
    //         this.buffer = news ? news : this.articlesNews;
    //             

    //         for (let item of this.buffer){

    //            (item.source) && (item.name = item.source.name);

    //            item.source && (delete item.source);
    //            item.author !== undefined && (delete item.author);
    //            item.content !== undefined && (delete item.content);

    //         }

    //         let filterNews =  this.articlesNews.filter( (item,i) =>{

    //         let its = this.buffer.find(it => it.description === item.description);

    //         return  its === undefined;
    //         });

    //         if (filterNews.length) {
                
    //             filterNews.forEach(element => this.buffer.unshift(element));
    //             console.log(filterNews);
    //         }

    //         let findItem = this.buffer || this.articlesNews;

    //         this.correctUTF = findItem.filter (item => item.name != 'Rg.ru');


    //         let trans = db.result.transaction('news','readwrite');

    //         for (let i = 0; i < this.correctUTF.length; i++ ){
    //             
    //             trans.objectStore('news').put(this.correctUTF[i],i+1);
    //         }

    //     }

    //     })


    //     .catch((err) => { console.log(err); });
    // }

    }
}
