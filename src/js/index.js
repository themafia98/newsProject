


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
        news.request(view,pages);
        
    }

    return {init: main };
})();

app.init();