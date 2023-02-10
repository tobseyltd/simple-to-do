

document.getElementById('submit').onclick = () => {

    if (document.querySelector('.task-input input').value.length === 0) {
        alert('Task needed');
    }

    else {
        document.getElementById('task-board').innerHTML +=
            `<div id="task" class="flex-inline">
                <input type="checkbox" id="checkbox">
                <p id="task_open">${document.querySelector('.task-input input').value}</p>       
                <img id="delete-button" src="./media/delete.png"/>
            </div>`

        document.querySelectorAll('#delete-button').forEach((deleteButton) => {
            deleteButton.onclick = () => {
                deleteButton.parentNode.remove();
            };
        });
    };

    const checkbox_nodeList = document.querySelectorAll('#checkbox');
    const task_nodeList = document.querySelectorAll('#task_open');

    for (j = 0; j < task_nodeList.length; j++) {

        for (let i = j; i < checkbox_nodeList.length; i++) {
            checkbox_nodeList[i].onclick = () => {

                if (checkbox_nodeList[i].checked) {
                    task_nodeList[i].style.textDecoration = 'line-through';
                }
                else {
                    task_nodeList[i].style.textDecoration = 'none';
                };
            };
        };
    };

    document.querySelector('.task-input input').value = '';

};


document.getElementById('reset').onclick = () => {
        document.querySelectorAll('#task').forEach((task) => {
            task.remove();
        });

    };