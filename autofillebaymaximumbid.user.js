// ==UserScript==
// @name           Autofill eBay Maximum Bid
// @namespace      http://sopoforic.wordpress.com/
// @description    Automatically fills in the maximum bid box with the minimum possible bid.
// @version        0.2.0
// @copyright      2010+, Tracy Poff (http://sopoforic.wordpress.com/)
// @license        GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include        *.ebay.tld/*
// @require        http://sizzlemctwizzle.com/updater.php?id=67507
// ==/UserScript==
try{

if (document.getElementById("vi-tTbl")) {
    if (document.getElementById("vi-tTbl").innerHTML.match(/Enter US \$(\d+\.\d+) or more/)) {
        document.getElementsByName("maxbid")[0].value = RegExp.$1;
    }
    else if (document.getElementById("vi-tTbl").innerHTML.match(/Geben Sie mindestens EUR (\d+\,\d+) ein/)) {
        document.getElementsByName("maxbid")[0].value = RegExp.$1;
    }
    else if (document.getElementById("vi-tTbl").innerHTML.match(/Enter EUR (\d+\.\d+) or more/)) {
        document.getElementsByName("maxbid")[0].value = RegExp.$1;
    }
    else if (document.getElementById("vi-tTbl").innerHTML.match(/Enter GBP (\d+\.\d+) or more/)) {
        document.getElementsByName("maxbid")[0].value = RegExp.$1;
    }
}
}
catch(err){
    alert(err);
}