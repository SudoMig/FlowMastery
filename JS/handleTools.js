
function handleTools(btn) {
  const $calc = document.getElementById('calc')
  const $note = document.getElementById('notes')
  const $feedback = document.getElementById('feedback')
  console.log(btn)

  if (btn === 'calc') {
    $calc.classList.remove('hidden')
    $note.classList.add('hidden')
    $feedback.classList.add('hidden')
  } else if (btn === 'notes') {
    $calc.classList.add('hidden')
    $note.classList.remove('hidden')
    $feedback.classList.add('hidden')
  } else if (btn === 'feedback') {
    $calc.classList.add('hidden')
    $note.classList.add('hidden')
    $feedback.classList.remove('hidden')
  }
}
