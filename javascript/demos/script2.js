function performOperation() {

    var num1 = parseInt(document.getElementById("num1").value);//10
    var num2 = parseInt(document.getElementById("num2").value);//20
    var result = 0
    let operation = document.getElementById("operation").value;
    switch (operation) {
        case "1":
            result = num1 + num2;
            break;
        case "2":
            result = num1 - num2;
            break;
        case "3":
            result = num1 * num2;
            break;
        case "4":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                var result = "Cannot divide by zero";
            }
            break;
        default:
            result = "Invalid operation";
    }

    let resultDiv = document.getElementById("result");
    let bold = document.getElementById("bold").checked;//true
    let italic = document.getElementById("italic").checked;//false      
    let underline = document.getElementById("underline").checked;//false

    resultDiv.style.fontWeight = bold ? "bold" : "normal";
    resultDiv.style.fontStyle = italic ? "italic" : "normal";
    resultDiv.style.textDecoration = underline ? "underline" : "none";

    colorOptions = document.getElementsByName("color");

    for (let i = 0; i < colorOptions.length; i++) {
        if (colorOptions[i].checked) {      
            resultDiv.style.color = colorOptions[i].value;
            break;  
        }
    }


    resultDiv.innerHTML = "Result: " + result;
}
function load() {
    document.getElementById("num1").focus();

    document.getElementById("result").style.border = "1px solid red";
    document.getElementById("result").style.margin = "10px";
}