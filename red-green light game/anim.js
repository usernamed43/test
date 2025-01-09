$(document).ready(function() {
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 700);
 	var classes = ["jade", "erika", "cousin", "lucy"]
 	$("body").addClass(classes[~~(Math.random()*classes.length)]);
});