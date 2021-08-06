/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://uboraacademy.slack.com

/*** 
 * `quotes` array 
***/
var quotes =[
  {quote: "Venture outside your comfort zone. The rewards are worth it.", source: "Disney - Rapunzel", citation: "Disney - Tangled", year: "2010"},

  {quote: "A little consideration, a little thought for others, makes all the difference.", source: "Eeyore", citation: "Disney - Winnie the Pooh", year: "1926"},

  {quote: "The flower that blooms in adversity is the most rare and beautiful of all.", source: "The Emperor", citation: "Disney - Mulan", year: "1988"},

  {quote: "In every job that must be done, there is an element of fun.", source: "Mary Poppins", citation: "Disney - Marry Poppins", year: "1964"},

  {quote: "The only thing predictable about life is its unpredictability.", source: "Remy", citation: "Disney - Ratatouille", year: "2007"},

  {quote: "Love is putting someone else's needs before yours.", source: "Olaf", citation: "Disney - Frozen", year: "2013"},

  {quote: "All our dreams can come true, if we have the courage to pursue them.", source: "Walt Disney"},

  {quote: "I want adventure in the great wide somewhere. I want it more than I can tell. And for once it might be grand, to have someone understand, I want so much more than they have planned.", source: "Belle", citation: "Disney - Beauty and the Beast", year: "1991"}
]; 

//console.log(quotes)
/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length )];
  return randomQuote;
  
};


//console.log(getRandomQuote());

return getRandomQuote;


/***
 * `printQuote` function
***/

function printQuote(){
  var storeQuote = getRandomQuote;
  var htmlString = '<p class="quote">' +  quotes.quote + '</p>',
                    '<p class="source">' + quotes.source + '' 
                    
  if (quotes.citation = true) {
   let htmlString = '<p class="quote">' A random quote </p>
    <p class="source"> quote source 
    <span class="citation"> quote citation </span>
  }else if (quotes.year = true) {
   let htmlString = '<p class="quote">' A random quote </p>
    <p class="source"> quote source 
    <span class="citation"> quote citation </span>
    <span class="year"> quote year </span>
  } else{
    let htmlString = '<p class="quote">' +  quotes.quote + '</p>',
    '<p class="source">' + quotes.source + '</p>' 
  };

  
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);