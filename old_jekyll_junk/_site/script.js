/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";
   
    //Menu bar scroll function
    var $root = $('html, body');
    $('.button').click(function() {
        console.log("link clicked!");
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 52
        }, 800);
        return false;
    }); 
});

console.log("JS still connected @ end");