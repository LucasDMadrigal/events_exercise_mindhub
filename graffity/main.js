const showButton = document.getElementById("show_button");
const showText = document.getElementById("show_text");
const inputValue = document.getElementById("texto");
let outputElement = document.getElementById("output");
const colorInput = document.getElementById("color");
const outputText = document.getElementById("output_text");
const closeSpan = document.getElementById("close_span");

function renderizarValor() {
  let inputValue = document.getElementById("texto").value;
  outputElement.classList.remove("hidden");
  outputText.innerText = inputValue;
}
showButton.addEventListener("click", renderizarValor);

colorInput.addEventListener("input", () => {
  outputElement.style.backgroundColor = colorInput.value;
});

closeSpan.addEventListener("click", () => {
  outputElement.classList.add("hidden");
});
