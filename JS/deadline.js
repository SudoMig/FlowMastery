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
