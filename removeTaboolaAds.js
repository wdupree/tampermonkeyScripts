// ==UserScript==
// @name         Remove Taboola Ads
// @namespace    http://tampermonkey.net/
// @version      0.2.1
// @description  Remove Taboola Ads from sites.
// @updateURL    https://raw.githubusercontent.com/wdupree/tampermonkeyScripts/master/removeTaboolaAds.js?token=ABNSKDIZHWTUIS4DD3YFNSK4ZM5YY
// @downloadURL  https://raw.githubusercontent.com/wdupree/tampermonkeyScripts/master/removeTaboolaAds.js?token=ABNSKDIZHWTUIS4DD3YFNSK4ZM5YY
// @author       Wayne Dupree
// @match        http*://*/*
// @grant    	 GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var taboolaClasses = [
        "[id*='taboola']",
        "[class*='taboola']"
	];

    taboolaClasses.forEach(function(taboolaClass){
        var taboolaElement = document.querySelectorAll(taboolaClass);
        taboolaElement.forEach(function(taboolaElement){
            GM_addStyle(
                taboolaClass + " {" +
                "display: none !important;" +
                "visibility: hidden !important;" +
				"width: 0px !important;" +
				"height: 0px !important;" +
                "}"
            );
            console.info("Remove Taboola Ads hid element [Identification: " + taboolaClass + "].");
        });
    });
})();