var taskInput = document.getElementById('taskInput');
var addTaskButton = document.getElementById('addTaskButton');
var taskList = document.getElementById('taskList');
// Add a new task
addTaskButton.addEventListener('click', function () {
    var taskText = taskInput.value.trim();
    if (!taskText)
        return;
    // Create a new list item
    var taskItem = document.createElement('li');
    var taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskItem.appendChild(taskSpan);
    // Complete button
    var completeButton = createButton('fas fa-check', function () {
        taskSpan.classList.toggle('completed');
    });
    // Edit button
    var editButton = createButton('fas fa-edit', function () {
        var inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = taskSpan.textContent || '';
        inputField.className = 'edit-input';
        inputField.addEventListener('blur', function () {
            taskSpan.textContent = inputField.value.trim() || taskSpan.textContent;
            taskItem.replaceChild(taskSpan, inputField);
        });
        taskItem.replaceChild(inputField, taskSpan);
        inputField.focus();
    });
    // Delete button
    var deleteButton = createButton('fas fa-trash', function () {
        taskList.removeChild(taskItem);
    });
    
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    buttonContainer.append(completeButton, editButton, deleteButton);
    taskItem.appendChild(buttonContainer);
    taskList.appendChild(taskItem);

    taskInput.value = '';
});


function createButton(iconClass, onClick) {
    var button = document.createElement('button');
    var icon = document.createElement('i');
    icon.className = iconClass;
    button.appendChild(icon);
    button.addEventListener('click', onClick);
    return button;
}
