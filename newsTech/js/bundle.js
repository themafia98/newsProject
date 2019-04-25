/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function s(e,n){return typeof e===n}function a(){var e,n,t,o,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=s(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=o:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=o),f.push((o?"":"no-")+r.join("-"))}}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),a(),o(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);


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

            console.log(this.buffer);
            for (let item of this.buffer){

               (item.source) && (item.name = item.source.name);

               item.source && (delete item.source);
               item.author !== undefined && (delete item.author);
               item.content !== undefined && (delete item.content);

            }

            let filterNews =  response.articles.filter( (item,i) =>{

            let its = this.buffer.find(it => it.description === item.description);

            return  its === undefined;
            });

            filterNews.length && filterNews.forEach(element => this.buffer.unshift(element));

            let findItem = this.buffer || response.articles;

            this.correctUTF = findItem.filter (item => item.name != 'Rg.ru');
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


class DataBase {

    constructor(data = []){
        this.storeData = data;
    }

    openDateBase(){

        if (!window.indexedDB) return;

       return indexedDB.open('newsDB',1);
    }


}


class ViewNews {

    constructor(ctx = document.createElement('div')){
        this.ctx = ctx;
        this.content = null;
        this.menu = ['main','about','contact'];
        this.news = localStorage.news ? JSON.parse(localStorage.news) : [];
        this.newsSection = [];
        this.count = 6;
        this.numPage = 1;
        this.countShow = 18;
        this.numContent = 18; // start
        this.lengthLoading = 0;


        this.components = {
            header: null,
            footer: null,
            loadMoreBox: null,
            loadingNews: null,
            contentSection: null,
            nav: null,
            wrapperHeader: null,
            navigator: null,
            title: null,
            footerWrapper: null,
            footerPower: null,
        }
    }

    updateBroswer(){

        let content = document.querySelector('.content');

        let support = document.createElement('h2');
        support.classList.add('updateIE');

        support.innerHTML = "Please update browser or if you use IE download a modern browser.";
        content.appendChild(support);
        
    }

    showScrollUp(){

        let scrollUp = document.createElement('div');
        scrollUp.classList.add('scroll');
        scrollUp.innerHTML = '<i class="fa-2x fas fa-arrow-up positionIcon"></i>';

        this.ctx.appendChild(scrollUp);
    }

    customElements(target,type = 'none',name = 'Спрятать') {
        

        type === 'disabled' && target.setAttribute('disabled','true');
        type === 'delete' && target.parentNode.removeChild(target);
        type === 'rename' && (target.value = name);

    }

    loadingNews(target = false){


            let lastSection = document.getElementsByTagName('section');
            let contentSection = document.querySelector('.content');
            lastSection = lastSection[lastSection.length-1];
            let num = this.newsSection.length-1;
            this.newContent = this.news.filter( (element,i) => i > this.numContent);

            let countArticle = Math.ceil(this.countShow / 3);

            for(let j = 0; j < countArticle; j++){
                let section = document.createElement('section');
                this.newsSection.push(section);
            }
;
            this.lengthLoading = this.newContent.length > this.countShow ? this.countShow-1 : this.newContent.length;

            for(let i = 0; i < this.lengthLoading; i++){

                let read = document.createElement('a');
                let article = document.createElement('div');
                let img = document.createElement('img');
                console.log(this.newContent[i].urlToImage);
                img.src = this.newContent[i].urlToImage  ? this.newContent[i].urlToImage : 'img/technology.jpg';
                img.classList.add('topic-image');
                let content = document.createElement('p');

                content.classList.add('article__content');
                article.classList.add('article-col');
                article.classList.add('rel-col');

                read.href = this.newContent[i].url;
                read.classList.add('article__content__read');


                content.innerHTML = this.newContent[i].description != null ? this.newContent[i].description : this.newContent[i].title;

                article.appendChild(img);
                article.appendChild(content);
                article.appendChild(read);
                this.newsSection[num].appendChild(article);

                if ((i % 3 === 0) || i === 0) num++;

                }

            for (let ij = 7; ij < this.newsSection.length-1; ij++){

                let parent = target.parentNode;
                contentSection.insertBefore(this.newsSection[ij],parent);

            }

            this.numContent = this.numContent+18;
    }


