$(document).ready(function(){
$("a.newslink").click(function(e){
	   e.preventDefault();
	   $(".newslink").each(function( index ) {
		   $(this).removeClass("active-link");
	   });
	   $(this).addClass("active-link");
	   $( "#newscontent" ).load($(this).attr("href")+ " div#newscontent" );
	});
});
