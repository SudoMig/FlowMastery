let tasks = []

// If tasks are stored then show them
if (localStorage.getItem('todo_tasks')) {
  tasks = JSON.parse(localStorage.getItem('todo_tasks'))
  tasks.forEach((task, index) => {
    const taskId = `task-${index}`
    const newTask = createDiv(task, taskId)
    document.querySelector('.tasks').innerHTML += newTask
  })
}

// Event listener (add task)
document.querySelector('#newtask input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask()
  }
})

// Event listener (del task)
const deleteTaskBtn = document.getElementsByClassName('delete')
console.log(deleteTaskBtn)
for (let x = 0; x < deleteTaskBtn.length; x++) {
  deleteTaskBtn[x].addEventListener('click', function (e) {
    const task = e.target.closest('.task')
    delTask(task)
  })
}

function createDiv(taskName, taskId) {
  return `
    <div class="task" id=${taskId}>
      <span id="taskname">${taskName}</span>
      <button class="delete"><i class="fas fa-trash"></i></button>
    </div>
  `
}

function addTask() {
  const inputField = document.querySelector('#newtask input')
  const taskName = inputField.value.trim()

  if (taskName.length === 0) {
    alert('Please Enter a Task')
  } else {
    const newTask = createDiv(taskName)
    document.querySelector('.tasks').innerHTML += newTask

    // Add task to array + localStorage
    tasks.push(taskName)
    localStorage.setItem('todo_tasks', JSON.stringify(tasks))

    // Clears the input field after adding the task
    inputField.value = ''
  }
}

function delTask(task) {
  console.log(task.firstElementChild.innerHTML)
  const taskName = task.firstElementChild.innerHTML
  const index = tasks.indexOf(taskName)

  // Remove and save new localStorage
  tasks.splice(index, 1)
  localStorage.setItem('todo_tasks', JSON.stringify(tasks))
  task.remove()
}
