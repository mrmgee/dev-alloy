'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
Theme Name: Gridit
Description: Gridit is a modern and creative HTML template with an interesting grid layout.
Author: RafavaThemes
Version: 1.0
*/

var Page = function () {
    function Page(el) {
        _classCallCheck(this, Page);

        this.DOM = { el: el };
        this.init();
    }

    _createClass(Page, [{
        key: 'init',
        value: function init() {
            this.DOM.heroTitle = this.DOM.el.querySelector('.hero__title');
            charming(this.DOM.heroTitle);
            this.DOM.heroTitleLetters = this.DOM.heroTitle.querySelectorAll('span');
            this.DOM.heroImg = this.DOM.el.querySelector('.hero__img');
            this.DOM.topbar = this.DOM.el.querySelector('.menu__topbar');
            this.topbar();
            this.heroTitle();
            this.heroImg();
        }
    }, {
        key: 'heroTitle',
        value: function heroTitle() {
            return anime({
                targets: this.DOM.heroTitleLetters,
                duration: settings.heroTitle.duration,
                delay: function delay(target, index) {
                    return index * 30 + 200;
                },
                easing: settings.heroTitle.easing,
                translateY: ['-100%', '0%'],
                opacity: {
                    value: [0, 1],
                    duration: 1,
                    delay: function delay(target, index) {
                        return settings.heroTitle.delay;
                    }
                }
            });
        }
    }, {
        key: 'heroImg',
        value: function heroImg() {
            return anime({
                targets: this.DOM.heroImg,
                duration: settings.heroImg.duration,
                delay: settings.heroImg.delay,
                easing: settings.heroImg.easing,
                translateY: ['-100%', '0%']
            });
        }
    }, {
        key: 'topbar',
        value: function topbar() {
            return anime({
                targets: this.DOM.topbar,
                duration: settings.topbar.duration,
                delay: settings.topbar.delay,
                easing: settings.topbar.easing,
                translateY: ['-100%', '0%']
            });
        }
    }]);

    return Page;
}();

;

imagesLoaded(document.querySelectorAll('img'), { background: true }, function () {

    //SetTimeout
    setTimeout(function () {
        document.querySelector('.loader').classList.add('hidden');
    }, 250);

    new Menu(document.querySelector('body'));
    new Page(document.querySelector('body'));
});