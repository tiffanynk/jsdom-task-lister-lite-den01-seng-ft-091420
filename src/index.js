const taskCreateForm = document.getElementById('create-task-form')
const newTaskInput = document.getElementById('new-task-description')
const taskList = document.getElementById('tasks')

let newTasksList = []

const prioritySelector = document.getElementById('priority-level')
const priorityLevelsObject = {
  low: {text: 'Low', value: 1},
  medium: {text: 'Medium', value: 2},
  high: {text: 'High', value: 3}
}

const priorityLevelsArray = Object.values(priorityLevelsObject)

const priorityOptions = priorityLevelsArray.forEach(level => {
  const option = document.createElement('option')
  option.textContent = level.text
  option.value = level.value
  option.id = level.text
  
  prioritySelector.append(option)
})

const createNewTask = (event) => {
  event.preventDefault()
  
  const taskFormData = new FormData(event.target);
  const taskDescription = taskFormData.get('new-task-description')
  const taskPriority = taskFormData.get('priority-level')
  console.log(taskPriority)
  const newTask = document.createElement('li')
  newTask.innerHTML = taskDescription
  newTask.classList.add(priorityLevelsArray.find(priority => priority.value == taskPriority).text)
  // newTask.id = priorityLevelsArray.find(priority => priority.value == taskPriority).text
  newTasksList.push({task: taskDescription, priority: +taskPriority})
  
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

const sortButton = document.querySelector('#sort-task')

const sortTasks = (event) => {
  taskList.innerHTML = ' '
  let sortedArray = newTasksList.sort((a, b) => b.priority - a.priority)
  sortedArray.forEach(taskObject => {
    const sortedTaskItem = document.createElement('li')
    let sortedTask = taskObject.task
    sortedTaskItem.classList.add(priorityLevelsArray.find(priority => priority.value == taskObject.priority).text)
    sortedTaskItem.innerHTML = sortedTask
    taskList.appendChild(sortedTaskItem)
  })
}

sortButton.addEventListener('click', sortTasks)
