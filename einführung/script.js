console.log("hello world");

alert("Das ist eine Warnung");

const divElement = document.getElementById("div-element");

console.log(divElement);

let text = "Das ist ein Text";
text = "das ist der neue Wert"

divElement.textContent = "Das ist der neue Wert"; //damit kann man z.b den inhalt im div element ändern und speichert den Textinhalt eines Knoten (und seiner Kinder) als String
divElement.classList.add("test-classe");