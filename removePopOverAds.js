// ==UserScript==
// @name         Remove Pop Over Ads
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Remove add popovers from ComingSoon.net CNN, NBC & Windows Central.
// @author       Wayne Dupree
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        *://www.comingsoon.net/*
// @match        *://www.cnn.com/*
// @match        *://www.nbcnews.com/*
// @match        *://www.windowscentral.com/*
// ==/UserScript==

(function() {
    'use strict';

    var cssPopOverSelectors = 'div.bx-slab,' + // CNN
                              'div[style*="background-color: rgba(0, 0, 0, 0"],' + // NBC News, Coming Soon
                              'div.swal-overlay'; // Windows Central

    waitForKeyElements (cssPopOverSelectors, elementFoundCallbackFunction);

    function elementFoundCallbackFunction ($htmlElements) {
           $htmlElements.each(function(index, element){
               var parentHtmlNode = element.parentNode;
               if (parentHtmlNode.localName == 'body'){
                   element.parentNode.removeChild(element);
                   console.info('Remove Pop Over Ads removed element [Identification: ' + element.localName + '.' + element.className + "].");
               } else {
                   parentHtmlNode.parentNode.removeChild(parentHtmlNode);
                   console.info('Remove Pop Over Ads removed element [Identification: ' + parentHtmlNode.localName + '.' + parentHtmlNode.className + "].");
               }
           });
    }
})();