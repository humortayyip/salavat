const totalDisplay = document.getElementById("totalCount");
const inputField = document.getElementById("inputCount");
const inputBtn = document.getElementById("addInputBtn");
const oneBtn = document.getElementById("addOneBtn");

let totalCount = 0;

function formatNumber(number) {
  if (number >= 1_000_000) {
    return (number / 1_000_000).toFixed(1).replace(".0", "") + "M";
  }
  return new Intl.NumberFormat("tr-TR").format(number);
}

function animateCounterChange(newNumber) {
  totalDisplay.classList.add("animate");
  setTimeout(() => {
    totalDisplay.textContent = formatNumber(newNumber);
    totalDisplay.classList.remove("animate");
  }, 200);
}

function addToCount(amount) {
  if (amount > 0) {
    totalCount += amount;
    animateCounterChange(totalCount);
  }
}

inputBtn.addEventListener("click", () => {
  const value = parseInt(inputField.value);
  if (!isNaN(value)) {
    addToCount(value);
    inputField.value = "";
  }
});

oneBtn.addEventListener("click", () => {
  addToCount(1);
});
