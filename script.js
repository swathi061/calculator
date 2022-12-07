const buttons = document.getElementsByClassName("num");
const op = document.getElementsByClassName("op");
const screen = document.getElementById("screen");
const active = document.getElementById("active");
const enter = document.getElementById("enter");
const clear = document.getElementById("clr");
const del = document.getElementById("del");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
let operator = "+";
let c = 0, a = 0, b = 0;
clear.addEventListener("click", clearScreen);
del.addEventListener("click", deleteNum);
add.addEventListener("click", function () {
    displayScreen("+");
});
sub.addEventListener("click", function () {
    displayScreen("-");
});
mul.addEventListener("click", function () {
    displayScreen("*");
});
div.addEventListener("click", function () {
    displayScreen("/");
});

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        screen.innerHTML += buttons[i].textContent;
    });
}
function displayScreen(op) {
    if (active.textContent === "") {
        operator = op;
        active.innerHTML = screen.textContent + operator;
        a = Number(screen.textContent);
        screen.textContent = "";
    } else {
        calculate();
        a = c;
        operator = op;
        active.innerHTML = a + operator;
        screen.textContent = "";
    }
}
function clearScreen() {
    screen.innerHTML = "";
    active.innerHTML = "";
}

function deleteNum() {
    screen.textContent = screen.textContent.slice(0, -1);
}

function calculate() {
    let num = screen.innerHTML;
    b = Number(num);
    if (operator === "+") {
        c = a + b;
    } else if (operator === "-") {
        c = a - b;
    } else if (operator === "*") {
        c = a * b;
    } else if (operator === "/") {
        c = a / b;
    }
}
enter.addEventListener("click", function () {
    calculate();
    screen.innerHTML = c;
    active.innerHTML = "";
    a = c;
});


