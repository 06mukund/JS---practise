const coding = [1,2,3,4,5,5,6,7,8]
/*

coding.forEach( function (val){
   // console.log(val)
})
*/
// const values = coding.forEach((val) => {
    //console.log(val);
 //   return val

//
//console.log(values);  -------- This will not work for forEach so for that we can use filter or map() function

//Filter return only values that meet specific criteria  that is true values but map() reutrn all the values

//There is also one concept f reduce  that  use  accumulator and just used to count from that

const values = coding.filter((val) => {
    return val > 3
})

console.log(values);


