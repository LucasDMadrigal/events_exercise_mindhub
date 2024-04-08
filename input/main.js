const textInput = document.getElementById("textInput");
const square = document.getElementById("square");
const clearButton = document.getElementById("clear_button");

textInput.addEventListener("input", function () {
  square.innerText = textInput.value;
});

clearButton.addEventListener("click", () => {
    square.innerText = ""
    textInput.value = ""
})