(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };


$(document).ready(function() {
r=function(){dpi=window.devicePixelRatio;$('.js-3').attr('src', (dpi>1) ? 'images/2019.8.3-5-01-78.png' : 'images/2019.8.3-5-01-39.png');
$('.js-4').attr('src', (dpi>1) ? 'images/qrcode_for_gh_5675d3c6f32f_344-170-2.jpg' : 'images/qrcode_for_gh_5675d3c6f32f_344-85-2.jpg');};
if(!window.HTMLPictureElement){r();}
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-2')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});