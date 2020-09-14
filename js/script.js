/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [];


//For loop that adds 5 empty objects to the quotes array
for (let i = 0; i < 5; i++) {
  quotes.push({});
}

quotes[0].quote = "So do all who live to see such times but that is not for them to decide. All we have to decide is what to do with the time that is given to us";
quotes[0].source = "Gandalf";
quotes[0].citation = "Lord Of the Rings"

quotes[1].quote = "It's not who I am underneath but what I do that defines me"
quotes[1].source = "Batman";

quotes[2].quote = "I can't carry it for you, But I can carry you";
quotes[2].source = "Samwise Gamgee";
quotes[2].citation = "Lord of the Rings"

quotes[3].quote = "Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that";
quotes[3].source = "Dr. Martin Luther King Jr";
quotes[3].year = "March 31, 1968";
quotes[3].tags = "Civil rights"

quotes[4].quote = "Saruman believes it is only great power that can hold evil in check, but that is not what I have found. It is the small everyday deeds of ordinary folk that keep the darkness at bay. Small acts of kindness and love.";
quotes[4].source = "Gandalf";
quotes[4].citation = "Lord of the Rings";


console.log(quotes);



/***
 * `getRandomQuote` function
***/


//Function that gets a random number between 0 and 5 and then grabs that value from the quotes array
function getRandomQuote() {
  let rand = Math.floor(Math.random() * quotes.length);
  return quotes[rand];
}





/***
 * `printQuote` function
***/

// Function that calls the getRandomQuote function then generates HTML based on what attributes the quote object contains

function printQuote() {
  let quote = getRandomQuote();
  let quoteHTML = `<p class="quote">${quote.quote}</p>
  <p class="source">${quote.source}`;

  if (quote.hasOwnProperty('citation')) {
      quoteHTML += 
         `<span class="citation">${quote.citation}</span>
          </p>`;
  } else if (quote.hasOwnProperty('year')) {
    quoteHTML += 
    `<span class="year">${quote.year}</span>`;
        if (quote.hasOwnProperty('tags')) {
          quoteHTML += `<span class="tags"> <br>Tags: ${quote.tags}</span></p>`;
        } else {
          quoteHTML += "</p>";
        }
  } else {
    quoteHTML += "</p>";
  }

  function randomColor() {
    let colors = ["blue", "pink", "red", "orange", "yellow"];
    function pickRandomColor() {
      let random = Math.floor(Math.random() * colors.length);
      return colors[random];
    }
    document.querySelector('body').style.backgroundColor = pickRandomColor();
  }

  randomColor();
  return document.getElementById('quote-box').innerHTML = quoteHTML;
}






/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
setInterval(printQuote, 10000);