$(function(){
	$("#read-1, #read-2, #read-3, #read-4").click(function(){
		$("#text-"+$(this).data('index')).addClass("reveal");
		$(this).hide();
	});
});

function scrollWin() {
 $('html, body').animate({
        scrollTop: 0
    }, 800);
}