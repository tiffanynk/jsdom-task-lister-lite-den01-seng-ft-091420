const taskCreateForm = document.getElementById('create-task-form')
const newTaskInput = document.getElementById('new-task-description')
const taskList = document.getElementById('tasks')
const prioritySelector = document.getElementById('priority-level')
const priorityLevels = ['Low', 'Medium', 'High']

const priorityOptions = priorityLevels.forEach(level => {
  const option = document.createElement('option')
  option.textContent = level
  option.value = level
  option.id = level
  prioritySelector.append(option)
})

const createNewTask = (event) => {
  event.preventDefault()
  
  const taskFormData = new FormData(event.target);
  const taskDescription = taskFormData.get('new-task-description')
  const taskPriority = taskFormData.get('priority-level')
  
  const newTask = document.createElement('li')
  newTask.innerHTML = taskDescription
  newTask.id = taskPriority
  
  const removeButton = document.createElement('button')
  removeButton.innerText = "X"
  removeButton.addEventListener('click', removeTask)

  newTask.appendChild(removeButton)
  taskList.appendChild(newTask)
  event.target.reset()
}

taskCreateForm.addEventListener('submit', createNewTask)

const removeTask = (event) => {
  event.target.parentNode.remove()
}