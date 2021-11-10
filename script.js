const startBtn = document.getElementById("btn");
const records = document.getElementById("records");
const loginBtn = document.getElementById("login");
const userId = document.getElementById("userid");


function timeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMins = (diffInHrs-hh)*60;
  let mm = Math.floor(diffInMins);

  let diffInSec = (diffInMins - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss)*60;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2,"0");
  let formattedSS = ss.toString().padStart(2,"0");
  let formattedMS = ms.toString().padStart(2,"0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

let startTime;
let endTime;
let timeElapsed;

function startTimer() {
  startTime = Date.now();
  startBtn.style.display = "none";
}

function stopTimer() {
  endTime = Date.now();
  startBtn.style.display = "block";
  timeElapsed = endTime - startTime;
  let newRecord = document.createElement("li");
  newRecord.innerHTML=userId.value + " " + timeToString(timeElapsed);
  records.appendChild(newRecord);
}

startBtn.addEventListener('click',startTimer);
loginBtn.addEventListener('click',stopTimer);