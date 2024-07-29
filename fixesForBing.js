// ==UserScript==
// @name         Fixes for Bing
// @namespace    http://tampermonkey.net/
// @version      0.13.2
// @description  Stop doing weird things, Bing! ;)
// @author       Geekness
// @author       Wayne Dupree
// @match        http*://*.bing.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bing.com
// @grant        none
// @license      MIT
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==
/* global $, jQuery */

(function() {
    this.$ = this.jQuery = jQuery.noConflict(true);
    AwayTimeThreshold = 2_592_000; //Stop the scoll to top on focus
})();

//Stop opening news items in a new tab
window.addEventListener('load', function() {
    $('.tobitem_info').each(function() {
        var $this = $(this);
        $this.on('click', function(){
            event.preventDefault();
            window.open($this.attr('href'),"_self")
        });
    });
}, false);
