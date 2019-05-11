
import {News,Pages,DataBase} from './model';
import ViewNews from './view';
import Controller from './controller';

export default function main(){

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
};
