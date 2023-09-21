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
    let firstInput = parseInt($("#numberOne").val());
    let secondInput = parseInt($("#numberTwo").val());

    let result = add(firstInput, secondInput);



    $(".answer").text(result);
    $(".display").show();
  });
  $("#calculator2").submit(function(reload){
    reload.preventDefault();
    let firstInput = parseInt($("#numberOneB").val());
    let secondInput = parseInt($("#numberTwoB").val());

    let result = subtract(firstInput, secondInput);
    console.log(result)

    $("#answer").text(result);
    $(".display").show();

  });
  $("#calculator3").submit(function(page){
    page.preventDefault();
    let firstInput = parseInt($("#numberOneC").val());
    let secondInput = parseInt($("#numberTwoC").val());

    let result = divide(firstInput, secondInput);
    console.log(result)

    $(".answer2").text(result);
    $(".display2").show();

  });
  $("#calculator4").submit(function(page){
    page.preventDefault();
    let firstInput = parseInt($("#numberOneD").val());
    let secondInput = parseInt($("#numberTwoD").val());

    let result = multiply(firstInput, secondInput);
    console.log(result)

    $("#answer2").text(result);
    $(".display2").show();

  });
  $("#calculator5").submit(function(mode){
    mode.preventDefault();
    let firstInput = parseInt($("#numberOneE").val());
    let secondInput = parseInt($("#numberTwoE").val());

    let result = module(firstInput, secondInput);
    console.log(result)

    $(".answer3").text(result);
    $(".display3").show();

  });
  
})