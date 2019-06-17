// ==UserScript==
// @name         Remove Pop Over Ads
// @namespace    http://tampermonkey.net/
// @version      0.2.4
// @description  Remove add popovers from ComingSoon.net CNN, NBC & Windows Central.
// @updateURL    https://gist.githubusercontent.com/wdupree/70c0989a67763b5a65783a50089f9411/raw/7885b0510b3c387f39c086660d442a10c42ebaff/removePopOverAds.js
// @downloadURL  https://gist.githubusercontent.com/wdupree/70c0989a67763b5a65783a50089f9411/raw/7885b0510b3c387f39c086660d442a10c42ebaff/removePopOverAds.js
// @author       Wayne Dupree
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        *://www.comingsoon.net/*
// @match        *://www.cnn.com/*
// @match        *://www.nbcnews.com/*
// @match        *://www.windowscentral.com/*
// @match        *://www.telegraph.co.uk/*
// ==/UserScript==

(function() {
    'use strict';

    var cssPopOverSelectors = 'div.bx-slab,' + // CNN
                              'div[style*="background-color: rgba(0, 0, 0, 0"],' + // NBC News, Coming Soon
                              'div.swal-overlay,' + // Windows Central
                              'div.adblocker-message.component'; // Telegraph

    waitForKeyElements (cssPopOverSelectors, elementFoundCallbackFunction);

    function elementFoundCallbackFunction ($htmlElements) {
           $htmlElements.each(function(index, element){
               var parentHtmlNode = element.parentNode;
               var tagName;
               if (parentHtmlNode.localName == 'body'){
                   element.parentNode.removeChild(element);
                   tagName = element.localName +
                       ((element.id) ? '#' + element.id : '') +
                       ((element.className) ? '.' + element.className : '');
               } else {
                   parentHtmlNode.parentNode.removeChild(parentHtmlNode);
                   tagName = parentHtmlNode.localName +
                       ((parentHtmlNode.id) ? '#' + parentHtmlNode.id : '') +
                       ((parentHtmlNode.className) ? '.' + parentHtmlNode.className : '');
               }
               console.info(`Remove Pop Over Ads removed element [Identification: ${tagName}].`);

               if ('html[style*="overflow"]') {
                   $('html').removeAttr('style');
                   console.info(`Remove Pop Over Ads removed the style attribute from HTML tag.`);
               }

               if ('body[style*="overflow"]') {
                   $('body').removeAttr('style');
                   console.info(`Remove Pop Over Ads removed the style attribute from BODY tag.`);
               }

               if ($('body').hasClass('bx-client-overlay')) {
                   $('body').removeClass('bx-client-overlay');
                   console.info(`Remove Pop Over Ads removed the bx-client-overlay class from the BODY tag.`);
               }
           });
    }
})();
