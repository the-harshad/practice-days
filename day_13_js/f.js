console.log("hello");
// this is js code


// assignment - 2

let num = 200;
if(num % 10 == 0){
    console.log("good");
}
else{
    console.log("bad");
}

// name = prompt("Enter your Name:");
// age = prompt("Enter your Age:");
// alert(`${name} is ${age} year old.`)

let quarter = 2;

switch(quarter){
    case 1:
        console.log("January,February,March");
        break;
        
    case 2:
        console.log("April,May,June");
        break;
            
    case 3:
        console.log("July,August,September");
        break;
        
    case 4:
        console.log("October,November,December");
        break;

    default:
        console.log("uncurrect Choice Plz Enter 1 to 4.");
    
}

let str = "apples";

if( (str[0] == 'a' || start[0] =='A') && (str.length > 5) ){
    console.log("golden string");
}
else {
    console.log("not a golden string");
}

let a = 115;
let b = 8;
let c = 13;

if(a>b){
    if(a>c){
        console.log(a,"is largest");
    } else{
    console.log(c,"is largest");
    }
} else{
    if(b>c){
    console.log(b,"is largest");
    }
    else{
    console.log(c,"is largest");
    }
}

let num1 = 32;
let num2 = 47852;

if ( (num1%10) == (num2%10)){
    console.log("number have the same last digit which is",num1%10);
}else {
    console.log("numbers don't have the same last digit");
}

// assignment - 3

let arr = [7,9,0,-2];
let n = 3;
let ans= arr.slice(0,n);
console.log(ans);

let anss= arr.slice(arr.length-n);
console.log(anss);

let strr = prompt("please enter a string...")

if(strr.length == 0){
    console.log("string is empty !!")
}
else{
    console.log("string is not empty !!")
}


let sttr = "ApNaCoLlEgE";
let idx = 3;

if(sttr[idx]==sttr[idx].toLowerCase())
    {
        console.log("character is lowercase");
    }
    else
     {
        console.log("character is not lowercase");
     }

