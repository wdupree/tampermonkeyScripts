// ==UserScript==
// @name         Remove Taboola Ads
// @namespace    http://tampermonkey.net/
// @version      0.3.0
// @description  Remove Taboola Ads from sites.
// @updateURL    https://raw.githubusercontent.com/wdupree/tampermonkeyScripts/master/removeTaboolaAds.js
// @downloadURL  https://raw.githubusercontent.com/wdupree/tampermonkeyScripts/master/removeTaboolaAds.js
// @author       Wayne Dupree
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @match        http*://*/*
// @grant    	 GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var taboolaClasses = [
        "[id*='taboola']",
        "div[class*='taboola']",
        "p[class*='taboola']",
        "[class*='js_reading-list reading-list']",
        "[class*='related-articles-block']"
	];

    taboolaClasses.forEach(function(taboolaClass){
        var taboolaElement = document.querySelectorAll(taboolaClass);
        taboolaElement.forEach(function(taboolaElement){
            taboolaElement.remove();
            var tagName = taboolaElement.localName +
                ((taboolaElement.id) ? '#' + taboolaElement.id : '') +
                ((taboolaElement.className) ? '.' + taboolaElement.className : '');
            console.info(`Remove Taboola Ads removed element [Identification: ${tagName}].`);
        });
    });

    var cssPopOverSelectors = 'a[href*="dianomi"],' + // Dianomi Footer
                              'img[src*="reutersmedia"]'; // Dianomi Header

    waitForKeyElements (cssPopOverSelectors, elementFoundCallbackFunction);
    function elementFoundCallbackFunction ($htmlElements) {
           $htmlElements.each(function(index, element){
               if (element.localName == 'a') {
                   $(element).closest('span').hide();
                   console.info(`Remove Taboola Ads removed a Dianomi footer element.`);
               } else{
                   $(element).hide();
                   console.info(`Remove Taboola Ads removed a Dianomi header element.`);
               }
           });
    }
})();