    showLoadingButton(){

        this.components.loadMoreBox = document.createElement('div');
        this.components.loadMoreBox.classList.add('controllSection');

        this.components.loadMoreBox = document.createElement('div');
        this.components.loadMoreBox.classList.add('controllSection');

        this.components.loadingNews = document.createElement('input');
        this.components.loadingNews.setAttribute('type','button');
        this.components.loadingNews.classList.add('loadingNewsBtn');
        this.components.loadingNews.value = 'Загрузить';

        this.components.loadMoreBox.appendChild(this.components.loadingNews);
    }


    showComponents(){

        this.ctx.innerHTML = '';

        this.components.header = document.createElement('header');
        this.components.footer = document.createElement('footer');

        this.components.contentSection = document.createElement('div');
        this.components.contentSection.classList.add('content');

        this.components.nav = document.createElement('nav');
        this.components.wrapperHeader = document.createElement('div');
        this.components.navigator = document.createElement('ul');
        this.components.navigator.classList.add('menu');

        this.components.wrapperHeader.classList.add('row-center');
        this.components.title = document.createElement('h1');
        this.components.title.innerHTML = 'Technology news';
        this.components.title.classList.add('title');

        this.components.footerWrapper = document.createElement('div');
        this.components.footerWrapper.classList.add('footerWrapper');
        this.components.footerPower = document.createElement('p');
        this.components.footerPower.classList.add('footerWrapper__powerd');
        this.components.footerPower.innerHTML = 'Create by themafia98 (Pavel P)';


        for (let i = 0; i < 3; i++){

            let li = document.createElement('li');
            let link = document.createElement('a');
            link.setAttribute('href', `#!${this.menu[i]}`);
            link.dataset.menu = this.menu[i];
            link.innerHTML = this.menu[i];
            li.appendChild(link);
            this.components.navigator.appendChild(li);
        }

        this.showLoadingButton();

        this.components.nav.appendChild(this.components.navigator);
        this.components.footerWrapper.appendChild(this.components.footerPower);

        this.components.wrapperHeader.appendChild(this.components.title);
        this.components.wrapperHeader.appendChild(this.components.nav);

        this.components.footer.appendChild(this.components.footerWrapper);

        this.components.header.appendChild(this.components.wrapperHeader);
        this.ctx.appendChild(this.components.header);
        this.ctx.appendChild(this.components.contentSection);
        this.ctx.appendChild(this.components.footer);

        this.content = document.querySelector('.content');

    }

    showNews(){

        this.content.innerHTML = '';
        this.newsSection = [];

        if (this.lengthLoading >= 18){

            this.numContent = 18;
            this.lengthLoading = 0;
            this.showLoadingButton();
        }

        localStorage.news ? this.news = JSON.parse(localStorage.news) : this.news = [];



        let countArticle = Math.ceil(this.countShow / 3);
        let num = 0;

        for(let j = 0; j < countArticle+1; j++){

            let section = document.createElement('section');
            this.newsSection.push(section);
        }
        ;
        let length = this.countShow + this.lengthLoading;

        for(let i = 0; i < length; i++){

            if (this.news.length === 0) break;
            let read = document.createElement('a');

            let article = document.createElement('div');
            let img = document.createElement('img');
            img.src = this.news[i].urlToImage ? this.news[i].urlToImage : 'img/technology.jpg';
            img.classList.add('topic-image');
            let content = document.createElement('p');
            content.classList.add('article__content');
            article.classList.add('article-col');
            article.classList.add('rel-col');

            if (i === 0) {
                read.href = this.news[i].url;
                read.classList.add('hot-article__content__read');
                read.innerHTML = 'Читать';
                this.newsSection[i].classList.add('hot-topic');
                content.classList.add('hot-topic_content');
                img.classList.add('hot-image');
            } else {

                read.href = this.news[i].url;
                read.classList.add('article__content__read');
            }

            content.innerHTML = (this.news[i].description != '' && this.news[i].description != null) ? this.news[i].description : this.news[i].title;
            article.appendChild(img);
            article.appendChild(content);
            article.appendChild(read);

            if (this.lengthLoading > 0){

                !(this.newsSection[num]) && (this.newsSection[num] = document.createElement('section'));
            }

            this.newsSection[num].appendChild(article);
            if (i % 3 === 0) num++;
        }

        this.newsSection.forEach (item => this.components.contentSection.appendChild(item));
        this.components.contentSection.appendChild(this.components.loadMoreBox);
        this.ctx.insertBefore(this.components.contentSection,this.components.header.nextSibling);
    }

