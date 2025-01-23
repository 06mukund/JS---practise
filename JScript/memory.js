// Stack and Heap  
// Primitive DataType stored in Stack
//Non-Primitive DataType stored in Heap

// Call by Value

name1 = "Mukund"
name2 = name1

name2 = "Rohit"

console.log(name1);
console.log(name2);

// Call by Refrence

user1 = {
    email : "user@google.com",
    name_user : "Hirok"
}

user2 = user1

user2.email = "user@hello.com"

console.log(user1.email);
console.log(user2.email);


