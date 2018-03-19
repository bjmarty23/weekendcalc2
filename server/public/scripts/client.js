//Global Vars
hist = []; 
console.log('slickhead');

$(document).ready(readyNow);
function readyNow(){
$('#add').on('click', newInputs);
clear();
    console.log('Js sourced');

}
function clear(){
    $("#container").bind('click', function() {
      $("input[type=number], textarea").val("");
    });
    }

class Inputs {
    constructor(xIn, yIn, answerIn) {
        this.x = xIn;
        this.y = yIn;
        this.answer = answerIn;
    }
} 
function newInputs(xIn, yIn) {
    hist.push(new Inputs(parseInt($('#x').val()), parseInt($('#y').val())));
    
console.log(hist, '1');

$.ajax({
    type: 'POST',
    data: hist,
    url: '/calc'

}).done(function(response){
    totalToDom();
    console.log('success');
}).fail(function(response){
    alert('Somthing went WRONG');
})
}

function totalToDom(){
    $.ajax({
        type: 'GET',
        url: '/calc'

    }).done(function(response){
    //  function appendCalc(data) {
    //     console.log('in append to DOM');
    // appendString = '<tr><td>' + data.inputOne + '</td><td>'
    //               + data.inputTwo + '</td><td></tr>';

    // $('#history').append(appendString);
    //  }
  });
        //if another function need to be called put here
}

    //$('#add').on('click', addition);
    // $('#subtract').on('click', subtraction);
    // $('#multiply').on('click', mutiplication);
    // $('#divide').on('click', division);
            //function if usung objects
// let inputx = parseInt($('#x').val());
    // $('#x').val('');
    // let inputy = parseInt($('#y').val());
    // $('#y').val('');
    // let numbersToSend = {inputOne: inputx,
    //                      inputTwo: inputy};


console.log('bottom');