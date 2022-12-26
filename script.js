let count = 0;

const countValue = document.getElementById("count");
const countAddBtn = document.getElementById("add");
const countSubtractBtn = document.getElementById("subtract");
const countResetBtn = document.getElementById("reset");

const counterFill = document.getElementById("fill");
const counterBorder = document.getElementById("border");

const audio = new Audio('audio/click_sound.mp3');

countValue.innerText = count;

// added to the valur of count/ incrementing the counter
countAddBtn.addEventListener("click", () => {
    count++;
    countValue.innerText = count;
    audio.play();
    if (count == 999999) {
        count = 0;
    }
})


// subtracting from the value of count/ decrementing the counter
countSubtractBtn.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countValue.innerText = count;
        audio.play();
    }
})

// resetting the counter
countResetBtn.addEventListener("click", () => {
    count = 0;
    countValue.innerText = count;
    audio.play();
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

 // changing the color of the back and the reset button
 function changeOtherButtons(otherBtnColor) {
    countSubtractBtn.style.backgroundColor = otherBtnColor;
    countResetBtn.style.backgroundColor = otherBtnColor;
 }

 // changing the color of the displaly
 function changeDisplay(displayColor) {
    display.style.backgroundColor = displayColor;
 }

 // changing the color of counter fill
function changeFill(fillColor) {
    counterFill.style.fill = fillColor;
}

function changeBorder(borderColor) {
    counterBorder.style.fill = borderColor;
}