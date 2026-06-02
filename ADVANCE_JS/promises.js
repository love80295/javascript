 // promises  -- > promise gave the esurity that this work will be done in future 

//const { Profiler } = require("react");

 
// promise is an object representing eventual completion or failure of an asychronous operation

// how to make promise

// const promiseOne = new Promise(function(resolve , reject){
//     // do asyn task
//     setTimeout(function(){
//         console.log('A');
//         resolve()
//     }, 2000);
// }); // promise have two part resolve and reject
 

// to comsume the promise

// promiseOne.then(function(){
//     console.log('promise consumed')
// })

// another way

// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('B');
//         resolve();
//     } , 1000);
// }).then(function(){
//     console.log('completed');
// })


// promise three

// const promiseThree = new Promise(function(resolve , reject){
//     setTimeout(function(){
//       resolve({
//         'name':'love' , 'email':'love@email.com',
//       }).  // here er can pass data to then by the help of resolve
//     } , 1000);
// });
// promiseThree.then(function(user){
//     console.log(user);
// })

// promisr four

// const promiseFour = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         const error = false;
//         if(!error){
//             resolve({ username:'love' , pass:'1243534'});
//         }else{
//             reject('SOMETHING WENT WRONG');
//         }
//     },1000)
// })
// promiseFour
// .then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log('your promise is either resolved or rejected')
// })


// promise five 

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        const error = true;
        if(!error){
            resolve({ username:'mkb' , pass:'1243534'});
        }else{
            reject('TMKB WENT WRONG');
        }
    },1000);
})         // concept of asunc await     // asunc await cannot handle error directly
async function consumeFive() {
     try{
        const response =  await promiseFive;
   console.log(response);
     }catch(error){
        console.log(error);
     }
}
consumeFive();