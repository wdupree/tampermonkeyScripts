// ==UserScript==
// @name         Hyperlink Auditing Remover
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Removes the "ping" attribute from links.
// @author       Wayne Dupree
// @match        http*://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var links = document.querySelectorAll("a[ping]");
    links.forEach(function(link){
        link.outerHTML += '<sup>p</sup>';
        link.removeAttribute("ping");
        console.info("Hyperlink Auditing Remover was active [Identification: " + link + "].");
    });
})();