
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


        this.components = {
            header: null,
            footer: null,
            loadMoreBox: null,
            loadingNews: null,
            contentSection: null,
            nav: null,
            wrapperHeader: null,
            navigator: null,
            title: null

        }
    }

    customElements(target,type = 'none',name = 'Спрятать') {
        

        type === 'disabled' && target.setAttribute('disabled','true');
        type === 'delete' && target.remove();
        type === 'rename' && (target.value = name);

    }

    loadingNews(target = false){


            let lastSection = document.getElementsByTagName('section');
            let contentSection = document.querySelector('.content');
            lastSection = lastSection[lastSection.length-1];
            let num = this.newsSection.length-1;

            console.log(this.news);
            console.log(this.newsSection);

            this.newContent = this.news.filter( (element,i) => i > this.numContent);
            console.log(this.newContent);
            
            let countArticle = Math.ceil(this.countShow / 3);

            for(let j = 0; j < countArticle; j++){
                let section = document.createElement('section');
                this.newsSection.push(section);
            }

            for(let i = 0; i < this.countShow-1; i++){

                let read = document.createElement('a');
    
                let article = document.createElement('div');
                let img = document.createElement('img');
                
                img.src = this.newContent[i].urlToImage ? this.newContent[i].urlToImage : 'img/technology.jpg';
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


    showComponents(){
        

        this.ctx.innerHTML = '';

        this.components.header = document.createElement('header');
        this.components.footer = document.createElement('footer');

        this.components.loadMoreBox = document.createElement('div');
        this.components.loadMoreBox.classList.add('controllSection');

        this.components.loadingNews = document.createElement('input');
        this.components.loadingNews.setAttribute('type','button');
        this.components.loadingNews.classList.add('loadingNewsBtn');
        this.components.loadingNews.value = 'Загрузить';

        this.components.loadMoreBox.appendChild(this.components.loadingNews);

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


        for (let i = 0; i < 3; i++){

            let li = document.createElement('li');
            let link = document.createElement('a');
            link.setAttribute('href', `#!${this.menu[i]}`);
            link.dataset.menu = this.menu[i];
            link.innerHTML = this.menu[i];
            li.appendChild(link);
            this.components.navigator.appendChild(li);
        }
        
        this.components.nav.appendChild(this.components.navigator);

        this.components.wrapperHeader.appendChild(this.components.title);
        this.components.wrapperHeader.appendChild(this.components.nav);

        
        this.components.header.appendChild(this.components.wrapperHeader);
        this.ctx.appendChild(this.components.header);
        this.ctx.appendChild(this.components.contentSection);
        this.ctx.appendChild(this.components.footer);
        
        this.content = document.querySelector('.content');


    }

    showNews(){
        
        this.content.innerHTML = '';
        this.newsSection = [];
        localStorage.news ? this.news = JSON.parse(localStorage.news) : this.news = [];



        let countArticle = Math.ceil(this.countShow / 3);
        let num = 0;

        for(let j = 0; j < countArticle+1; j++){

            let section = document.createElement('section');
            this.newsSection.push(section);
        }

        for(let i = 0; i < this.countShow; i++){
    
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

            content.innerHTML = this.news[i].description != null ? this.news[i].description : this.news[i].title;
            article.appendChild(img);
            article.appendChild(content);
            article.appendChild(read);
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
        (pages.currentState === 'main' || '') && this.showNews();
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

        let titleState = document.createElement('h2');
        titleState.classList.add('state-title');
        titleState.innerHTML = 'Contact';
        this.content.innerHTML = '';


        let aboutWrapper = document.createElement('div');
        aboutWrapper.classList.add('aboutWrapper');

        let aboutArticle = document.createElement('p');
        aboutArticle.classList.add('contact-links');
        aboutArticle.innerHTML = '<a href = "https://github.com/themafia98"><i class="fab fa-github-square"></i></a>' +
                                 ' <a href = "https://www.linkedin.com/in/pavel-p-80887b151/"><i class="fab fa-linkedin"></i></a>';

        let map = document.createElement('div');
        map.classList.add('map');

        aboutWrapper.appendChild(aboutArticle);

        this.content.appendChild(titleState);
        this.content.appendChild(aboutWrapper);
        this.content.appendChild(map);

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