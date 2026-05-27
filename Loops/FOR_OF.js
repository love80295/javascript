// for of is a array specific loop

const arr = [1,2,3,4,5,6,7,8,9];
for (const i of arr) {
    console.log(i); // simple for of    laga kar chod do apne aap chelega 
}
const st = "abcdefghijklmnopqrstuvwxyz";
for(const i of st){
    console.log(i);
}

// MAPS

const map = new Map(); // map is used for unique values
map.set(1,2);
map.set(3,4);
map.set(5,6);
map.set(7,8);
console.log(map);
for(const [key , value] of map){
    console.log([key] +'-->' + [value] );
}       // this is for of loop on map

const obj = {
    'a' : 'b',
    'c' : 'd',
}
for(const [key , value] of obj){
    console.log(key)
}        // objects are not iterable in for of loop
