document.addEventListener('DOMContentLoaded', main);

function main(evt) {
    const tip = document.getElementById('tip');
    const total = document.getElementById('total');
    const calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', (evt) => {
        const bill = document.getElementById('bill').value;
        const tipPercent = document.getElementById('tipPercent').value;
        const numberOfPeople = document.getElementById('numberOfPeople').value;
    
        if(bill && tipPercent && numberOfPeople) {
            tip.textContent = '$' + (bill * tipPercent * 0.01 / numberOfPeople).toFixed(2);
            total.textContent = '$' + (bill * (1 + tipPercent * 0.01) / numberOfPeople).toFixed(2);
        }
    })
}