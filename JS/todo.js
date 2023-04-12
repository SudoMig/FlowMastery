let counter = 0

if (localStorage.getItem('counter')) {
  counter = Number(localStorage.getItem('counter'))

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === 'counter') {
      continue
    }
    const localStorageValue = localStorage.getItem(localStorage.key(i))
    document.querySelector('.tasks').innerHTML += localStorageValue
  }

  console.log(counter)
} else {
  counter = 0
}

document.querySelector('#newtask input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask()
  }
})

document.querySelector('#push').onclick = addTask

function addTask() {
  const inputField = document.querySelector('#newtask input')
  const taskName = inputField.value.trim()

  if (taskName.length === 0) {
    alert('Please Enter a Task')
  } else {
    document.querySelector('.tasks').innerHTML += `
      <div class="task">
        <span id="taskname">${taskName}</span>
        <button class="delete"><i class="fas fa-trash"></i></button>
      </div>
    `

    const todoText = `
      <div class="task">
        <span id="taskname">${taskName}</span>
        <button class="delete"><i class="fas fa-trash"></i></button>
      </div>
    `
    counter++
    localStorage.setItem(`task${counter}`, todoText)
    localStorage.setItem('counter', JSON.stringify(counter))

    const current_tasks = document.querySelectorAll('.delete')
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove()
        const taskKey = `task${i + 1}`
        console.log(taskKey)
        localStorage.removeItem(taskKey)
        counter--
        localStorage.setItem('counter', JSON.stringify(counter))
      };
    }

    inputField.value = '' // clears the input field after adding the task
  }
}
