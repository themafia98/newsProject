
/* @ Styles @ */

import '../style/value.scss';
import '../style/main.scss';
import '../style/media.scss';

/* @ Media-file @ */

import '../img/javascript.png';
import '../img/loading.gif';
import '../img/technology.jpg';

/* @ JavaScript @ */
import {Pages, DataBase, News} from './model';
import ViewNews from './view';
import Controller from './controller';

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

main();