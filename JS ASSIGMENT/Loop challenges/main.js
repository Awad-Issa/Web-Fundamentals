//Odd Numbers
function odd (){
    for(i=1;i<=20;i++){
        if(i%2!=0){
            console.log(i)
        }
        
    }
} 

//Decreasing Multiples of 3
function Decreasing(){
    for(i=100;i>0;i--){
        if(i%3==0){
            console.log(i)
        }
    }
}

//Print the sequence
function sequence(){
    for(i=4;i>-5;i-=1.5){
        console.log(i)
    }
}
//Sigma
// sum from 1 to n = (n*n+1)/2
function sigma(){
    let sum= (100*101)/2
    
    console.log(sum)
}
//Factorial
function factorial(){
let fac=1;
for(i=1;i<=12;i++){
    fac*=i
}
console.log(fac)
}
// FOR TEST REMOVE THE SLASHES AND RUN !!

//odd ();
// Decreasing();
// sequence();
// sigma();
//factorial();