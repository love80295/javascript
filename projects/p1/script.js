// our goal is to change the color when we click any of the boxes
// we need to select the body and button
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
buttons.forEach(function(button){
    // we will aplly event listner
    button.addEventListener('click' , function(e){
    
        if(e.target.id=== 'grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='yellow'){
            body.style.backgroundColor = e.target.id;
        }
    })
})