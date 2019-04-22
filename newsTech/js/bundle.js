"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pages =
/*#__PURE__*/
function () {
  function Pages() {
    _classCallCheck(this, Pages);

    this.state = 'index';
  }

  _createClass(Pages, [{
    key: "currentState",
    set: function set(index) {
      this.state = index;
    },
    get: function get() {
      return this.state;
    }
  }]);

  return Pages;
}();

var News =
/*#__PURE__*/
function () {
  function News() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top-headlines';
    var lang = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ru';

    _classCallCheck(this, News);

    this.KEY = '92084bd2e2064d8d856eb2c499818785';
    this.URI = 'https://newsapi.org/v2/';
    this.CATEGORY = 'technology';
    this.type = type;
    this.country = "country=".concat(lang);
    this.buffer = false;
    this.correctUTF = [];
  }

  _createClass(News, [{
    key: "request",
    value: function request(view, pages) {
      var _this = this;

      fetch("".concat(this.URI + this.type, "?").concat(this.country, "&category=").concat(this.CATEGORY, "&apiKey=").concat(this.KEY)).then(function (response) {
        return response.json();
      }).then(function (response) {
        if (localStorage.news) {
          _this.correctUTF = [];
          _this.buffer = JSON.parse(localStorage.news);
          var filterNews = response.articles.filter(function (item, i) {
            var its = _this.buffer.find(function (it) {
              return it.description === item.description;
            });

            return its === undefined;
          });
          filterNews.length && filterNews.forEach(function (element) {
            return _this.buffer.unshift(element);
          });
          var findItem = _this.buffer || response.articles;
          _this.correctUTF = findItem.filter(function (item) {
            return item.source.name != 'Rg.ru';
          });
          localStorage.news = JSON.stringify(_this.correctUTF);
        }

        sessionStorage.state = window.location.hash.slice(2);
        pages.currentState = sessionStorage.state;
        view.showNews();
        view.checkState(pages);
        view.customElements(document.querySelector('.loader'), 'delete');
      })["catch"](function (error) {
        console.log(error.message);
        sessionStorage.state = window.location.hash.slice(2);
        pages.currentState = sessionStorage.state;
        view.showNews();
        view.checkState(pages);
        view.customElements(document.querySelector('.loader'), 'delete');
      });
    }
  }, {
    key: "parseJsonNews",
    value: function parseJsonNews() {
      var article = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : localStorage.news;
      return JSON.parse(article);
    }
  }, {
    key: "stringifyNews",
    value: function stringifyNews(article) {
      localStorage.news = JSON.stringify(article);
    }
  }]);

  return News;
}();

