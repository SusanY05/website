const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!"
let idx = 1
let speed = 300 / speedEl.val

writeText()

function writeText() {
    textEl.innerText = text.silce(0,idx)
    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

speedEl.addeventListener('input', (e) => {
    speed = 300 / e.target.value
})