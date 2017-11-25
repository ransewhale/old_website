$(function(){

function removeWrongChars(str){
	var arr = "abgdDefkhH?xqi3lmnñNpurRGsSXtcTvwjzZW \r\n".split('');
	var data = str.split('');
	var ret = "";
	for(i=0; i<data.length; i++){
		if(jQuery.inArray(data[i],arr) > -1){
			ret = ret + data[i];
		}
	}
	return ret;
}

function latinToTifinagh(str){
	var lat = "abgdDefkhH?xqi3lmnñNpurRGsSXtcTvwjzZW \r\n".split('');
	var tif = "ⴰⴱⴳⴷⴹⴻⴼⴽⵀⵃⵄⵅⵇⵉⵊⵍⵎⵏⵐⵑⵒⵓⵔⵕⵖⵙⵚⵛⵜⵞⵟⵠⵡⵢⵣⵥⵯ".split('');
	tif.push("&nbsp;");
	tif.push("<br />");
	tif.push("<br />");
	var ret = "";
	for(i=0; i<str.length; i++){
		var j = jQuery.inArray(str[i],lat);
		ret = ret + tif[j];
	}
	return ret;
}

/*
function transfer(str,pos){
	var data = str.split('');
	var ret = "";
	for(i=0; i<data.length(); i++){
		switch(data[i]){

		}
	}
}
*/

var timer_id = setInterval( function () {
},50);

$("#input").keyup(function(){
	var val = $("#input").val();
	var str = removeWrongChars(val);
	$("#input").val(str);
	$("#output").html(latinToTifinagh(str));

});

$("#input").submit(function(){
	return false;
});

});