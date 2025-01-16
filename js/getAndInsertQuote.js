
export  const quote = document.querySelector('.quote')

export default function getAndInsertQuote () {

    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/3-javascript/challenges/group_1/data/random-quotes.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
    
        const randomQuote = data[randomIndex]
    
        const author = document.querySelector('.author')
        const tags = document.querySelector('.tags')
    
        author.innerHTML = randomQuote.author
    
        quote.innerHTML = `"${randomQuote.quote}"`
    
        randomQuote.tags.forEach(element => {
          const span = document.createElement('span')
          span.classList.add('author-tags');
          span.innerHTML = " " + element + " "
          tags.appendChild(span)
        });
    
    
    
      })
      .catch((error) => {
        console.error("Error to fetch data",error)
      });
  }