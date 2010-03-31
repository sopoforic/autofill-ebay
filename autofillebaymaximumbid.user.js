﻿// ==UserScript==
// @name           Autofill eBay Maximum Bid
// @namespace      http://sopoforic.wordpress.com/
// @description    Automatically fills in the maximum bid box with the minimum possible bid.
// @version        0.3.2
// @copyright      2010+, Tracy Poff (http://sopoforic.wordpress.com/)
// @license        GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include        *.ebay.tld/*
// @require        http://sizzlemctwizzle.com/updater.php?id=67507
// ==/UserScript==
try{

var pattern = new Array();

//English patterns
pattern.push(/Enter US \$(\d+\.\d+)/);
pattern.push(/Enter EUR (\d+\.\d+)/);
pattern.push(/Enter GBP (\d+\.\d+)/);
pattern.push(/Enter AU \$(\d+\.\d+)/);

//German patterns
pattern.push(/Geben Sie mindestens EUR (\d+\,\d+)/);
pattern.push(/Geben Sie mindestens £(\d+\,\d+)/);

//Ordinary item page
if (document.getElementById("vi-tTbl")) {
    for (x in pattern) {
        if (document.getElementById("vi-tTbl").innerHTML.match(pattern[x])) {
            document.getElementsByName("maxbid")[0].value = RegExp.$1;
            break;
        }
    }
}
//"You've just been outbid" page
else if (document.getElementsByName("OutbidForm")[0]) {
    for (x in pattern) {
        if (document.getElementsByName("OutbidForm")[0].innerHTML.match(pattern[x])) {
            document.getElementsByName("maxbid")[0].value = RegExp.$1;
            break;
        }
    }
}
}
catch(err){
    alert(err);
}