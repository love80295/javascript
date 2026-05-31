 // genarate a random color

const randomColor = function(){
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0 ; i<6 ; i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}
let setid;
    const startchanging = function(){
       setid = setInterval(function(){
         document.body.style.backgroundColor = randomColor();
       } , 500);
    }
    const stopchanging = function(){
        clearInterval(setid);
    }
 document.getElementById('start').addEventListener('click' , startchanging);
 document.getElementById('stop').addEventListener('click' , stopchanging);