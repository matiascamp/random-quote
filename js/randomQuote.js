import getAndInsertQuote from "./getAndInsertQuote.js"

export default function getRandomQuote () {
    const randomButton = document.querySelector('.random')
    
    randomButton.addEventListener('click',() => {
        getAndInsertQuote()
    })
}