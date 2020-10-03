/* 
Meter was converted to inch
Meter = 1 && Inch = 100;

Lanz Based sa Google 
1 Inches = 0.0254
*/

/*function inchConverter(){
    var Inches = document.getElementById("Inches").value;
    Inches*=100;
    return Inches;
}*/

// Calculation
/*function bmiCalculation(){
    var inputKilogram = document.getElementById("kilogram").value;
    var result = inputKilogram / (inchConverter() * inchConverter());
    result = result.toFixed(1);
    return result;
}*/


//=========================================================//
//==================== Jolou Code =========================//
//=========================================================//

// Meter converter Guro Lanz convert the inches nga gin input to meter
// Lanze 1 inch == 0.0254 meters
function meterConverter(inch){
    let inh = inch;
    return inh * 0.0254;
}

//Calculate BMI
function bmiCalculation(kg, meter){
    let result = kg / (meter ^ 2);
    return result.toFixed(1);
}

// Display of Calculation
function btnCalculate(){
    
    // Get the value of the number inputted when clicking a button
    let inches = document.getElementById("Inches").value;
    let kilogram = document.getElementById("kilogram").value;

    //BMI Score
    var completeResult = bmiCalculation(kilogram, meterConverter(inches));
  
    //Displaying Classification of BMI
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