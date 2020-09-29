function kilogram(){
    var inputKilogram = +document.getElementById("kilogram").value;
    for(var i = inputKilogram; i > 0; i++){
        inputKilogram *= 2.20462;
        inputKilogram = Math.floor(inputKilogram);
        break;
    }
    return inputKilogram;
}
function feetInch(){
    var inputFeet = +document.getElementById("feet").value;
    var inputInch = +document.getElementById("inch").value;
    for(var i = inputFeet; i > 0; i++){
       inputFeet*=12;
       break;
    }
    var heightCalculation = inputFeet + inputInch
    heightCalculation = heightCalculation * heightCalculation;
    return heightCalculation;
}
function bmiCalculation(){
    var result = (kilogram() / feetInch()) * 703;
    result = result.toFixed(1);
    return result;
}
function btnCalculate(){
    var completeResult = bmiCalculation();
    if(completeResult < 18.5){
        document.getElementById("displayResult").innerText = "Your BMI is \'" + completeResult + "\'";
        document.getElementById("message").innerText = "you are underweight";
    } else if (completeResult >= 18.5 && completeResult <= 24.9){
        document.getElementById("displayResult").innerText = "Your BMI is \'"+ completeResult + "\'";
        document.getElementById("message").innerText = "you have a normal weight";
    } else if (completeResult >= 25.0 && completeResult <= 29.9){
        document.getElementById("displayResult").innerText = "Your BMI is \'" + completeResult + "\'";
        document.getElementById("message").innerText = "you are overweight";
    } else if (completeResult >= 30.0 && completeResult <= 34.9){
        document.getElementById("displayResult").innerText = "Your BMI is \'" + completeResult + "\'";
        document.getElementById("message").innerText = "you are Obesity Class 1";
    } else if (completeResult >= 35.0 && completeResult <= 39.9){
        document.getElementById("displayResult").innerText = "Your BMI is \'" + completeResult + "\'";
        document.getElementById("message").innerText = "you are Obesity Class 2";
    } else {
        document.getElementById("displayResult").innerText = "Your BMI is \'" + completeResult + "\'";
        document.getElementById("message").innerText = "you are Obesity Class 3";
    }
}