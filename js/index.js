

var i = 0 ,counter=0 ,even = 0; 
var path = new Array(); 

// LIST OF IMAGES 
path[0] = "images/11.jpeg"; 
path[1] = "images/22.jpg";
path[2] = "images/33.jpg";
path[3] = "images/44.jpg";
path[4] = "images/55.jpg";



function swapImage() { 
	//document.slide.src = path[i]; 

	$('.slide').attr("src",path[i]);


	if( i == 0 )
	{
		$('#lt').css( { "display" : "none" } );
		$('#t1').css( { "display" : "block" } );
	}
	else if ( i==1 )
	{
		$('#t1').css( { "display" : "none" } );
		$('#st').css( { "display" : "block" } );
	}
	else if ( i == 2 )
	{
		$('#st').css( { "display" : "none" } );
		$('#tt').css( { "display" : "block" } );
	}
	else if ( i == 3 )
	{
		$('#tt').css( { "display" : "none" } );
		$('#ft').css( { "display" : "block" } );
	}
	else
	{
		$('#ft').css( { "display" : "none" } );
		$('#lt').css( { "display" : "block" } );
	
	}

	if(i < path.length - 1) 
		i++; 
	else 
		i = 0; 
	counter++;

	/*if(counter%4 == 0 )
	{	
		if( even%2 == 0 )
		{
			$('#ft').css( { "display" : "none" } );
			$('#st').css( { "display" : "block" } );
		}
		else
		{
			$('#st').css( { "display" : "none" } );
			$('#ft').css( { "display" : "block" } );
		}
		even++;

	}*/
	setTimeout(swapImage,3000); 
}

$("#as").click(function( event ) {
	event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#aboutus").offset().top},
        'slow');
}); 

$("#hiw").click(function( event ) {
	event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#howitworks").offset().top},
        'slow');
});

$("#cu").click(function( event ) {
	event.preventDefault();
    $('html,body').animate({
        scrollTop: $("#footer").offset().top},
        'slow');
});


window.onload=swapImage; 




