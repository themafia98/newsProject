import {News} from './model';
export default class ViewNews {

    constructor(ctx = document.createElement('div')){
        this.ctx = ctx;
        this.content = null;
        this.menu = ['main','about','contact'];
        this.news = localStorage.news ? JSON.parse(localStorage.news) : [];
        this.newsSection = [];
        this.count = 6;
        this.countShow = 18;
        this.lengthLoading = 0;
        this.items = [];
        this.itemCountDB = null;


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

        if (target) {
            type === 'disabled' && target.setAttribute('disabled','true');
            type === 'delete' && target.parentNode.removeChild(target);
            type === 'rename' && (target.value = name);
        }

    }

    loadingNews(target = false){
            
        
            let lastSection = [...document.getElementsByTagName('section')];
            let contentSection = document.querySelector('.content');
            let num = this.newsSection.length-1;
            this.items = [];

            lastSection.forEach(item => this.items.push(...item.children));
            this.newContent = this.news.filter( (item,i) => i > this.items.length-1);

            if (this.newContent.length){

                this.countShow = this.countShow > this.newContent.length ? this.newContent.length : 17;

                let countArticle = Math.ceil(this.countShow / 3);


                for(let j = 0; j < countArticle; j++){
                    let section = document.createElement('section');
                    this.newsSection.push(section);
                }

                this.lengthLoading = this.newContent.length > this.countShow ? this.countShow : this.newContent.length;

                for(let i = 0; i < this.lengthLoading; i++){
                    
                    let read = document.createElement('a');
                    let article = document.createElement('div');
                    let img = document.createElement('img');

                    img.src = this.newContent[i].urlToImage  ? this.newContent[i].urlToImage : 'img/technology.jpg';
                    img.classList.add('topic-image');
                    let content = document.createElement('p');

                    content.classList.add('article__content');
                    article.classList.add('article-col');
                    article.classList.add('rel-col');

                    read.href = this.newContent[i].url;
                    read.setAttribute('target','_blank');
                    read.classList.add('article__content__read');


                    content.innerHTML = (this.newContent[i].description != '' && this.newContent[i].description != null) ?
                                        this.newContent[i].description : this.newContent[i].title;

                    article.appendChild(img);
                    article.appendChild(content);
                    article.appendChild(read);
                    
                    this.newsSection[num].appendChild(article);

                    if (this.newsSection[num].children.length >= 3) num++;

                    }
                    
                    for (let ij = 7; ij < this.newsSection.length; ij++){

                        let parent = target.parentNode;
                        contentSection.insertBefore(this.newsSection[ij],parent);
                    }
                    this.items = [];
                    
                    this.items = document.querySelectorAll('div.article-col').length-1;

                    if (this.items === this.itemCountDB)
                    this.customElements(document.querySelector('.loadingNewsBtn'),'delete');

            } else {
                this.customElements(document.querySelector('.loadingNewsBtn'),'delete');
                return;
           }
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

    showNews(db = []){
 
        this.content.innerHTML = '';
        this.items = document.querySelectorAll('div.article-col').length-1;
        this.newsSection = [];
        this.countShow = 18;
        this.news = db;

        if (this.items === this.itemCountDB) {

            this.customElements(document.querySelector('.loadingNewsBtn'),'delete');
        } else this.showLoadingButton();


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
                read.setAttribute('target','_blank');
                read.innerHTML = 'Читать';
                this.newsSection[i].classList.add('hot-topic');
                content.classList.add('hot-topic_content');
                img.classList.add('hot-image');
            } else {

                read.href = this.news[i].url;
                read.setAttribute('target','_blank');
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
        (pages.currentState === 'main' || '')  && (this.showNews(this.news));

    
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