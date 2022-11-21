const boton = document.querySelector("#reload");
const textArea = document.querySelector("#textArea");
const range = document.querySelector("#range");
const labelRange = document.querySelector("#labelRange");
const checkbox = document.querySelector("#checkbox");

let check = true;

const caracteres =
  "ABCDEFGHIJKLMNOQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const caracteresMasEspeciales =
  "ABCDEFGHIJKLMNOQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789^*&@!#$%";

const generarContraseña = () => {
  let contraseña = "";
  if (check === true) {
    for (let i = 0; i <= range.value; i++) {
      contraseña +=
        caracteresMasEspeciales[
          Math.floor(Math.random() * caracteresMasEspeciales.length)
        ];
    }
  } else {
    for (let i = 0; i <= range.value; i++) {
      contraseña += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
  }
  textArea.innerHTML = contraseña;
};

document.addEventListener("DOMContentLoaded", () => {
  generarContraseña();

  boton.addEventListener("click", () => {
    generarContraseña();
  });

  textArea.addEventListener("click", () => {
    navigator.clipboard.writeText(textArea.innerHTML);
    alert("Successfully copied password");
  });

  checkbox.addEventListener("change", () => {
    check = !check;
  });

  range.addEventListener("input", () => {
    labelRange.innerHTML = range.value;
  });
});