    checkState(pages){

        (pages.currentState === 'about') && this.showAbout();
        (pages.currentState === 'contact') && this.showContact();
        if (pages.currentState === 'main' || '') {
            
            this.showNews();

        }
    }

    showAbout() {
        
        this.content.innerHTML = '';

        let titleState = document.createElement('h2');
        titleState.classList.add('state-title');
        titleState.innerHTML = 'About';

        let aboutWrapper = document.createElement('div');
        aboutWrapper.classList.add('aboutWrapper');

        let aboutArticle = document.createElement('p');
        aboutArticle.classList.add('aboutArticle');
        aboutArticle.innerHTML = 'This is a test project. Use a <a href = "https://newsapi.org/">News API</a>.';


        let aboutMe = document.createElement('p');
        aboutMe.classList.add('aboutMe');
        aboutMe.innerHTML = 'My name is Pavel Petrovich and i like <strong>JavaScript</strong>.';
        let imageJs = document.createElement('img');
        imageJs.classList.add('imagesAbout');
        imageJs.src = 'img/javascript.png';

        aboutWrapper.appendChild(aboutArticle);
        aboutWrapper.appendChild(aboutMe);
        imageJs.onload = () => aboutWrapper.appendChild(imageJs);

        this.content.appendChild(titleState);
        this.content.appendChild(aboutWrapper);
    }

    showContact(){

        this.content.innerHTML = '';

        let titleState = document.createElement('h2');
        titleState.classList.add('state-title');
        titleState.innerHTML = 'Contact';

        let aboutWrapper = document.createElement('div');
        aboutWrapper.classList.add('aboutWrapper');

        let aboutArticle = document.createElement('p');
        aboutArticle.classList.add('contact-links');
        aboutArticle.innerHTML = '<a href = "https://github.com/themafia98"><i class="fab fa-github-square"></i></a>' +
                                 ' <a href = "https://www.linkedin.com/in/pavel-p-80887b151/"><i class="fab fa-linkedin"></i></a>';

        let map = document.createElement('div');
        map.setAttribute('id','map');

        aboutWrapper.appendChild(aboutArticle);

        this.content.appendChild(titleState);
        this.content.appendChild(aboutWrapper);
        this.content.appendChild(map);

        let maps = News.mapInit();
        let coords = JSON.parse(localStorage.coords);

        let mapp = document.querySelector('.ol-viewport');

        let currentMarker = document.createElement('div');
        currentMarker.classList.add('markerCurrent');

        let marker = document.createElement('div');
        marker.classList.add('marker');

        mapp.appendChild(currentMarker);
        mapp.appendChild(marker);

        if (!coords.error) {
        let markerYour = new ol.Overlay({
            position: ol.proj.fromLonLat([coords.longitude,coords.latitude]),
            element: document.querySelector('.marker'),
            positioning: 'bottom-center'
        });
        maps.addOverlay(markerYour);
        } else document.querySelector('.marker').style.display = 'none';

        let markerCurrent = new ol.Overlay({
            position: ol.proj.fromLonLat([27.4998984,53.9130256]),
            element: document.querySelector('.markerCurrent'),
            positioning: 'bottom-center'
        });
        maps.addOverlay(markerCurrent);
    }





    showLoader(){

        let app = document.getElementById('newsApp');

        let loadWrapper = document.createElement('div');
        loadWrapper.classList.add('loadingWrapper');
        let load = document.createElement('img');
        load.classList.add('loader');
        load.src = 'img/loading.gif';

        loadWrapper.appendChild(load);

        this.ctx.insertBefore(loadWrapper,this.components.header.nextSibling);
    }
}
class Controller {

