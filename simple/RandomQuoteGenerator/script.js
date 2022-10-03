document.addEventListener('DOMContentLoaded', main);

function main(evt) {
    const btn = document.getElementById('generateBtn');
    const quote = document.getElementById('quote');
    const author = document.getElementById('author');
    const url = 'https://api.quotable.io/random';

    btn.addEventListener('click', (evt) => {
        fetch(url)
        .then((data) => data.json())
        .then((text) => {
            quote.textContent = text.content;
            author.textContent = text.author;
        })
    })
}

