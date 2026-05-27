const abc = ["java" , "love" , "python" , "ruby"];

abc.forEach( function (item){ // 1st give name of array then . forEach then how you declare a function decl;are it without giving the name pass iterator in parameters
  console.log(item);
})

// it does not mean ki wo sirf item hi leke ataa hoga uske paas aur bhi paarameter hote h jaise

abc.forEach(function(item , i , arr){
    console.log(item , i , arr);
})


// for each loop on objects in array

const myarr = [
    {
        1:'a',
        2:'b',
    },
    {
        1:'c',
        2:'d',
    },
    {
        1:'e',
        2:'f',
    },
]
myarr.forEach(function(Item){
   // console.log(Item[1]); 
})


// filter

const nums = [1,2,3,4,5,6,7,8,9,10];
 // for each do not return the value while filter return s the value

 const newnum = nums.filter(function(num){
          return  num>5;
 })
 console.log(newnum);

 // map           

 const nums2 = [1,2,3,4,5,6,7,8,9,0];

//  const newnums = nums2.map((num) => num+10); // if you open the scope you need to write the return else not need but it will return the values as filter
//  console.log(newnums);

 // chaining

 const newnums = nums2.map((num)=> num+10).map((num) => num+1); // chaining means passing the answer of one function to another 
 console.log(newnums);
   

 //    ..............  core difference between filter and map()..............

 // filter works on true or false , if this is true keep it else drop if
 // map works on each and every element of Object 




 // reduce 
 

 const arr = [1,2,3]; // reduce gets two valeus 1 -> accumulator 2 -> cuurvalue

//  const total = arr.reduce(function(acc , currval){
//     return acc+currval;
//  } , 0);
//  console.log(total);

// cool banne ke liey ese likho

const total = arr.reduce((acc , currvalue) => (acc+currvalue) , 0);
console.log(total);

 // reduce is basiccaly used to find total



