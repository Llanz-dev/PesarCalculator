// Calculation
function bmiCalculation(){
    var Meter = +document.getElementById("Meter").value;
    var inputKilogram = +document.getElementById("kilogram").value;
    var result =  inputKilogram / (Meter * Meter);
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