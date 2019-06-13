// ==UserScript==
// @name         Remove Pop Over Ads
// @namespace    http://tampermonkey.net/
// @version      0.2.2
// @description  Remove add popovers from ComingSoon.net CNN, NBC & Windows Central.
// @updateURL    https://raw.githubusercontent.com/wdupree/tampermonkeyScripts/master/removePopOverAds.js?token=ABNSKDJX6OUBRYBXJWKIUQK4ZM5SC
// @downloadURL  https://raw.githubusercontent.com/wdupree/tampermonkeyScripts/master/removePopOverAds.js?token=ABNSKDJX6OUBRYBXJWKIUQK4ZM5SC
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
           });
    }
})();
