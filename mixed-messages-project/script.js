
//test format for quotes & other variables
const quotes = [
    {
    author: 'author 1',
    quote: 'quote 1'      
    },
    {
    author: 'author 2',
    quote:'quote 2'
    },
    {
    author: 'author 3',
    quote: 'quote 3'
    }
]
let currentAuthor = document.querySelector('.author-paragraph')
let currentQuote = document.querySelector('.quote-paragraph')
let button = document.getElementById('button')

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
})

