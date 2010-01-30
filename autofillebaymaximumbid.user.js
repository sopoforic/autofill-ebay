// ==UserScript==
// @name           Autofill eBay Maximum Bid
// @namespace      http://sopoforic.wordpress.com/
// @description    Automatically fills in the maximum bid box with the minimum possible bid.
// @version 0.1.0
// @copyright 2010+, Tracy Poff (http://sopoforic.wordpress.com/)
// @license GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include        *.ebay.tld/*
// ==/UserScript==
try{
var MaxBidElement;
var amount;

if (MaxBidElement = document.getElementById("v4-29")) {
	//US currency normal page
	MaxBidElement.innerHTML.match(/Enter .+(\d+\.\d+) or more/);
	amount = RegExp.$1;
	var maxbid_box = document.getElementById("v4-12");
	if(maxbid_box){maxbid_box.value = amount;} 
}	
else if (MaxBidElement = document.getElementById("v4-30"))
{
	//AU currency normal page
	MaxBidElement.innerHTML.match(/Enter .+(\d+\.\d+) or more/);
	amount = RegExp.$1;
	var maxbid_box = document.getElementById("v4-13");
	if(maxbid_box){maxbid_box.value = amount;} 
}
else if (MaxBidElement = document.getElementById("v4-32"))
{
	//US currency outbid page
	MaxBidElement.innerHTML.match(/Enter .+(\d+\.\d+) or more/);
	amount = RegExp.$1;
	var maxbid_box = document.getElementById("v4-15");
	if(maxbid_box){maxbid_box.value = amount;} 
}
}catch(err){alert(err);}
