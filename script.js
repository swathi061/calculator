const buttons = document.getElementsByClassName("num");
const screen = document.getElementById("display");
const enter = document.getElementById("enter");
const clear = document.getElementById("clr");
const del = document.getElementById("del");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
let operator = "+";
let c = 0;
clear.addEventListener("click", clearScreen);
del.addEventListener("click", deleteNum);
add.addEventListener("click", function () {
    operator = "+";
});
sub.addEventListener("click", function () {
    operator = "-";
});
mul.addEventListener("click", function () {
    operator = "*";
});
div.addEventListener("click", function () {
    operator = "/";
});
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        screen.innerHTML += buttons[i].textContent;
    });
}

function clearScreen() {
    screen.innerHTML = "";
}

function deleteNum() {
    screen.textContent = screen.textContent.slice(0, -1);
    console.log(operator);
}

enter.addEventListener("click", function () {
    let num = screen.innerHTML;
    num = num.split(/[+\-*/.]/);
    a = Number(num[0]);
    b = Number(num[1]);
    if (operator === "+") {
        c = a + b;
    }else if (operator === "-") {
        c = a - b;
    }else if (operator === "*") {
        c = a * b;
    }else if (operator === "/") {
        c = a / b;
    }
    screen.innerHTML = c;
});


