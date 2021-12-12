let secondHand = document.querySelector('.second-hand');
let minuteHand = document.querySelector('.min-hand');
let hourHand = document.querySelector('.hour-hand');


function setDate(){
  const now = new Date();
  // seconds
  const seconds = now.getSeconds();
  let secondsDegree = ((seconds/60)*360) + 90;
  secondHand.style.transform = `rotate(${secondsDegree}deg)`;
}

 // minutes
function minutes(){
  const now = new Date();
  // min
  const min = now.getMinutes();
  let minutesDegree = ((min/60)*360)+90;
  minuteHand.style.transform = `rotate(${minutesDegree}deg)`;  
}

// hours
function hours(){
  const now = new Date();
  // min
  const hour = now.getHours();
  let hoursDegree = ((hour/12)*360)+90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;  
}

setInterval(hours, 1000);
setInterval(minutes, 1000);
setInterval(setDate, 1000);