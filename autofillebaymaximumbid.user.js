// ==UserScript==
// @name           Autofill eBay Maximum Bid
// @namespace      http://sopoforic.wordpress.com/
// @description    Automatically fills in the maximum bid box with the minimum possible bid.
// @version        0.3.3
// @copyright      2010+, Tracy Poff (http://sopoforic.wordpress.com/)
// @license        GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include        *.ebay.tld/*
// @require        http://sizzlemctwizzle.com/updater.php?id=67507
// ==/UserScript==
try{

var pattern = new Array();

//English patterns
pattern.push(/Enter\sUS\s\$(\d+\.\d+)/);
pattern.push(/Enter\sEUR\s(\d+\.\d+)/);
pattern.push(/Enter\sGBP\s(\d+\.\d+)/);
pattern.push(/Enter\sAU\s\$(\d+\.\d+)/);

//German patterns
pattern.push(/Geben\sSie\smindestens\sEUR (\d+\,\d+)/);
pattern.push(/Geben\sSie\smindestenss£(\d+\,\d+)/);

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