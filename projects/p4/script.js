let randomNumber = (parseInt(Math.random()*100 + 1));
const submit = document.getElementById('subt');
const userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startHower = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevguess = [];
let numguess = 1;

let playgame = true;
if(playgame){
    submit.addEventListener('click' , function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validate(guess);
    })
}

function validate(guess){
  if(isNaN(guess) || guess<1 || guess>100){
    alert('valid number ddal bhai');
  }else{
    prevguess.push(guess);
  }
  if(numguess===11){
    displayguess(guess);
    displaymessage(`oooooooo game over baby your number was ${randomNumber}`);
    endgame();
  }else{
    displayguess(guess);
    checkguess(guess);
  }
}
function checkguess(guess){
    if(guess==randomNumber){
        displaymessage(`😘 seal tod di  bhai`);
        endgame();
    }else if(guess<randomNumber){
      displaymessage(`seal nahi tuti bhai dobara try kar`);
    }else if(guess>randomNumber){
      displaymessage(`phle se tuti thi bhai doabar try kar`);
    }
}
function displayguess(guess){
    userInput.value = '';
    guessSlot.innerHTML+= `${guess} `;
    numguess++;
    remain.innerHTML = `${11-numguess}`;
}
function displaymessage(message){
    loworhi.innerHTML = `<h2> ${message} </h2>`;
}
function endgame(){
    userInput.value = '';
    userInput.setAttribute('disabled' , '');
    p.classList.add('button');
    p.innerHTML = `<h2 id = 'newgame'> start fresh </h2>`;
    startHower.appendChild(p);
    playgame = false;
    newgame();
}
function newgame(){
  const newGame = document.querySelector('#newgame');
  newGame.addEventListener('click' , function(e){
    randomNumber = (parseInt(Math.random()*100 + 1));
    prevguess = [];
    numguess = 1;
    guessSlot.innerHTML = '';
    remain.innerHTML = `${11-numguess}`;
    userInput.removeAttribute('disabled');
    startHower.removeChild(p);
    playgame = true;

  })
}


