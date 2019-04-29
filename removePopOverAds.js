// ==UserScript==
// @name         Remove Pop Over Ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remove add popovers from CNN, NBC & Windows Central.
// @author       Wayne Dupree
// @grant        none
// @match        *://www.cnn.com/*
// @match        *://www.nbcnews.com/*
// @match        *://www.windowscentral.com/*
// ==/UserScript==

(function() {
    'use strict';

    var cnnAdElements = document.querySelectorAll('div.bx-shroud, div.bx-slab');
    cnnAdElements.forEach(function(cnnAdElement){
        var parentHtmlNode = cnnAdElement.parentNode;
        parentHtmlNode.parentNode.removeChild(parentHtmlNode);
        console.info("Remove Pop Over Ads was active on CNN [Identification: " + parentHtmlNode.id + "].");
    });

    var wcAdElements = document.querySelectorAll('div.swal-overlay');
    wcAdElements.forEach(function(wsAdElement){
        wsAdElement.parentNode.removeChild(wsAdElement);
        console.info("Remove Pop Over Ads was active on Windows Central [Identification: " + wsAdElement + "].");
    });

    var nbcAdElements = document.querySelectorAll('div[style=background-color: rgba(0, 0, 0, 0.6)]');
    nbcAdElements.forEach(function(nbcAdElement){
        nbcAdElement.parentNode.removeChild(nbcAdElement);
        console.info("Remove Pop Over Ads was active on NBC [Identification: " + nbcAdElement + "].");
    });
})();