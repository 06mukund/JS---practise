myobj = {
    name : "Mukund",
    roll : 4,
    session : 2024-27,
    university : "Tezpur University",
    city : "Tezpur",
    5 : "Noting"
}

//console.log(Object.keys(myobj));
//console.log(Object.values(myobj));
//console.log(Object.entries(myobj));

//console.log(myobj.hasOwnProperty(5));

//Important -- Destructing Assignment

const {university : uni} = myobj
console.log(uni);



