//Global Vars
console.log('slickhead');



$(document).ready(readyNow);
function readyNow(){
$('#add').on('click', );
    console.log('Js sourced');

}
function numbersToPush() {
    let inputx = $('#x').val();
    $('#x').val('');
    let inputy = $('#y').val();
    $('#y').val('');
    let numbersToSend = {inputOne: inputx,
                         inputTwo: inputy};
                         console.log(numbersToSend);

$.ajax({
    type: 'POST',
    data: numbersToSend,
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
        //appendCalc(response);
        //if another function need to be called put here
    })
}

    //$('#add').on('click', addition);
    // $('#subtract').on('click', subtraction);
    // $('#multiply').on('click', mutiplication);
    // $('#divide').on('click', division);





console.log('bottom');