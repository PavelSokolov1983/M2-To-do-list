

function addTaskRow() {
    let taskBox = document.querySelector('.task-border');
    let taskRow = document.createElement('div');
    taskRow.classList.add('task');
    taskRow.innerHTML = `
        <div class="task-text"><input type="text" class="input-text"></div>
        <div class="task-remove"><img src="./images/delete.png" alt=""></div>
    `;
    taskBox.append(taskRow);
};

let button = document.querySelector('.add-button');
button.addEventListener('click', addTaskRow);
    
