$(document).ready(function(){
    var input = ""
    var runningNumber = 0
    var newEntry = false;
    var currOperation = "";

    //numbers
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0').click(function(){
        if(newEntry){$('#answer').val('')};
        input = $(this).text();
        $('#answer').val($('#answer').val() + input);
        newEntry = false;
    });

    //clears
    $('#AC').click(function() {
       $('#answer').val('');
       runningNumber = 0;
    });

    $('#CE').click(function() {
       $('#answer').val(runningNumber);
    });

    //operations



    $('#plus').click(function() {
        runningNumber = evaluate(currOperation, runningNumber, Number($('#answer').val()));
        runningNumber = Number($('#answer').val());
        currOperation = "+"
        newEntry = true;
    });

    $('#multiply').click(function() {
        runningNumber = evaluate(currOperation, runningNumber, Number($('#answer').val()));
        runningNumber = Number($('#answer').val());
        currOperation = "x"
        newEntry = true;
    });
    //equal
    $('#equal').click(function() {
        runningNumber = evaluate(currOperation, runningNumber, Number($('#answer').val()));
        $('#answer').val(runningNumber);
        newEntry = true;
    });

});

function evaluate(currOperation, runningNumber, newNumber){
    switch(currOperation){
        case "+":
        runningNumber += newNumber;
        return runningNumber;
        break;
        case "x":
        runningNumber *= newNumber;
        return runningNumber;
        break;
        default:
        return runningNumber;
    };
}
