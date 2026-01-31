const textarea = document.querySelector('textarea')
const button = document.querySelector('button')
const output = document.getElementById('output')

button.addEventListener('click', () => {
  output.textContent = ''
  const consoleLog = []
  const originalConsoleLog = console.log

  console.log = function (...args) {
    consoleLog.push(args.join(' '))
    originalConsoleLog.apply(console, args)
  }

  try {
    eval(textarea.value)
  } catch (e) {
    consoleLog.push('Error: ' + e.message)
  }

  console.log = originalConsoleLog
  output.textContent = consoleLog.join('\n')
})
