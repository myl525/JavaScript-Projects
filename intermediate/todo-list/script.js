document.addEventListener('DOMContentLoaded', main);

function main(evt) {
    displayDate();
    window.onclick = function(evt) {
        if (evt.target === document.getElementById('addTaskModal')) {
            closeModal();
        }
    }
    //check a task
    const todoArea = document.getElementById('todoArea');
    const doneArea = document.getElementById('doneArea');

    // add a task
    const openModal = document.getElementById('addTask');
    openModal.addEventListener('click', (evt) => {
        const modal = document.getElementById('addTaskModal');
        if(modal.classList.contains('not-display')) {
            modal.classList.remove('not-display');
        }
    })

    const addBtn = document.getElementById('addTaskConfirmBtn');
    addBtn.addEventListener('click', (evt) => {
        const newTask = document.getElementById('newTask').value;
        if(newTask) {
            const newCard = document.createElement('div');
            const newCardRadio = document.createElement('button');
            const checkIcon = document.createElement('iconify-icon');
            checkIcon.setAttribute('icon', 'dashicons:yes-alt');
            const newCardTask = document.createElement('div');
            newCardTask.textContent = newTask;
            const deleteBtn = document.createElement('button');
            const deleteIcon = document.createElement('iconify-icon');
            deleteIcon.setAttribute('icon', 'codicon:trash');

            newCard.className = "card";
            newCardRadio.className = "radio";
            newCardTask.className = "task";
            deleteBtn.className = "delete";
            newCardRadio.appendChild(checkIcon);
            handleCheck(newCardRadio);
            deleteBtn.appendChild(deleteIcon);
            handleDelete(deleteBtn);
            newCard.append(newCardRadio, newCardTask, deleteBtn);
            todoArea.appendChild(newCard);
        }
        closeModal();
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

    function handleCheck(radio) {
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
    }

    function handleDelete(deleteBtn) {
        deleteBtn.addEventListener('click', (evt) => {
            deleteBtn.parentElement.remove();
        })
    }

    function closeModal() {
        const modal = document.getElementById('addTaskModal');
        const newTask = document.getElementById('newTask');

        if(!modal.classList.contains('not-display')) {
            newTask.value = "";
            modal.classList.add('not-display'); 
        }
    }
}


