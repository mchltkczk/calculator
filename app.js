const screenDisplay = document.querySelector('.screen__display');
const screenInput = [];
let screenOutput;

if (screenInput.length == 0) {
    screenDisplay.innerText = '0';
}
document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('click', () => {
        console.log('click');
        let buttonValue = button.dataset.btn;
        console.log(buttonValue);  
        if (buttonValue == 'ce') {
            screenInput.length = 0;
            screenDisplay.innerText = '0';
        }
        if (buttonValue == 0 ||
            buttonValue == 1 ||
            buttonValue == 2 ||
            buttonValue == 3 ||
            buttonValue == 4 ||
            buttonValue == 5 ||
            buttonValue == 6 ||
            buttonValue == 7 ||
            buttonValue == 8 ||
            buttonValue == 9 ||
            buttonValue == ',' ) // not working
            { 
        screenInput.push(button.dataset.btn);
        screenOutput = screenInput.join('');
        screenDisplay.innerText = parseInt(screenOutput);
        console.log(screenDisplay)
        return
        }
        
    
    })
})



// if (typeof button.dataset.btn == 'number') {
//     screenDisplay.innerText = `${screenDisplay} ${button}`;
// }
// function display() {
//     for (button in screen) {
//         if (typeof button == 'number') {
//             console.log(button)
//             screenDisplay.innerText = `${screenDisplay} ${button}`;

//         }
//     }
// }