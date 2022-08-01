const currentTimeEl = document.getElementById('currentTimeEl')

function getCurrentTime() {
    const date = new Date()
    const currentTime = date.toLocaleTimeString('en-US', {
        timeStyle: 'medium',
    })
    currentTimeEl.textContent = currentTime
}

setInterval(getCurrentTime, 1000)