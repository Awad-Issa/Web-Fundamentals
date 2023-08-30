function functionname(){
    document.querySelector('.cookie').remove();
}
function burbankalert(){
    alert("Its Burbank's Weather!");
}
function chicago(){
    alert("Its Chicago's Weather!");
}
function dallas(){
    alert("Its Dallas's Weather!"); 
}

function c2f (temp) {
    return Math.round(9 / 5 *temp + 32 );
    
}
function f2c (temp) {
    return Math.round (5 / 9 *(temp - 32));
}

function changing (element){
    for ( var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i)
        var tempVal = tempSpan.innerText; 
        if (element.value == "c"){
            tempSpan.innerText = f2c (tempVal);
        }
        else {
            tempSpan.innerText = c2f (tempVal);

        }
    }
}