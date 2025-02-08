const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR','France')

//console.log(map);

for (const[key,value] of map){
 //   console.log(key , value)
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}