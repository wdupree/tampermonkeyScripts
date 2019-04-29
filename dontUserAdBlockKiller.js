// ==UserScript==
// @name        Don't Use AdBlock - Killer
// @namespace   MegaByteGreaseMonkeyDUABK
// @description Removes the "Dont use Ad Blocker" Messages on some sites.
// @include     http*://*tempostorm.com/*
// @include     http*://*agar.io/*
// @include     http*://*chip.de/*
// @include     http*://*3dchip.de/*
// @include     http*://*golem.de/*
// @include     http*://*heise.de/*
// @include     http*://*msn.com/*
// @include     http*://*wetter.com/*
// @include     http*://*pastebin.com/*
// @include     http*://*salamisound.de/*
// @include     http*://*crodict.de/*
// @include     http*://*pcwelt.de/*
// @include     http*://*tropicraft.net/dl/?l=*
// @include     http*://*minecraft-forum.net/v/file/*
// @include     http*://*gottabemobile.com/*
// @include     http*://*prosiebenmaxx.at/*
// @include     http*://*mobilesringtones.com/*
// @include     http*://*windowscentral.com/*
// @include     http*://*cnn.com/*
// @version     3.5.1.2
// @grant    	GM_addStyle
// ==/UserScript==


	if(!('includes' in String.prototype)) {
       		String.prototype.includes = function(str, startIndex) {
                	return -1 !== String.prototype.indexOf.call(this, str, startIndex);
       		};
 	}

	var data = {
		"tempostorm.com" 		: ".ad, .ad-wrap, .adblock",
		"agar.io"        		: "#adbg, [data-itr*=ad]",
		"chip.de"        		: "#ads, #adunit, .adsbygoogle, [id*=contentad]",
		"3dchip.de"        		: "img[src*=werbung], img[src*=banner]",
		"golem.de"        		: ".adsbygoogle",
		"heise.de"        		: ".ad_us",
		"msn.com"        		: "[id*=taboola]",
		"wetter.com"        	: "[id*=adform-adbox], .adform-adbox, #banner, .adsContainer, .lkIqES, [id*=ad-], #VJIlqro.RlzwrKHa, #NLKiiz.EsZrDeXPRZ, #naFsCzMmuw.APiOHcXTO, #content_wide div:first-child, #XEVINd, .ad-wrapper, [id*=ad_target], .contilla579dd4d8Box, [id*=adslot], .contentteaserBox.wideTeaser",
		"pastebin.com"        	: "#notice, [id*=abrpm], .banner_728",
		"salamisound.de"        : "#header_0_warning, .header_0_warning",
		"crodict.de"        	: "#context .box:nth-of-type(2)",
		"pcwelt.de"        		: "#header ~ div:nth-of-type(1), #header ~ div:nth-of-type(2), #header ~ div:nth-of-type(3)",
		"tropicraft.net"        : "center h2, center ins",
		"minecraft-forum.net"	: ".download-panel #ImageAndButton",
		"gottabemobile.com"	    : "center i",
		"prosiebenmaxx.at"	    : "#main > div:first-child, [id*=ad-performance], .ad, #main > div:nth-of-type(6)",
		"mobilesringtones.com"  : ".site-usage-warning",
        "windowscentral.com"    : ".swal-overlay--show-modal",
        "cnn.com"               : ".bx-slab, bx-shroud" //remove annoying popover, not ad
	};

	var site = window.location.href || document.URL;
	var remove;

	for(var url in data) {
		if(site.includes(url)) {
			remove = data[url];
			break;
		}
	}

	if(typeof remove !== "undefined") {
		GM_addStyle(
			remove + " {" +
				"display: none !important;" +
				"visibility: hidden !important;" +
				"width: 0px !important;" +
				"height: 0px !important;" +
			"}"
		);
		console.info("Don't Use AdBlock - Killer was active [Identification: " + remove + "].");
	}
