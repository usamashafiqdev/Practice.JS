
// Arrays Push
let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits)



// Pop

let colors = ["red", "green", "blue"];
let lastColor = colors.pop();
console.log(lastColor); 
console.log(colors);    


// String
let string = [1, 2, 3];
let results = string.toString();  
console.log(results);  

// Shift
let shift = [1, 2, 3];
let firstElement = shift.shift();  
console.log(shift);                
console.log(firstElement);  

// Unshift
let arr = [2, 3];
let newLength = arr.unshift(1); 
console.log(arr);                
console.log(newLength);   

// Concat
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);  
console.log(result);

Slice
let slice= [1, 2, 3, 4, 5];
let total = arr.slice(1, 4);  
console.log(total);           
console.log(slice);      

// Splice

let splice = [1, 2, 3, 4, 5];
let removedItems = arr.splice(2, 2, 6, 7); 
console.log(splice);              
console.log(removedItems); 

// ARRAY MAP METHOD

let num=[23,53,51,54]
    num.map((vlaue, index, )=>{
        console.log(vlaue+1,index,)
    }

)
console.log(num)

// ARRAY Filter Method

let num2=[22,53,51,54,10]
let a2=num2.filter((a) =>{
    return (a>51)

}

)
console.log(a2)
