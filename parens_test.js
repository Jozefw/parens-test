function balencedParens(string){
return string.split('').reduce(function(counter,item){
// increment counter by one if a left facing parens decrement if right facing
if(item === "("){
	return counter++;

}
if (item === ")"){
	return counter--;
}
return counter;

},0);

}

$(document).ready(function(){
	var text = $("#parens").val();
	$('button').on("click",function(){
		balencedParens(text);
	});
})


