var initialPrice = document.querySelector(".initial-price");
var currentPrice = document.querySelector(".curr-price");
var stockCount = document.querySelector(".stocks-count");
var computeButton = document.querySelector(".compute-btn");
var output = document.querySelector(".output");

function calculateProfitLoss(i, c, n) {
  var investment = i * n;
  var current = c * n;
  var difference = current - investment;
  var percent = (difference / investment) * 100;
  if (difference > 0) {
    output.innerHTML = `Profit of Rs. ${difference}<br/>
    Profit percentage = ${percent}%`;
  } else {
    output.innerHTML = `Loss of Rs. ${-difference}<br/>
    Loss percentage = ${-percent}%`;
  }
}

function clickHandler() {
  console.log(initialPrice.value, currentPrice.value, stockCount.value);
  calculateProfitLoss(initialPrice.value, currentPrice.value, stockCount.value);
}

computeButton.addEventListener("click", clickHandler);
