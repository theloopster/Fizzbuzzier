$(document).ready(function(){
var error = 0;
var input;
var goodToGo= true;
var errorRepeat=function (){
	alert('Seriously?!?!? My five year would not have gotten it wrong '+error+' times.  Get your act together!');
	goodToGo=false;
}

var checkInteger = function(){
	input = $('#upperBound').val();
	if (isNaN(+input)){
		error ++;
		if (error ==1){
		alert('I need a number, dumbass!');
		goodToGo=false;
}
else  {
		errorRepeat();
	}
} else if(+input % 1 !== 0){
		error ++;
		if (error == 1){
			alert('Integers only, please.');
			goodToGo=false;
		}
		else	{
				errorRepeat();
				}
		}
}
var fizzBuzz = function(){
	checkInteger();
	if(goodToGo==false){
		$('input').val('');
		goodToGo=true;
	}
	else{
		$(".output").empty();
	for (var i = 1; i<=+input; i++){
		if(i%15==0){
			$('.output').append('Fizz Buzz'+'<br>');
		}
		else if (i%5==0){
			$('.output').append('Buzz'+'<br>');

		}
		else if (i%3==0){
			$('.output').append('Fizz'+'<br>');
		}
		else {
			$('.output').append(i+'<br>');
		}
	}
}
};

$('button').click(function(){
	input = $('.input').val();
	fizzBuzz();
});
});