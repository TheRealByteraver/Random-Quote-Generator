/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * The years are not correct but made up for this exercise, same goes for the citations
***/
const quotes = [
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde",
    year: 1905, 
    tag: ["humor", "inspirational"]
  },
  {
    quote: "If you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
    citation: "Rolling Stone interview",
    year: 1965,
    tag: ["relationships"]

  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    citation: "Stanford Uni speech",
    year: 1915, 
    tag: ["humor", "education"]
  },
  {
    quote: "So many books, so little time.",
    source: "Frank Zappa"
  },
  {
    quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    source: "Bernard M. Baruch"
  },
  {
    quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    source: "Dr. Seuss",
    year: 1935 
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
    year: 1937 
  }
];

// we don't want to display the same quote twice in a row:
let lastQuoteIndex = -1;

// Make the browser call the printQuote function automatically every 10 seconds:
setInterval(printQuote, 10000);

// This function returns a random number between 0 and max, excluding max:
function getRandom(max) {
  return Math.floor(Math.random() * max);
}

/***
 * `getRandomQuote` function
 * This function returns a random quote object from the quotes array
 * and makes sure the quote differs from the previously displayed quote
***/
function getRandomQuote() {
  
  let randomIndex;
  do {
    randomIndex = getRandom (quotes.length);
  } while (randomIndex === lastQuoteIndex);

  // keep track of the current quote:
  lastQuoteIndex = randomIndex;

  // return the choosen random quote:
  return quotes[randomIndex];
}

/***
 * `printQuote` function
***/
function printQuote() {

  // get a random quote object:
  let quote = getRandomQuote();

  // insert the object values into the html:
  let html = `<p class="quote">${quote.quote}</p>
              <p class="source">${quote.source}`;  
  if( quote.citation )
    html += `<span class="citation">${quote.citation}</span>`;
  if( quote.year )
    html += `<span class="year">${quote.year}</span>`;
    if( quote.tag )
    html += `<span class="year">tags: ${quote.tag.join(', ')}</span>`;
  html += "</p>";

  // update the DOM with the new html created above:
  document.getElementById("quote-box").innerHTML = html;

  // set the background to a new random color:
  let r = 80 + getRandom( 176 );
  let g = 80 + getRandom( 176 );
  let b = 80 + getRandom( 176 );
  document.querySelector("body").style.backgroundColor = `rgb( ${r}, ${g}, ${b} )`;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);