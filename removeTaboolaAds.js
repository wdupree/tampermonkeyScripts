// ==UserScript==
// @name         Remove Taboola Ads
// @namespace    http://tampermonkey.net/
// @version      0.2.3
// @description  Remove Taboola Ads from sites.
// @updateURL    https://raw.githubusercontent.com/wdupree/tampermonkeyScripts/master/removeTaboolaAds.js?token=ABNSKDNNAOOHXTNPZEYXGAC5AJWAI
// @downloadURL  https://raw.githubusercontent.com/wdupree/tampermonkeyScripts/master/removeTaboolaAds.js?token=ABNSKDNNAOOHXTNPZEYXGAC5AJWAI
// @author       Wayne Dupree
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
})();
