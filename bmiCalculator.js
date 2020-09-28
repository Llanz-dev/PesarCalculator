function bmiCalculation(weight, height){
    var result = weight / (height * height);
    var round = result;
    round = round.toFixed(1)
    return round;
}
function btnCalculate(){
    var inputWeight = +document.getElementById("weight").value;
    var inputHeight = +document.getElementById("height").value;
    var completeResult = bmiCalculation(inputWeight, inputHeight);
    if(completeResult < 18.5){
        document.getElementById("displayResult").innerText = "Your BMI is \"" + completeResult + "\"  you are underweight";
    } else if (completeResult >= 18.5 && completeResult <= 24.9){
        document.getElementById("displayResult").innerText = "Your BMI is \'"+ completeResult + "\'  you have a normal weight";
    } else if (completeResult >= 25.0 && completeResult <= 29.9){
        document.getElementById("displayResult").innerText = "Your BMI is \"" + completeResult + "\"  you are overweight";
    } else if (completeResult >= 30.0 && completeResult <= 34.9){
        document.getElementById("displayResult").innerText = "Your BMI is \"" + completeResult + "\"  you are Obesity Class 1";
    } else if (completeResult >= 35.0 && completeResult <= 39.9){
        document.getElementById("displayResult").innerText = "Your BMI is \"" + completeResult + "\"  you are Obesity Class 2";
    } else {
        document.getElementById("displayResult").innerText = "Your BMI is \"" + completeResult + "\"  you are Obesity Class 3";        
    }
}