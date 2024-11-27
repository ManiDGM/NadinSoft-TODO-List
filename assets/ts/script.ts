const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addTaskButton = document.getElementById('addTaskButton') as HTMLButtonElement;
const taskList = document.getElementById('taskList') as HTMLUListElement;

// Add a new task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  // Create a new list item
  const taskItem = document.createElement('li');
  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  taskItem.appendChild(taskSpan);

  // Complete button
  const completeButton = createButton('fas fa-check', () => {
    taskSpan.classList.toggle('completed');
  });

  // Edit button
  const editButton = createButton('fas fa-edit', () => {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.value = taskSpan.textContent || '';
    inputField.className = 'edit-input';

    inputField.addEventListener('blur', () => {
      taskSpan.textContent = inputField.value.trim() || taskSpan.textContent;
      taskItem.replaceChild(taskSpan, inputField);
    });

    taskItem.replaceChild(inputField, taskSpan);
    inputField.focus();
  });

  // Delete button
  const deleteButton = createButton('fas fa-trash', () => {
    taskList.removeChild(taskItem);
  });


  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');
  buttonContainer.append(completeButton, editButton, deleteButton);

  taskItem.appendChild(buttonContainer);
  taskList.appendChild(taskItem);


  taskInput.value = '';
});


function createButton(iconClass: string, onClick: () => void): HTMLButtonElement {
  const button = document.createElement('button');
  const icon = document.createElement('i');
  icon.className = iconClass;
  button.appendChild(icon);
  button.addEventListener('click', onClick);
  return button;
}
