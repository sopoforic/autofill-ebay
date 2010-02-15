// ==UserScript==
// @name           Autofill eBay Maximum Bid
// @namespace      http://sopoforic.wordpress.com/
// @description    Automatically fills in the maximum bid box with the minimum possible bid.
// @version        0.1.6
// @copyright      2010+, Tracy Poff (http://sopoforic.wordpress.com/)
// @license        GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @include        *.ebay.tld/*
// @require        http://sizzlemctwizzle.com/updater.php?id=67507
// ==/UserScript==
try{
var MaxBidElement;
var amount;

if (MaxBidElement = document.getElementById("v4-23")){
	//US currency, another page
    if(MaxBidElement.innerHTML.match(/Enter US \$(\d+\.\d+) or more/)){
        amount = RegExp.$1;
        document.getElementById("v4-22").value = amount
    }
    else if (MaxBidElement.innerHTML.match(/Geben Sie mindestens EUR (\d+\,\d+) ein/)) {
        //from eBay.de, EUR currency
        amount = RegExp.$1;
        document.getElementById("v4-22").value = amount
    }
    else if (document.getElementById("v4-24").innerHTML.match(/Enter EUR (\d+\.\d+) or more/)) {
        //EUR on ebay.com
        amount = RegExp.$1;
        document.getElementById("v4-23").value = amount
    }
}
else if (MaxBidElement = document.getElementById("v4-29")){
	//US currency normal page
	MaxBidElement.innerHTML.match(/Enter US \$(\d+\.\d+) or more/);
	amount = RegExp.$1;
	var maxbid_box = document.getElementsByTagName("maxbid");
    //this isn't helping. Need a better way to do this.
	if(maxbid_box){maxbid_box(0).value = amount;}
}
else if (MaxBidElement = document.getElementById("v4-30")){
	//AU currency normal page
	MaxBidElement.innerHTML.match(/Enter .+(\d+\.\d+) or more/);
	amount = RegExp.$1;
	var maxbid_box = document.getElementById("v4-13");
	if(maxbid_box){maxbid_box.value = amount;} 
}
else if (MaxBidElement = document.getElementById("v4-31")){
	//US currency, watched item
	MaxBidElement.innerHTML.match(/Enter US \$(\d+\.\d+) or more/);
	amount = RegExp.$1;
	var maxbid_box = document.getElementById("v4-14");
	if(maxbid_box){maxbid_box.value = amount;} 
}
else if (MaxBidElement = document.getElementById("v4-32")){
	//US currency outbid page
	MaxBidElement.innerHTML.match(/Enter US \$(\d+\.\d+) or more/);
	amount = RegExp.$1;
	var maxbid_box = document.getElementById("v4-15");
	if(maxbid_box){
		maxbid_box.value = amount;
	}
	else if (maxbid_box = document.getElementById("v4-31")){
		//US currency, little time left (1-click available)
		//That ID is also used for the *amount* on a watched item. Bad, bad ebay.
		//May have to find a better way to distinguish these, if possible.
		maxbid_box.value = amount;
	}
}
}
catch(err){
	alert(err);

}