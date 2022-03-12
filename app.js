const screenDisplay = document.querySelector(".screen__display");
const screenUnder = document.querySelector(".screen__under");
let screenInput = [];
let screenOutput = 0;
if (screenInput.length == 0) {
  screenDisplay.innerText = "";
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
      buttonValue >= 0 &&
      buttonValue <= 9 ||
      buttonValue == "."
    ) {
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

