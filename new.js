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
    document.querySelector("h1").innerText = bmiCalculation();
}