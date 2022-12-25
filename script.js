let count = 0;

const countValue = document.getElementById("count");
const countAddBtn = document.getElementById("add");
const countSubtractBtn = document.getElementById("subtract");
const countResetBtn = document.getElementById("reset");

const display = document.getElementById("display");

const audio = new Audio('audio/click_sound.mp3');

countValue.innerText = count;

countAddBtn.addEventListener("click", () => {
    count++;
    countValue.innerText = count;
    audio.play();
    if (count == 999999) {
        count = 0;
    }
})

countSubtractBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countValue.innerText = count;
        audio.play();
        console.log("Hello from the subtract button")
    }
})

countResetBtn.addEventListener("click", () => {
    count = 0;
    countValue.innerText = count;
    audio.play();
    console.log("Hello from the reset button")
})

// changing the color of the background
function changeBackgroundColor(backgroundColor) {
    // changing the color of the background
    document.body.style.background = backgroundColor;

    //moving the position of the pointer
    document.querySelectorAll('span').forEach(function(item){
        item.classList.remove('active');
    })
    event.target.classList.add('active');
 }

 // changing the color of the add button
 function changeAddButton(addBtnColor) {
    countAddBtn.style.backgroundColor = addBtnColor;
 }

 function changeOtherButtons(otherBtnColor) {
    countSubtractBtn.style.backgroundColor = otherBtnColor;
    countResetBtn.style.backgroundColor = otherBtnColor;
 }

 function changeDisplay(displayColor) {
    display.style.backgroundColor = displayColor;
 }
