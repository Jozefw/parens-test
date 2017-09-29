function balencedParens(string){
return string.split('').reduce(function(counter,item){
// increment counter by one if a left facing parens decrement if right facing
},0);

}

balencedParens("((((()");