const downloadBtn = document.getElementById('download')
const notepad = document.getElementById('notepad')

downloadBtn.addEventListener('click', () => {
    const data = notepad.value
    const filename = 'notepad.txt';
    const type = 'text/plain';
    const file = new Blob([data], { type })

    // Create download link and click it
    const a = document.createElement('a')
    const url = URL.createObjectURL(file)
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    setTimeout(() => {
        document.body.removeChild(a)
        window.URL.revokeObjectURL(url)
    }, 0)
})
