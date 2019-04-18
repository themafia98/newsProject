class Controller {

    constructor (){

        this.menu = null;
        this.menuTitle = null;

    }

    setEvents (view,model,pages){
        

        window.addEventListener('storage', (e) => {  view.showNews() },false);
        document.addEventListener('scroll', (e) => {
            
            this.menu = document.getElementsByTagName('nav')[0];
            let scrolled = window.pageYOffset || document.documentElement.scrollTop;
            console.log(scrolled);

            if (scrolled > 100) {
                
                this.menu.classList.add('fixed-menu');

            } else if (this.menu.classList[0] == 'fixed-menu') {

                this.menu.classList.toggle('fixed-menu');
            }

        },false);


        document.addEventListener('click', (e) => {

            let target = e.target;
            
            if (target.classList[0] === 'loadingNewsBtn'){
            view.numContent < 36 && view.loadingNews(target);
            view.numContent >= 36 && view.customElements(target,'delete');
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


