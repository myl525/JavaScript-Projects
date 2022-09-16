document.addEventListener('DOMContentLoaded', main);

function main(evt) {
    const number = document.getElementById('number');
    const decrease = document.getElementById('decrease');
    const reset = document.getElementById('reset');
    const increase = document.getElementById('increase');

    decrease.addEventListener('click', (evt) => {
        let curr = parseInt(number.textContent);
        if(curr > 0) {
           number.textContent = curr - 1; 
        }
        
    })

    reset.addEventListener('click', (evt) => {
        number.textContent = 0;
    })

    increase.addEventListener('click', (evt) => {
        number.textContent = parseInt(number.textContent) + 1;
    })
}