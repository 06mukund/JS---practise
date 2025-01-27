// Constructor Method of Declaring object -- const my_obj = new Object() -- It is singleton


const add = Symbol("key")

const myobj = {
    name : "Mukund",
    age : 21,
    course : "btech",
    "year" : "2nd",
    [add] : "Muzaffarpur" // Add symbol to object
}

console.log(myobj);

myobj.name = "Mukund Kumar"
console.log(myobj.name); // Make changes in existing object

myobj.greeting = function greeting(){
    console.log(`Hello ${this.name}`);    
}

myobj.greeting()

// We can create array of objects and nested object
// aceess of array of object ---- myobj[1].name

