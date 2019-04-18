
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
    }

    request(view,pages){
        
        fetch(`${this.URI+this.type}?${this.country}&category=${this.CATEGORY}&apiKey=${this.KEY}`)

        .then(response => response.json())
        .then(response => {

            if (localStorage.news){

            this.buffer = JSON.parse(localStorage.news);
            let filterNews =  response.articles.filter( (item,i) =>{

            let its = this.buffer.find(it => it.description === item.description);
              return  its === undefined ;
            });
            
            console.log(filterNews);
    
            if (filterNews.length) filterNews.forEach(element => {
                
                this.buffer.unshift(element);
            }); 

            }
            
            
            this.buffer != false ? localStorage.news = JSON.stringify(this.buffer) :
                                localStorage.news = JSON.stringify(response.articles);

                                
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