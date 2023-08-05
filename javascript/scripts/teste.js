let myVariable = "Bob";
myVariable = "Steve";
console.log(myVariable)

let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Sim, eu amo sorvete de chocolate!");
} else {
  alert("Aaaah, mas chocolate é o meu favorito…");
}

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

console.log(multiply(3, 4))

document.querySelector("html").addEventListener("click", function () {alert("Ai! Pare de me cutucar!");});