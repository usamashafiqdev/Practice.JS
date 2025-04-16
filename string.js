// Lower Case
let lower= "HELLO";
let result1 = lower.toLowerCase();  
console.log(result1);  

// Upper Case
let string = "hello";
let result2 = string.toUpperCase();  
console.log(result2);  

// Trim
let nameT= "   Hello, world!   ";
let result3 = nameT.trim();  
console.log(result3);

// Trim Start
let str_t = "   Hello World!   ";
let trimmedStart = str_t.trimStart();
console.log(trimmedStart); 

// Trim End
let str_e = "   Hello World!   ";
let trimmedEnd = str_e.trimEnd();

console.log(trimmedEnd);  

// Slice
let sli = "Hello, world!";
let result4 = sli.slice(7, 12); 
console.log(result4);  

// Concat
let str1 = "Hello, ";
let str2 = "world!";
let result5 = str1.concat(str2);  
console.log(result5); 

// Replace
let rep = "I like JavaScript!";
let result6 = rep.replace("JavaScript", "Python");  
console.log(result6);  

// CharAt
let character = "Hello!";
let result7 = character.charAt(1);  
console.log(result7);  

// Find the length
let text ="My Name";
console.log(text.length)


//  PadStart
let text2 =6;
let numb=text2.toString()
let modify=numb.padStart(5,"0")
console.log(modify)


// PadEnd
let text3 =6;
let numb3=text2.toString()
let modify3=numb3.padEnd(4,"0")
console.log(modify3)


// Repeat word
let word = "Hi ";
let result = word.repeat(3);

console.log(result);


// Repeat character
let star = "*";
console.log(star.repeat(5));