var ViewNews =
/*#__PURE__*/
function () {
  function ViewNews() {
    var ctx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.createElement('div');

    _classCallCheck(this, ViewNews);

    this.ctx = ctx;
    this.content = null;
    this.menu = ['main', 'about', 'contact'];
    this.news = localStorage.news ? JSON.parse(localStorage.news) : [];
    this.newsSection = [];
    this.count = 6;
    this.numPage = 1;
    this.countShow = 18;
    this.numContent = 18; // start

    this.lengthLoading = 0;
    this.components = {
      header: null,
      footer: null,
      loadMoreBox: null,
      loadingNews: null,
      contentSection: null,
      nav: null,
      wrapperHeader: null,
      navigator: null,
      title: null,
      footerWrapper: null,
      footerPower: null
    };
  }

  _createClass(ViewNews, [{
    key: "customElements",
    value: function customElements(target) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
      var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Спрятать';
      type === 'disabled' && target.setAttribute('disabled', 'true');
      type === 'delete' && target.remove();
      type === 'rename' && (target.value = name);
    }
  }, {
    key: "loadingNews",
    value: function loadingNews() {
      var _this2 = this;

      var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var lastSection = document.getElementsByTagName('section');
      var contentSection = document.querySelector('.content');
      lastSection = lastSection[lastSection.length - 1];
      var num = this.newsSection.length - 1;
      this.newContent = this.news.filter(function (element, i) {
        return i > _this2.numContent;
      });
      var countArticle = Math.ceil(this.countShow / 3);

      for (var j = 0; j < countArticle; j++) {
        var section = document.createElement('section');
        this.newsSection.push(section);
      }

      ;
      this.lengthLoading = this.newContent.length > this.countShow ? this.countShow - 1 : this.newContent.length;

      for (var i = 0; i < this.lengthLoading; i++) {
        var read = document.createElement('a');
        var article = document.createElement('div');
        var img = document.createElement('img');
        img.src = this.newContent[i].urlToImage ? this.newContent[i].urlToImage : 'img/technology.jpg';
        img.classList.add('topic-image');
        var content = document.createElement('p');
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
        if (i % 3 === 0 || i === 0) num++;
      }

      for (var ij = 7; ij < this.newsSection.length - 1; ij++) {
        var parent = target.parentNode;
        contentSection.insertBefore(this.newsSection[ij], parent);
      }

      this.numContent = this.numContent + 18;
    }
  }, {
    key: "showComponents",
    value: function showComponents() {
      this.ctx.innerHTML = '';
      this.components.header = document.createElement('header');
      this.components.footer = document.createElement('footer');
      this.components.loadMoreBox = document.createElement('div');
      this.components.loadMoreBox.classList.add('controllSection');
      this.components.loadingNews = document.createElement('input');
      this.components.loadingNews.setAttribute('type', 'button');
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
      this.components.footerWrapper = document.createElement('div');
      this.components.footerWrapper.classList.add('footerWrapper');
      this.components.footerPower = document.createElement('p');
      this.components.footerPower.classList.add('footerWrapper__powerd');
      this.components.footerPower.innerHTML = 'Create by themafia98 (Pavel P)';

      for (var i = 0; i < 3; i++) {
        var li = document.createElement('li');
        var link = document.createElement('a');
        link.setAttribute('href', "#!".concat(this.menu[i]));
        link.dataset.menu = this.menu[i];
        link.innerHTML = this.menu[i];
        li.appendChild(link);
        this.components.navigator.appendChild(li);
      }

      this.components.nav.appendChild(this.components.navigator);
      this.components.footerWrapper.appendChild(this.components.footerPower);
      this.components.wrapperHeader.appendChild(this.components.title);
      this.components.wrapperHeader.appendChild(this.components.nav);
      this.components.footer.appendChild(this.components.footerWrapper);
      this.components.header.appendChild(this.components.wrapperHeader);
      this.ctx.appendChild(this.components.header);
      this.ctx.appendChild(this.components.contentSection);
      this.ctx.appendChild(this.components.footer);
      this.content = document.querySelector('.content');
    }
  }, {
    key: "showNews",
    value: function showNews() {
      var _this3 = this;

      this.content.innerHTML = '';
      this.newsSection = [];
      localStorage.news ? this.news = JSON.parse(localStorage.news) : this.news = [];
      var countArticle = Math.ceil(this.countShow / 3);
      var num = 0;

      for (var j = 0; j < countArticle + 1; j++) {
        var section = document.createElement('section');
        this.newsSection.push(section);
      }

      ;
      var length = this.countShow + this.lengthLoading;

      for (var i = 0; i < length; i++) {
        var read = document.createElement('a');
        var article = document.createElement('div');
        var img = document.createElement('img');
        img.src = this.news[i].urlToImage ? this.news[i].urlToImage : 'img/technology.jpg';
        img.classList.add('topic-image');
        var content = document.createElement('p');
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
        if (!this.newsSection[num] && this.lengthLoading > 0) this.newsSection[num] = document.createElement('section');
        this.newsSection[num].appendChild(article);
        if (i % 3 === 0) num++;
      }

      this.newsSection.forEach(function (item) {
        return _this3.components.contentSection.appendChild(item);
      });
      this.components.contentSection.appendChild(this.components.loadMoreBox);
      this.ctx.insertBefore(this.components.contentSection, this.components.header.nextSibling);
    }
  }, {
    key: "checkState",
    value: function checkState(pages) {
      pages.currentState === 'about' && this.showAbout();
      pages.currentState === 'contact' && this.showContact();
      (pages.currentState === 'main' || '') && this.showNews();
    }
  }, {
    key: "showAbout",
    value: function showAbout() {
      this.content.innerHTML = '';
      var titleState = document.createElement('h2');
      titleState.classList.add('state-title');
      titleState.innerHTML = 'About';
      var aboutWrapper = document.createElement('div');
      aboutWrapper.classList.add('aboutWrapper');
      var aboutArticle = document.createElement('p');
      aboutArticle.classList.add('aboutArticle');
      aboutArticle.innerHTML = 'This is a test project. Use a <a href = "https://newsapi.org/">News API</a>.';
      var aboutMe = document.createElement('p');
      aboutMe.classList.add('aboutMe');
      aboutMe.innerHTML = 'My name is Pavel Petrovich and i like <strong>JavaScript</strong>.';
      var imageJs = document.createElement('img');
      imageJs.classList.add('imagesAbout');
      imageJs.src = 'img/javascript.png';
      aboutWrapper.appendChild(aboutArticle);
      aboutWrapper.appendChild(aboutMe);

      imageJs.onload = function () {
        return aboutWrapper.appendChild(imageJs);
      };

      this.content.appendChild(titleState);
      this.content.appendChild(aboutWrapper);
    }
  }, {
    key: "showContact",
    value: function showContact() {
      this.content.innerHTML = '';
      var titleState = document.createElement('h2');
      titleState.classList.add('state-title');
      titleState.innerHTML = 'Contact';
      var aboutWrapper = document.createElement('div');
      aboutWrapper.classList.add('aboutWrapper');
      var aboutArticle = document.createElement('p');
      aboutArticle.classList.add('contact-links');
      aboutArticle.innerHTML = '<a href = "https://github.com/themafia98"><i class="fab fa-github-square"></i></a>' + ' <a href = "https://www.linkedin.com/in/pavel-p-80887b151/"><i class="fab fa-linkedin"></i></a>';
      var map = document.createElement('div');
      map.setAttribute('id', 'map');
      aboutWrapper.appendChild(aboutArticle);
      this.content.appendChild(titleState);
      this.content.appendChild(aboutWrapper);
      this.content.appendChild(map);
    }
  }, {
    key: "showLoader",
    value: function showLoader() {
      var app = document.getElementById('newsApp');
      var loadWrapper = document.createElement('div');
      loadWrapper.classList.add('loadingWrapper');
      var load = document.createElement('img');
      load.classList.add('loader');
      load.src = 'img/loading.gif';
      loadWrapper.appendChild(load);
      this.ctx.insertBefore(loadWrapper, this.components.header.nextSibling);
    }
  }]);

  return ViewNews;
}();

