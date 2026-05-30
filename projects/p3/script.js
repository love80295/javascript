const clock = document.getElementById('clock');
// setinterval method control the timing of a method

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
} , 1000) // in ms