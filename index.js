const buttonE1 = document.querySelectorAll("button");
const inputFieldE1 = document.getElementById("result");

for (let i = 0; i < buttonE1.length; i++) {
    buttonE1[i].addEventListener("click", () => {
        const btnValue = buttonE1[i].textContent; // Get the text content of the button
        if (btnValue === "AC") {
            clearResult();
        } else if (btnValue === "+/-") {
            negativeResult();
        } else if (btnValue === "%") {
            resultPercentage();
        } else if (btnValue === "=") {
            calculateResult();
        } else {
            appendValue(btnValue);
        }
    });
}



function calculateResult(){
    inputFieldE1.value = eval(inputFieldE1.value);
}

function negativeResult(){
    inputFieldE1.value = inputFieldE1.value * -1
}

function resultPercentage(){
    inputFieldE1.value = (inputFieldE1.value / 100)
}

function clearResult() {
    inputFieldE1.value = "";
}

function appendValue(btnValue) {
    inputFieldE1.value += btnValue; // Concatenate the existing value with the new value
}
