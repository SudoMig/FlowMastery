document.querySelector('#newtask input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask()
  }
})

document.querySelector('#push').onclick = addTask

function addTask() {
  if (document.querySelector('#newtask input').value.length == 0) {
    alert('Please Enter a Task')
  } else {
    document.querySelector('.tasks').innerHTML += `
          <div class="task">
              <span id="taskname">
                  ${document.querySelector('#newtask input').value}
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

    document.querySelector('#newtask input').value = '' // clears the input field after adding the task
  }
}
