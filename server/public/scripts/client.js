//Global Vars

console.log('slickhead');

$(document).ready(readyNow);
function readyNow(){
    console.log('Js sourced');

    $('#add').on('click', addition);
    // $('#subtract').on('click', subtraction);
    // $('#multiply').on('click', mutiplication);
    // $('#divide').on('click', division);
}
function addition() {
    addNum = parseInt($('#first').val()) + parseInt($('#second').val());
    console.log(addNum);
}
console.log('bottom');