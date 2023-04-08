const userInput = document.getElementById('userInput')
let expression = ''

function press(num) {
  expression += num
  userInput.value = expression
}

// eval built in func that calcs its' aurgument
function equal() {
  userInput.value = eval(expression)
  expression = ''
}

function erase() {
  expression = ''
  userInput.value = expression
}
