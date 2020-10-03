/* 
Height
Foot was converted to inch
foot = 1 && inch = 12 
*/
function feetInch(){
    var inputFeet = +document.getElementById("feet").value;
    var inputInch = +document.getElementById("inch").value;
    inputFeet*=12;
    var heightCalculation = inputFeet + inputInch;
    heightCalculation = heightCalculation * heightCalculation;
    return heightCalculation;
}
/* 
Weight
Kilogram was converted to pounds
Kilogram = 1 && pounds = 2.20642 
*/
function kilogram(){
    var inputKilogram = +document.getElementById("kilogram").value;
    inputKilogram *= 2.20462;
    inputKilogram = Math.floor(inputKilogram);
    return inputKilogram;
}
// Calculation
function bmiCalculation(){
    var result = (kilogram() / feetInch()) * 703;
    result = result.toFixed(1);
    return result;
}
// Display of Calculation
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