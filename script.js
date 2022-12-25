let count = 0;

const countValue = document.getElementById("count");
const countAddBtn = document.getElementById("add");
const countSubtractBtn = document.getElementById("subtract");
const countResetBtn = document.getElementById("reset");

const audio = new Audio('audio/click_sound.mp3');

countValue.innerText = count;

countAddBtn.addEventListener("click", () => {
    count++;
    countValue.innerText = count;
    audio.play();
})

countSubtractBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countValue.innerText = count;
        audio.play();
    }
})

countResetBtn.addEventListener("click", () => {
    count = 0;
    countValue.innerText = count;
    audio.play();
})

