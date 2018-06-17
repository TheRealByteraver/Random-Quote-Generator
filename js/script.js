document.getElementById('loadQuote').addEventListener("click", printQuote, false);

let myTimer = setInterval(printQuote, 30000);
let quotesToDisplay = [];

function getRandomQuote() {
  if (quotesToDisplay.length === 0) {
    quotesToDisplay = [...quotes];
  }
  const randomIndex = Math.floor(Math.random() * quotesToDisplay.length);
  const quote = quotesToDisplay[randomIndex];
  if (quotesToDisplay.length !== 0) {
    quotesToDisplay.splice(randomIndex, 1);
  }
  return quote;
}

function randonRGBNumber() {
  return Math.floor(Math.random() * 256);
}

function changeColorPage() {
  const page = document.querySelector('body');
  const button = document.getElementById('loadQuote');
  const rgbColor = `rgb(${randonRGBNumber()}, ${randonRGBNumber()}, ${randonRGBNumber()})`;
  page.style.backgroundColor = rgbColor;
  button.style.backgroundColor = rgbColor;
}

function printQuote() {
  clearInterval(myTimer);
  myTimer = setInterval(printQuote, 30000);
  changeColorPage();
  const quote = getRandomQuote();
  const quoteBox = document.getElementById('quote-box');
  let html = `
    <p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}<span class="citation">${quote.citation}</span><span class="year">${quote.year}</span></p>
  `;
  quoteBox.innerHTML = html;
}

printQuote();
