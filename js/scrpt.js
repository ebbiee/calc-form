function add(num1, num2){
  return num1 + num2;
}
function subtract(num1, num2){
  return num1 - num2;
}
function multiply(num1, num2){
  return num1 * num2;
}
function divide(num1, num2){
  return num1 / num2;
}
function module(num1, num2){
  return num1 % num2;
}
$(document).ready(function(){
  $("#calculator").submit(function(event){
    event.preventDefault();
    const firstInput = parseInt($("#numberOne").val());
    const secondInput = parseInt($("#numberTwo").val());

    let result = add(firstInput, secondInput);
    let result2 = subtract(firstInput, secondInput);


    $(".answer").text(result);
    $(".display").show();
  })
  $("#calculator2").submit(function(event){
    event.preventDefault();
    const firstInput = parseInt($("#numberOne").val());
    const secondInput = parseInt($("#numberTwo").val());


    let result2 = subtract(firstInput, secondInput);


    $(".answer2").text(result2);
    $(".display2").show();
  })
})