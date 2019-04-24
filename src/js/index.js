
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
    }

    return {init: main };
})();

app.init();
