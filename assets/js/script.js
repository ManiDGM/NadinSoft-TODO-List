const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// add a new task 
addTaskButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; 

    // create a new list item 
    const taskItem = document.createElement('li');
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    
    taskItem.appendChild(taskSpan);

    // create'Complete' btn
    const completeButton = document.createElement('button');
    const checkIcon = document.createElement('i');
    checkIcon.className = 'fas fa-check';
    completeButton.appendChild(checkIcon);

    completeButton.addEventListener('click', function () {
        taskSpan.classList.toggle('completed');
    });

    // create'Edit' btn
    const editButton = document.createElement('button');
    const editIcon = document.createElement('i');
    editIcon.className = 'fas fa-edit';
    editButton.appendChild(editIcon);

    editButton.addEventListener('click', function () {
        const newTaskText = prompt('Edit your task:', taskSpan.textContent);
        if (newTaskText !== null && newTaskText.trim() !== '') {
            taskSpan.textContent = newTaskText.trim();
        }
    });

    // create 'Delete' btn
    const deleteButton = document.createElement('button');
    const trashIcon = document.createElement('i');
    trashIcon.className = 'fas fa-trash';
    deleteButton.appendChild(trashIcon);

    deleteButton.addEventListener('click', function () {
        taskList.removeChild(taskItem);
    });

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    
    // add the button container to the task item
    taskItem.appendChild(buttonContainer);

    // add the task item to the task list
    taskList.appendChild(taskItem);

    // clear the input field
    taskInput.value = '';
});
