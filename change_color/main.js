const changeColorButton = document.getElementById("change_color_button");

const changeColor = () => {
  const square = document.getElementById("square");

  if (square.style.backgroundColor === "lightblue") {
      square.style.backgroundColor = "red";
} else if (square.style.backgroundColor === "gray") {
    square.style.backgroundColor = "lightblue";
}else{
    square.style.backgroundColor = "gray";
  }
};

changeColorButton.addEventListener("click", changeColor);
