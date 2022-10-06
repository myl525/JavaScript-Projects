document.addEventListener('DOMContentLoaded', main);

function main(evt) {
    displayDate();
    
    //check a task
    const todoArea = document.getElementById('todoArea');
    const doneArea = document.getElementById('doneArea');

    const cards = document.querySelectorAll('.card');
    const radios = document.querySelectorAll('.radio');
    
    radios.forEach((radio) => {
        radio.addEventListener('click', (evt) => {
            const task = radio.nextElementSibling;
            if(radio.style.color) {
                radio.style.color = "";
                task.style.textDecoration = "";
                task.style.color = "";
                todoArea.appendChild(radio.parentElement);
            }else {
                radio.style.color = "black";
                task.style.textDecoration = "line-through";
                task.style.color = "grey";
                doneArea.appendChild(radio.parentElement);
            }
        })
    })






    function displayDate() {
        const date = document.getElementById('date');
        const today = new Date();
        
        date.textContent = parseDate(today);
    }

    function parseDate(date) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June' ,'July' ,'August', 'September', 'October', 'November', 'December'];
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        
        const month = months[date.getMonth()];
        const weekday = weekdays[date.getDay()];

        const parsedDate = `${weekday}, ${month} ${date.getDate()}`;
        
        return parsedDate;
    }

}


