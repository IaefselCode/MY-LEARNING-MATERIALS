const socket = io('ws://localhost:3500')

const activity = document.querySelector('.activity')
const msgInput = document.querySelector('input')

function sendMessage(e){
    e.preventDefault()
    if(msgInput.value){
        socket.emit('message',msgInput.value) 
    } 
    msgInput.focus()
}

document.querySelector('form').addEventListener('submit', sendMessage)

//Listen for messages
socket.on("message", (data)=>{ 
    // activity.textContent = ''
    const li = document.createElement('li')
    li.textContent = data
    document.querySelector('ul').appendChild(li) 
})

//So here we are looking for the keypress event and then we are emitting activity
msgInput.addEventListener('keypress', ()=>{
    socket.emit('activity', socket.id.substring(0,5))
})

let activityTimer
//Listen for the activity event
socket.on("activity", (name) => {
    activity.textContent = `${name} is typing...`

    // clear after 3 seconds
    clearTimeout(activityTimer)
    activityTimer = setTimeout(() => {
        activity.textContent = ''
    }, 2000)
})