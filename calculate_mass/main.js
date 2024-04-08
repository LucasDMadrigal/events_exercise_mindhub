function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var resultContainer = document.getElementById("result");

  if (weight && height) {
    var bmi = weight / (height * height);
    resultContainer.innerHTML = "Your BMI is: " + bmi.toFixed(2);
  } else {
    resultContainer.innerHTML = "Please enter both weight and height.";
  }
}
