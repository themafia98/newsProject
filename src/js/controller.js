class Controller {

    constructor (){

        this.menu = null;
        this.menuTitle = null;
        this.timer = null;
        this.scrolled = null;
        this.clickScrollCount = 0;

    }

    setEvents (view,model,pages){

        window.addEventListener('storage', (e) => {  view.showNews() },false);
        document.addEventListener('scroll', (e) => {

            this.menu = document.getElementsByTagName('nav')[0];
            this.scrolled = window.pageYOffset || document.documentElement.scrollTop;


            if (this.timer != null && this.scrolled === 0) { 

                clearInterval(this.timer);
                this.clickScrollCount = 0;
            };

            if (this.scrolled > 100) {

                this.menu.classList.add('fixed-menu');
               !document.querySelector('.scroll') && view.showScrollUp();

            } else if (this.menu.classList[0] == 'fixed-menu' && this.scrolled < 100) {
                let scroll =  document.querySelector('.scroll');
                this.menu.classList.toggle('fixed-menu');
                scroll.parentNode.removeChild(scroll); // || remove()
            }

        },false);

        document.addEventListener('click', (e) => {

            let target = e.target;

            if (target.classList[0] === 'loadingNewsBtn'){
            view.numContent < 36 && view.loadingNews(target);
            view.numContent >= 36 && view.customElements(target,'delete');
            }

            if((target.classList[0] === 'scroll' || target.parentNode.classList[0] === 'scroll') && 
                this.clickScrollCount === 0){

                this.clickScrollCount++;
                this.timer =  setInterval(function tick() {
                document.documentElement.scrollTop = document.documentElement.scrollTop - 20;
                },0);
            }

        },false);

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


