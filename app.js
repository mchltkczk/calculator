const screenDisplay = document.querySelector(".screen__display");
const screenUnder = document.querySelector(".screen__under");
let screenInput = [];
let screenOutput = 0;
if (screenInput.length == 0) {
  screenDisplay.innerText = "0";
}
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    console.log("click");
    let buttonValue = button.dataset.btn;
    console.log(buttonValue);
    if (buttonValue == "ce") {
      screenInput.length = 0;
      screenDisplay.innerText = "0";
    }
    if (
      buttonValue == 0 ||
      buttonValue == 1 ||
      buttonValue == 2 ||
      buttonValue == 3 ||
      buttonValue == 4 ||
      buttonValue == 5 ||
      buttonValue == 6 ||
      buttonValue == 7 ||
      buttonValue == 8 ||
      buttonValue == 9 ||
      buttonValue == "."
    ) {
      // not working
      screenUnder.innerText = "";
      screenInput.push(buttonValue);
      screenOutput = screenInput.join("");
      screenDisplay.innerText = screenOutput;
      return;
    }
    if (
      buttonValue == "+" ||
      buttonValue == "-" ||
      buttonValue == "/" ||
      buttonValue == "*"
    ) {
      screenUnder.innerText = buttonValue;
      screenInput.push(buttonValue);
      screenOutput = screenInput.join(buttonValue);
      return;
    }
    if (buttonValue == "=") {
        screenDisplay.innerText = (eval(screenDisplay.innerText));
        screenInput = [screenDisplay.innerText];
    }
  });
});

