const h2 = document.getElementById("h2")
const countdownEl = document.querySelector("#countdown");

setInterval(updateCountdown, 1000);
let person = prompt("Please enter number", "");


let startingMinutes = person;
let time = startingMinutes * 60;

function updateCountdown() {
    if(!isNaN(person)){
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? "0" + seconds : seconds;
    
        countdownEl.innerHTML = `${minutes}:${seconds}`;
        time--;
    }else {
        h2.textContent = "Please enter number"
    }
    
}
