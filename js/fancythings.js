var sidebarPanel = $('#sidebar');
var bkgImage = $('#bkg-layer-img img');

function slideFade() {
	sidebarPanel.animate({
        opacity: 0.65
    }, 900);
}

function imageFade() {
	bkgImage.animate({
        opacity: 0.2
    }, 500);
}
/*
$('.texture-side').click(function(e) {
	e.preventDefault();
	slideFade();
	imageFade();
});
*/

$(document).ready(function() {
	
	// Check for hash value in URL
    var hash = window.location.hash.substr(1);
    
    var href = $('.sample-creative').each(function(){
        var href = $(this).attr('href');
        if(hash===href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#content').load(toLoad);
        } 
    });
     
    $('.sample-creative').click(function(e){
     	e.preventDefault();
     	imageFade();
     	slideFade();
     
    	var toLoad = $(this).attr('href')+' #content';
		$('#content').hide('fast',loadContent);
		$('#load').remove();
		$('#sidebar').append('<span id="load">LOADING...</span>');
		$('#load').fadeIn('normal');
		
		window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
		
		function loadContent() {
        	$('#content').load(toLoad,'',showNewContent());
		}
	    function showNewContent() {
	        $('#content').show('normal',hideLoader());
	    }
	    function hideLoader() {
	        $('#load').fadeOut('normal');
	    }
	    
    return false;
     
    });

});