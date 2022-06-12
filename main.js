const boton = document.querySelector("#reload");
const textArea = document.querySelector("#textArea");
const range = document.querySelector("#range");
const labelRange = document.querySelector("#labelRange");
const checkbox = document.querySelector("#checkbox");

const caracteres = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const caracteresMasEspeciales = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "^",
  "*",
  "&",
  "@",
  "!",
  "#",
  "$",
  "%",
];

range.addEventListener("click", () => {
  console.log(range.value);
  labelRange.innerHTML = range.value;
});

let check = true;
checkbox.addEventListener("click", () => {
  if (check === true) {
    check = false;
  } else {
    check = true;
  }
});

function generarContraseña() {
  let contraseña = "";
  if (check === true) {
    for (let i = 0; i <= range.value; i++) {
      contraseña +=
        caracteresMasEspeciales[Math.floor(Math.random() * caracteresMasEspeciales.length)];
    }
  } else {
    for (let i = 0; i <= range.value; i++) {
      contraseña += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
  }
  textArea.innerHTML = contraseña;
}

window.onload = generarContraseña();
boton.addEventListener("click", () => {
  generarContraseña();
});

textArea.addEventListener("click", () => {
  navigator.clipboard.writeText(textArea.innerHTML);
});
