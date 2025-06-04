
// assignment - 4

// q-1 
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

for(let i=0; i<arr.length; i++) {
     if(arr[i] == num) { 
            arr.splice(i,1);
        }
    }
    
    console.log(arr);

// q-2
let number1 = 287152;
let count = 0;

let copyy = number1;

while (copyy > 0) {
        count++;
        copy = Math.floor(copyy/10);
      }
    
    console.log(count);

// q-3
let number = 287152;
let sum = 0;

let copy = number;

while(copy > 0) { 
    digit = copy % 10;
    sum+= digit;
    copy = Math.floor(copy/10);
   }
   
   console.log(sum);
   
// q-4
let n = 5;
   let factorial = 1;
   
   for(let i=1; i <= n; i++) {
    factorial *= i;

    }
    
    console.log(`factorial of ${n} is ${factorial}`);
    
// q-5
let arr1 = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for(let i=0; i<=arr1.length; i++) {
    if(largest < arr1[i]) {
        largest = arr1[i];
    }
}

console.log(largest);



// assignment - 5

//q-1
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

//q-2
const car = {
    name:"MarutiSuzuki",
    model:"MarutiSuzukiDzire",
    color:"white",

};

console.log(car.name);

//q-3
const Person = {
    name:"JaneDoe",
    age:21,
    city:"NewJersey",

};

Person.city = "NewYork";
Person.country = "UnitedStates";
console.log(Person);

// assignment - 6

//q-1
let arr3 = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num3 = 5;

//elements larger than a number num 

function getElements(arr3, num3) {
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] > num3) {
            console.log(arr3[i]);g
        }
    }
}

getElements (arr3, num3);

//q-2
let str2 = "abcdabcdefgggh";

//function to get String with all unique elements

function getUnique(str2) {
    let ans="";

for(let i = 0; i < str2.length; i++) {
    let currChar = str2[i];
    if (ans.indexOf(currChar) == -1) {
        
    //if current character is not added, then additinans.
     
    //Other wise it is a duplicate.
     ans += currChar;
    }
}

return ans;

}

getUnique(str2);

//q-3 
let country = ["Australia", "Germany", "United States of America"];

function longestName (country) {
    let ansIdx = 0;
    
    for (let i=0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        
        if(currLen > ansLen) {
            ansIdx = i;
        }
    }

    return country[ansIdx];
}

longestName(country);

//q-4
let str = "apnacollege";

function countVowels (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (
            str.charAt(i) == "a"||
            str.charAt(i) == "e"||
            str.charAt(i) == "i"||
            str.charAt(i) == "o"||
            str.charAt(i) == "u"
        ) {
            count++;
        }
    }
    
    return count;

}


//q-5
let start = 100;
let end = 200;

function generateRandom (start, end) {
    let diff = end - start;
    return Math.floor(Math.random() * diff) + start;
}
