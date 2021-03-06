/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator in JavaScript
*************************************************/


/*** 
 * Created a variable to hold the quotes I would like to display = `quotes` array 
***/
const quotes =[
  {quote: "Venture outside your comfort zone. The rewards are worth it.", source: "Disney - Rapunzel", citation: "Disney - Tangled", year: "2010"},

  {quote: "A little consideration, a little thought for others, makes all the difference.", source: "Eeyore", citation: "Disney - Winnie the Pooh", year: "1926"},

  {quote: "The flower that blooms in adversity is the most rare and beautiful of all.", source: "The Emperor", citation: "Disney - Mulan", year: "1988"},

  {quote: "In every job that must be done, there is an element of fun.", source: "Mary Poppins", citation: "Disney - Marry Poppins", year: "1964"},

  {quote: "The only thing predictable about life is its unpredictability.", source: "Remy", citation: "Disney - Ratatouille", year: "2007"},

  {quote: "Love is putting someone else's needs before yours.", source: "Olaf", citation: "Disney - Frozen", year: "2013"},

  {quote: "All our dreams can come true, if we have the courage to pursue them.", source: "Walt Disney"},

  {quote: "I want adventure in the great wide somewhere. I want it more than I can tell. And for once it might be grand, to have someone understand, I want so much more than they have planned.", source: "Belle", citation: "Disney - Beauty and the Beast", year: "1991"}
]; 

//console.log(quotes)  //testing to see if quotes array displays
/***
 * This function holds the random quote that is generated from the array `getRandomQuote` function
***/
function getRandomQuote(){
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length )];
  return randomQuote;
  
};


//console.log(getRandomQuote()); //testing random quote is displayed




/***
 * The code below holds the `printQuote` function
***/

function printQuote(){
  const storeQuote = getRandomQuote();
  let quote = `<p class="quote">  ${storeQuote.quote}
  <p class="source"> ${storeQuote.source}`;

  if (storeQuote.citation) {
   quote += `<span class="citation">  ${storeQuote.citation} </span>`
  } 
  
   if (storeQuote.year){
    quote += `<span class="year">  ${storeQuote.year} </span>`
         }
    
   //To display quote string in the html
  document.getElementById('quote-box').innerHTML = quote;
 
};


//used arrow function to loop quote
setInterval(()=> {
  printQuote();
}, 5000);

  

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);