    constructor (){

        this.menu = null;
        this.menuTitle = null;
        this.timer = null;
        this.scrolled = null;
        this.clickScrollCount = 0;


    }

    setDbEvents(dateNews,storeData){

        dateNews.onupgradeneeded = function(event) {

            const db = event.target.result;

            // Create an objectStore to hold information about our customers. We're
            // going to use "id" as our key path because it's guaranteed to be
            // unique.
            let objectStore = db.createObjectStore("news", {autoIncrement:true});

            // Create an index to search customers by name. We may have duplicates
            // so we can't use a unique index.
            objectStore.createIndex("name",'name', { unique: false });

            // Store values in the newly created objectStore.

            for (let i = 0; i < storeData.length; i++){

                objectStore.add(storeData[i]);
            }

        };

        dateNews.onsuccess = function(event) { //если база открылась и все в порядке

            const db = event.target.result;

            let objectStore = db.transaction(["news"], "readwrite");
            const store = objectStore.objectStore("news");

            store.openCursor().onsuccess = function(event) {
                let cursor = event.target.result;

                if (cursor) cursor.continue();
            };
        };
    }

    setEvents (view,model,pages){

        let self = this;

        function scroll(e) {

            self.menu = document.getElementsByTagName('nav')[0];
            self.scrolled = window.pageYOffset || document.documentElement.scrollTop;


            if (self.timer != null && self.scrolled === 0) { 

                clearInterval(self.timer);
                self.clickScrollCount = 0;
            };
            console.log(self.scrolled);
            if (self.scrolled > 100) {

                self.menu.classList.add('fixed-menu');
                !document.querySelector('.scroll') && view.showScrollUp();

            } else if (self.menu.classList[0] == 'fixed-menu' && self.scrolled < 100) {

                let scroll =  document.querySelector('.scroll');
                self.menu.classList.toggle('fixed-menu');
                scroll.parentNode.removeChild(scroll); // || remove()
            }

        };


        
        function clickEvent(e) {
            
            let target = e.target;

            if (target.classList[0] === 'loadingNewsBtn'){

            view.numContent < 36 && view.loadingNews(target);
            view.numContent >= 36 && view.customElements(target,'delete');
            }

            if((target.classList[0] === 'scroll' || target.parentNode.classList[0] === 'scroll') && 
                self.clickScrollCount === 0){

                self.clickScrollCount++;
                self.timer =  setInterval(function tick() {
                document.documentElement.scrollTop = document.documentElement.scrollTop - 20;
                },0);
            }

        };



        /* -----------Modernizr----------- */
        console.log('touchevents detected:' + Modernizr.touchevents);
        Modernizr.touchevents && document.addEventListener('touchend',clickEvent,false);
        !Modernizr.touchevents && document.addEventListener('click',clickEvent,false);

        window.addEventListener('storage', (e) => {  view.showNews() },false);
        !Modernizr.touchevents && document.addEventListener('scroll',scroll,false);


        document.addEventListener('DOMContentLoaded',() => {

            let article = model.parseJsonNews();

            if (article.length > 35){

                while (article.length > 37) article.pop();
                model.stringifyNews(article);
            }



        },false);


        window.addEventListener('hashchange', updateState);

        function updateState(e) {

            sessionStorage.state = window.location.hash.slice(2);
            pages.currentState = sessionStorage.state;

            view.checkState(pages);
        }

    }
}




import { fetch as fetchPolyfill } from '../js/3rd/fetch.js';

let app = (function(){


    function main(){

        const pages = new Pages();
        const news = new News();

        news.getCoords();

        const view = new ViewNews(document.getElementById('newsApp'));
        const controll = new Controller();
        controll.setEvents(view,news,pages);
        view.showComponents();
        view.showLoader();
        const have = news.request(view,pages);

        if (have === false) {

            view.customElements(document.querySelector('.loader'),'delete');
            view.updateBroswer();
        }

        
        const db = new DataBase(news.parseJsonNews());
        let dateBase = db.openDateBase();

        controll.setDbEvents(dateBase,db.storeData);

    }

    return {init: main };
})();

app.init();

//# sourceMappingURL=bundle.js.map
