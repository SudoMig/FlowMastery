
function handleTools(btn) {
  const $calc = document.getElementById('calc')
  const $note = document.getElementById('notes')
  console.log(btn)

  if (btn === 'calc') {
    $calc.classList.remove('hidden')
    $note.classList.add('hidden')
  } else {
    $calc.classList.add('hidden')
    $note.classList.remove('hidden')
  }
}
