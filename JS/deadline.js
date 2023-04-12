
document.querySelector('#new_deadline input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addDeadline()
  }
})

document.querySelector('#push_deadline').onclick = addDeadline

function addDeadline() {
  if (document.querySelector('#new_deadline input').value.length == 0) {
    alert('Please Enter a Deadline')
  } else {
    document.querySelector('.deadline_tasks').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector('#new_deadline input').value}
              </span>
              <button class="delete">
              <i class="fas fa-trash"></i>
              </button>
          </div>
      `



    const current_tasks = document.querySelectorAll('.delete')
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove()
      }
    }

    document.querySelector('#new_deadline input').value = '' // clears the input field after adding the task
  }
}

// Add later





//let counter = 0
//if (localStorage.getItem('counter')) {
//  counter = Number(localStorage.getItem('counter'))

//  for (let i = 0; i < localStorage.length; i++) {
//    if (localStorage.key(i) === 'counter') {
//      continue
//    }
//    const localStorageValue = localStorage.getItem(localStorage.key(i))
//    document.querySelector('.deadline_tasks').innerHTML += localStorageValue
//  }
//} else {
//  counter = 0
//}













//const todoText = `<div class="task">
//<span id="taskname">
//${document.querySelector('#newtask input').value}
//</span>
//<button class="delete">
//<i class="fas fa-trash"></i>
//</button>
//</div>`
//counter++
//localStorage.setItem(`task${counter}`, todoText)
//localStorage.setItem('counter', JSON.stringify(counter))

//const current_tasks = document.querySelectorAll('.delete')
//for (let i = 0; i < current_tasks.length; i++) {
//  current_tasks[i].onclick = function () {
//    this.parentNode.remove()
//    const taskKey = `task${i + 1}`
//    console.log(taskKey)
//    localStorage.removeItem(taskKey)
//    localStorage.setItem('counter', JSON.stringify(counter))
//  }
//}