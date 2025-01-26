let mydate = new Date()
console.log(mydate); // Not Readable
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(mydate.toString); // Much Readable


console.log(mydate.toLocaleString("default" , {
    weekday: "long"
}))

// Create Date

let BirthDate = Date("12-05-2007")
console.log(BirthDate.toString());


