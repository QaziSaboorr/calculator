const textbar = document.getElementById("textbar");
let inputArray = [];
let inputDisplay = [];
const light = document.getElementById("lights");
const bg = document.body;
let border1 = document.getElementsByClassName("boxes");
const text = document.getElementById("textbar");
light.addEventListener("click", () => {
  bg.classList.toggle("active");
  for (let i = 0; i < border1.length; i++) {
    border1[i].classList.toggle("borderrr");
  }
  text.classList.toggle("text2");
});

let valid = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "+",
  "-",
  "*",
  "/",
  "=",
  "(",
  ")",
  ".",
  "Enter",
];
let expression = ["+", "-", "*", "/"];
const point = document.getElementById("point");
const answer = document.getElementById("answer");
const clear = document.getElementById("clear");
const del = document.getElementById("del");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");
const left = document.getElementById("leftbracket");
const right = document.getElementById("rightbracket");

zero.addEventListener("click", () => {
  inputArray.push("0");
  inputDisplay.push("0");
  textbar.innerHTML = inputDisplay.join("");
});

one.addEventListener("click", () => {
  inputArray.push("1");
  inputDisplay.push("1");
  textbar.innerHTML = inputDisplay.join("");
});

two.addEventListener("click", () => {
  inputArray.push("2");
  inputDisplay.push("2");
  textbar.innerHTML = inputDisplay.join("");
});
three.addEventListener("click", () => {
  inputArray.push("3");
  inputDisplay.push("3");
  textbar.innerHTML = inputDisplay.join("");
});
four.addEventListener("click", () => {
  inputArray.push("4");
  inputDisplay.push("4");
  textbar.innerHTML = inputDisplay.join("");
});
five.addEventListener("click", () => {
  inputArray.push("5");
  inputDisplay.push("5");
  textbar.innerHTML = inputDisplay.join("");
});
six.addEventListener("click", () => {
  inputArray.push("6");
  inputDisplay.push("6");
  textbar.innerHTML = inputDisplay.join("");
});
seven.addEventListener("click", () => {
  inputArray.push("7");
  inputDisplay.push("7");
  textbar.innerHTML = inputDisplay.join("");
});

eight.addEventListener("click", () => {
  inputArray.push("8");
  inputDisplay.push("8");
  textbar.innerHTML = inputDisplay.join("");
});
nine.addEventListener("click", () => {
  inputArray.push("9");
  inputDisplay.push("9");
  textbar.innerHTML = inputDisplay.join("");
});
del.addEventListener("click", () => {
  inputArray.pop();
  inputDisplay.pop();
  textbar.innerHTML = `<b>${inputDisplay.join("")}</b>`;
});

multiply.addEventListener("click", () => {
  inputArray.push(" ");
  inputArray.push("*");
  inputArray.push(" ");

  inputDisplay.push(" ");
  inputDisplay.push("&#215");
  inputDisplay.push(" ");

  textbar.innerHTML = inputDisplay.join("");
});

divide.addEventListener("click", () => {
  inputArray.push(" ");
  inputArray.push("/");
  inputArray.push(" ");

  inputDisplay.push(" ");
  inputDisplay.push("&divide;");
  inputDisplay.push(" ");

  textbar.innerHTML = inputDisplay.join("");
});

minus.addEventListener("click", () => {
  inputArray.push(" ");
  inputArray.push("-");
  inputArray.push(" ");
  inputDisplay.push(" ");
  inputDisplay.push("-");
  inputDisplay.push(" ");
  textbar.innerHTML = inputDisplay.join("");
});
plus.addEventListener("click", () => {
  inputArray.push(" ");
  inputArray.push("+");
  inputArray.push(" ");
  inputDisplay.push(" ");
  inputDisplay.push("+");
  inputDisplay.push(" ");
  textbar.innerHTML = inputDisplay.join("");
});
clear.addEventListener("click", () => {
  inputArray = [];
  inputDisplay = [];
  textbar.innerHTML = inputDisplay.join("");
});

answer.addEventListener("click", evaluate);

function evaluate() {
  try {
    inputDisplay.push(" ");
    inputDisplay.push("=");
    inputDisplay.push(" ");
    let answer = eval(inputArray.join(""));

    if (answer == "Infinity" || answer == "NaN") {
      inputDisplay.push("Undefined");
      textbar.innerHTML = inputDisplay.join("");
      inputArray = [];
      inputDisplay = [];
    } else {
      inputDisplay.push(eval(inputArray.join("")));
      textbar.innerHTML = inputDisplay.join("");
      inputArray = [];
      inputDisplay = [];
      inputArray.push(answer);
      inputDisplay.push(answer);
    }
  } catch (error) {
    alert("Invalid expression");
    textbar.innerHTML = "";
    inputArray = [];
    inputDisplay = [];
  }
}

point.addEventListener("click", () => {
  inputArray.push(".");
  inputDisplay.push(".");
  textbar.innerHTML = inputDisplay.join("");
});

leftbracket.addEventListener("click", () => {
  inputArray.push("(");
  inputDisplay.push("(");
  textbar.innerHTML = inputDisplay.join("");
});

rightbracket.addEventListener("click", () => {
  inputArray.push(")");
  inputDisplay.push(")");
  textbar.innerHTML = inputDisplay.join("");
});

// var targetElement = document.getElementById("myElement");

// Add event listener for 'keydown' event
addEventListener("keydown", function (event) {
  // Handle the 'keydown' event here
  console.log(event.key);
  if (event.key === "Backspace") {
    inputArray.pop();
    inputDisplay.pop();
    textbar.innerHTML = `<b>${inputDisplay.join("")}</b>`;
  }
  if (valid.includes(event.key)) {
    if (event.key === "=" || event.key === "Enter") {
      evaluate();
    } else if (expression.includes(event.key)) {
      if (event.key === "*") {
        inputDisplay.push(" ");
        inputDisplay.push("&#215");
        inputDisplay.push(" ");
        inputArray.push(" ");
        inputArray.push(event.key);
        inputArray.push(" ");

        textbar.innerHTML = inputDisplay.join("");
      } else if (event.key === "/") {
        inputDisplay.push(" ");
        inputDisplay.push("&divide;");
        inputDisplay.push(" ");
        inputArray.push(" ");
        inputArray.push(event.key);
        inputArray.push(" ");

        textbar.innerHTML = inputDisplay.join("");
      } else {
        inputDisplay.push(" ");
        inputDisplay.push(event.key);
        inputDisplay.push(" ");
        inputArray.push(" ");
        inputArray.push(event.key);
        inputArray.push(" ");
        textbar.innerHTML = inputDisplay.join("");
      }
    } else {
      inputDisplay.push(event.key);
      inputArray.push(event.key);

      textbar.innerHTML = inputDisplay.join("");
    }
  }
});
