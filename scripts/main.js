
const btnDate = document.getElementById("btnDate");
btnDate.onclick = function(){
  btnDate.innerHTML = Date()
  const numbers = [1,2,3,4,5,6,7,8,9]
  let soma = 0;
  let teste = numbers.forEach(function(value, index, array){soma+=value})
  const numbers10 = numbers.map(function(value, index, array){return value*10})

  let date1 = new Date("1984-06-12");
  let date2 = new Date("2023-07-02");
  let diff = date2.getTime() - date1.getTime();
  let days = diff/(1000*60*60*24)
  let years = days/365;


  const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
  let text = "";
  for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
  }
  console.log(text)

  const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  let text2 = "";
  for (const x of fruits.entries()) {
    text2 += x + "<br>";
  }

  const obj = /e/.exec("The best things in life are free!");
  console.log("Found " + obj[0] + " in position " + obj.index + " in the text: " + obj.input);

}

const myImage = document.getElementById("imgTest");
myImage.onclick = function(){
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.jpg") {
    myImage.setAttribute("src", "images/chrome.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox.jpg");
  }
};
myImage.onmouseover = function(){
  console.log(Date())
}


const myButton = document.getElementById("btnTest");
myButton.onclick = function(){
  const text = myButton.innerHTML;
  myButton.innerHTML = "Mudei de texto!";
};


const myOper = document.getElementById("btnOperation");
myOper.onclick = function(){
  let v1 = document.getElementById("v1").innerHTML
  let v2 = document.getElementById("v2").innerHTML
  const rec = new Rectangle(v1, v2)
  document.getElementById("res").innerHTML = rec.area
  console.log(typeof(rec))
  t1 = rec.teste
  t1("ahaaa")
}
class Rectangle {

  constructor(height, width) {
    this.height = parseInt(height);
    this.width = parseInt(width);
  }

  teste(valor){
    console.log(valor);
  }

  get area(){
    return this.calcArea();
  }

  calcArea(){
    return this.height * this.width;
  }

  getSides(){
    return [this.height, this.width, this.height, this.width];
  }
}
const square = new Rectangle(10, 10);
console.log(square.area); // 100
console.log(square.getSides()); // [10, 10, 10, 10]