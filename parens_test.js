function balencedParens(string) {
    return !string.split("").reduce(function(counter, item) {
        if (item < 0){return counter;}
        if (item === "(") {return ++counter;}
        if (item === ")") {return --counter;}
        return counter;
    }, 0);
}

    $('button').on("click", function() {
        var text = $("#parens").val();
        var result = balencedParens(text);
        console.log(result);
        $('.response').append('<h1>' + result +'</h1>');
    });
