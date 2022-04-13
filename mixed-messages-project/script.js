
//test format for quotes & other variables
const quotes = [
    {
    author: 'Winston Churchill',
    quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts."'      
    },
    {
    author: '“You define your own life. Don’t let other people write your script.”',
    quote:'Oprah Winfrey'
    },
    {
    author: '“Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.”',
    quote: 'Marie Curie'
    }
]

const tweet = document.querySelector('.twitter-share-button');


let currentAuthor = document.querySelector('.author-paragraph');
let currentQuote = document.querySelector('.quote-paragraph');
let button = document.getElementById('button');

//funstion to get random quote
const getRandomQuote = array => array[Math.floor(Math.random() * array.length)];


//button to display selected quote

button.addEventListener('click', () => {
    let oldAuthor = currentAuthor.innerText
    let oldQuote = currentQuote.innerText
    let selectedQuote = getRandomQuote(quotes)
    if (oldQuote === selectedQuote.quote) {
        selectedQuote = getRandomQuote(quotes)
        currentAuthor.innerText = selectedQuote.author
        currentQuote.innerText = selectedQuote.quote
    } else
    currentAuthor.innerText = selectedQuote.author
    currentQuote.innerText = selectedQuote.quote
    curauth = currentAuthor.innerHTML
    curquote = currentQuote.innerHTML
    tweet.href = `https://twitter.com/intent/tweet?text=${curauth}-${curquote}`
})

