let localAmount = document.getElementById("localAmount");
let dollarAmount = document.getElementById("dollarAmount");
const exchangeRate = 500;

function convertToUSD() {
  dollarAmount.value = localAmount.value / exchangeRate;
  console.log("🚀 ~ convertToUSD ~ localAmount:", localAmount);
}
function convertToLocal(e) {
    e.preventDefault()
  localAmount.value = dollarAmount.value * exchangeRate;
  console.log("🚀 ~ convertToUSD ~ localAmount:", localAmount);
}

localAmount.addEventListener("input", convertToUSD);
dollarAmount.addEventListener("input", convertToLocal)
