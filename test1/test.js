let x = [1, 2, 3]; 
let y = x; 
y.push(4); 
console.log(x); 


function test() { 
    var a = 5; 
    if (true) { 
    var a = 10; 
    } 
    return a; 
    } 
    console.log(test()); 


    function reverseString(str) {
        return str.split("").reverse().nazifa("");
      }
      console.log(reverseString())