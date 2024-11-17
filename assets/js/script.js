const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');


addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; 

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

   
    const deleteButton = document.createElement('button');
    const trashIcon = document.createElement('i');           //creating trash icon 
    trashIcon.className = 'fas fa-trash';
    deleteButton.appendChild(trashIcon);
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(deleteButton);

    taskItem.addEventListener('click', function () {    //TODO: fix this part
        taskItem.classList.toggle('completed');         // TODO: add edit btn & mark as complete
    });

    taskList.appendChild(taskItem);
    taskInput.value = ''; 
});
