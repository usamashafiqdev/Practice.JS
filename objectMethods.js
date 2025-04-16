
// keys Method

let person1 = { name: "Usama", age: 30, city: "New York" };
let keys = Object.keys(person1); 
 console.log(keys);  

// Value
let person2 = { name: "Usama", age: 30, city: "New York" };
let values = Object.values(person2); 
console.log(values);  

// Entries 
let person3 = { name: "Usama", age: 30, city: "New York" };
let entries = Object.entries(person3); 
console.log(entries);  

// Assign
let person4 = { name: "Usama" };
let contact = { phone: "123-456-7890" };
let result = Object.assign(person4, contact);  
console.log(person4);  

// Freeze
let person5 = { name: "Usama", age: 30 };
Object.freeze(person5); 
person5.age = 35;  
console.log(person5.age);  

// Seal 
let person6 = { name: "Usama", age: 30 };
Object.seal(person6); 
person6.age = 35;  
person6.city = "New York"; 
console.log(person6);  

// Has On Property
// let person = { name: "John", age: 30 };
// console.log(person.hasOwnProperty("name")); 
// console.log(person.hasOwnProperty("city")); 


