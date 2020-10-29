const taskCreateForm = document.getElementById('create-task-form')
const newTaskInput = document.getElementById('new-task-description')
const taskList = document.getElementById('tasks')


const createNewTask = (event) => {
  event.preventDefault()
  
  const taskFormData = new FormData(event.target);
  const taskDescription = taskFormData.get('new-task-description')
  
  const newTask = document.createElement('li')
  newTask.innerText = taskDescription
  
  const removeButton = document.createElement('button')
  removeButton.innerText = "X"

  newTask.appendChild(removeButton)
  taskList.appendChild(newTask)
  event.target.reset()
}

taskCreateForm.addEventListener('submit', createNewTask)

taskList.addEventListener('click', (event) => {
  const task = document.querySelector('li')
  
  task.remove()
})
