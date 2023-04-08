document.querySelector('#push_deadline').onclick = function () {
  if (document.querySelector('#new_deadline input').value.length == 0) {
    alert('Please Enter a Task')
  } else {
    document.querySelector('#deadline').innerHTML += `
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
  }
}
