const obj = {
    js:'java script',
    c:'c',
    java:'java',
    py:'python',
}
// to iterate on map we need for in loop -->

for(const key in obj){
    console.log(key); // to get keys
    console.log(obj[key]); // to get values
}

 const arr  = [10,20,30,40,50,60,70,80,90];
 for(let i in arr){
    console.log(i); // for in loop will print its indices
    console.log(arr[i]); // now you will get its values
 }