var Controller =
/*#__PURE__*/
function () {
  function Controller() {
    _classCallCheck(this, Controller);

    this.menu = null;
    this.menuTitle = null;
  }

  _createClass(Controller, [{
    key: "setEvents",
    value: function setEvents(view, model, pages) {
      var _this4 = this;

      window.addEventListener('storage', function (e) {
        view.showNews();
      }, false);
      document.addEventListener('scroll', function (e) {
        _this4.menu = document.getElementsByTagName('nav')[0];
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        if (scrolled > 100) {
          _this4.menu.classList.add('fixed-menu');
        } else if (_this4.menu.classList[0] == 'fixed-menu') {
          _this4.menu.classList.toggle('fixed-menu');
        }
      }, false);
      document.addEventListener('click', function (e) {
        var target = e.target;

        if (target.classList[0] === 'loadingNewsBtn') {
          view.numContent < 36 && view.loadingNews(target);
          view.numContent >= 36 && view.customElements(target, 'delete');
        }
      }, false);
      document.addEventListener('DOMContentLoaded', function () {
        var article = model.parseJsonNews();

        if (article.length > 35) {
          while (article.length > 37) {
            article.pop();
          }

          model.stringifyNews(article);
        }
      }, false);
      window.addEventListener('hashchange', updateState);

      function updateState(e) {
        sessionStorage.state = window.location.hash.slice(2);
        pages.currentState = sessionStorage.state;
        view.checkState(pages);
      }
    }
  }]);

  return Controller;
}();

var app = function () {
  function main() {
    var pages = new Pages();
    var news = new News();
    var view = new ViewNews(document.getElementById('newsApp'));
    var controll = new Controller();
    controll.setEvents(view, news, pages);
    view.showComponents();
    view.showLoader();
    news.request(view, pages);
  }

  return {
    init: main
  };
}();

app.init();
//# sourceMappingURL=bundle.js.map
