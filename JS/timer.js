const start = document.getElementById('pause')
const stop = document.getElementById('resume')
const reset = document.getElementById('reset')

const wm = document.getElementById('w_minutes')
const ws = document.getElementById('w_seconds')

// store a reference to a timer variable
let startTimer

const timer25 = document.getElementById('timer25')
const timer5 = document.getElementById('timer5')
const timer60 = document.getElementById('timer60')

timer25.addEventListener('click', function () {
  wm.innerText = 25
  ws.innerText = '00'
  stopInterval()
  startTimer = undefined
})

timer5.addEventListener('click', function () {
  wm.innerText = 5
  ws.innerText = '00'

  stopInterval()
  startTimer = undefined
})

timer60.addEventListener('click', function () {
  wm.innerText = 60
  ws.innerText = '00'
  stopInterval()
  startTimer = undefined
})

start.addEventListener('click', function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000)
  } else {
    alert('Timer is already running')
  }
})

reset.addEventListener('click', function () {
  wm.innerText = 25
  ws.innerText = '00'
  document.getElementById('counter').innerText = 0
  stopInterval()
  startTimer = undefined
})

document.customForm.addEventListener('submit', function (e) {
  e.preventDefault()
  wm.innerText = this.minutes.value
  ws.innerText = '00'
  stopInterval()
  startTimer = undefined
  this.reset()
})

stop.addEventListener('click', function () {
  stopInterval()
  startTimer = undefined
})

// Start Timer Function
function timer() {
  // Work Timer Countdown
  if (ws.innerText != 0) {
    ws.innerText--
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59
    wm.innerText--
  }

  // Increment Counter by one if one full cycle is completed
  if (wm.innerText == 0 && ws.innerText == 0) {
    wm.innerText = 25
    ws.innerText = '00'
    document.getElementById('counter').innerText++
  }
}

// Stop Timer Function
function stopInterval() {
  clearInterval(startTimer)
}
