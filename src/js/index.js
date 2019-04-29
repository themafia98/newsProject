
import { fetch as fetchPolyfill } from '../js/3rd/fetch.js';

let app = (function(){


    function main(){
        
        const pages = new Pages();
        const news = new News();
        const db = new DataBase();

        news.getCoords();

        const view = new ViewNews(document.getElementById('newsApp'));
        const controll = new Controller();

        controll.setEvents(view,news,pages);
        view.showComponents();
        view.showLoader();

        const have = news.request(view,pages,db);
        
        if (have === false) {

            view.customElements(document.querySelector('.loader'),'delete');
            view.updateBroswer();
        }

        // controll.setDbEvents(dateBase,db.storeData);

    }

    return {init: main };
})();

app.init();

