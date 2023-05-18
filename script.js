const num1 = document.getElementById("ingreso1");
const num2 = document.getElementById("ingreso2");
const result = document.getElementById("resultado");
const ref = document.getElementById("refran");

const ejecutar = document.querySelector(".ejecutar");
ejecutar.addEventListener("click", () => {
  const valor1 = parseInt(num1.value);
  const valor2 = parseInt(num2.value);

  if (isNaN(valor1) || isNaN(valor2)) {
    ref.textContent = "Error: Ingrese solo números válidos.";
    result.textContent = "";
    return;
  } else if (valor1 === 0 || valor2 === 0) {
    ref.textContent = "0 ingresado. Número invalido.";
    result.textContent = " ";
    return;
  } else if (valor1 > 0 && valor2 > 0) {
    const suma = valor1 + valor2;
    ref.textContent = "Números positivos. Mostrando la suma: ";
    result.textContent = suma;
    return;
  } else if (valor1 < 0 || valor2 < 0) {
    const resta = valor1 - valor2;
    ref.textContent = "Número negativo. Mostrando la diferencia: ";
    result.textContent = resta;
    return;
  }
});
