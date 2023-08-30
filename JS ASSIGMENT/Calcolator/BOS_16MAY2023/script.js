var NumberOne = '';
var NumberTwo = '';
var Mainoperation;
var DisplayNumberOne = document.querySelector("#display");

function press(value) {
    if (Mainoperation) {
        NumberTwo += value;
        DisplayNumberOne.innerText = NumberTwo;
    }
    else {
        NumberOne += value;
        console.log(NumberOne);
        DisplayNumberOne.innerText = NumberOne;
    }
}
function setOP(operation) {
    Mainoperation = operation;
}
function clr() {
    NumberOne = '';
    NumberTwo = '';
    DisplayNumberOne.innerText = '0';
    Mainoperation = null;
}
function calculate() {
    if (Mainoperation =='+') {
        result  = parseInt(NumberOne) + parseInt(NumberTwo);
        DisplayNumberOne.innerText=result

    }
    else if (Mainoperation =='/')
    {
        result  = parseInt(NumberOne) / parseInt(NumberTwo);
        DisplayNumberOne.innerText=result
    } 
    else if (Mainoperation == '*'){
        result  = parseInt(NumberOne) * parseInt(NumberTwo);
        DisplayNumberOne.innerText=result
    }
    else {
        result  = parseInt(NumberOne) - parseInt(NumberTwo);
        DisplayNumberOne.innerText=result
    }
    // another Way !!! 
    // var result = eval(`${NumberOne} ${Mainoperation}  ${NumberTwo}`);
    // DisplayNumberOne.innerText=result
    


}



