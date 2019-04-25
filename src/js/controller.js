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
                (!document.querySelector('.scroll') && !Modernizr.touchevents) && view.showScrollUp();

            } else if (self.menu.classList[0] == 'fixed-menu' && self.scrolled < 100) {

                let scroll =  document.querySelector('.scroll');
                self.menu.classList.toggle('fixed-menu');
                scroll && scroll.parentNode.removeChild(scroll); // || remove()
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
        document.addEventListener('scroll',scroll,false);


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


