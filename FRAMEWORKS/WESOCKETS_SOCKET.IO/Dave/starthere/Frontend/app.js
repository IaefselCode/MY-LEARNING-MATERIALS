// // TUTORIAL 1
// //Send message to the server
// const socket = new WebSocket('ws://localhost:3000')

// function sendMessage(e){
//     e.preventDefault()
//     const input = document.querySelector('input')
//     if(input.value){
//         socket.send(input.value)
//         input.value = ''
//     } 
//     input.focus()
// }

// document.querySelector('form').addEventListener('submit', sendMessage)




// // Listen for messages from the server
// socket.addEventListener("message", ({data})=>{
//      const li = document.createElement('li')
//      li.textContent = data
//      document.querySelector('ul').appendChild(li) 
// })


// TUTORIAL 2
//Like provious we dont have to import io because we are just using that script that we dont need to import module
const socket = io('ws://localhost:3500') //So here we are sending to port 3500

function sendMessage(e){
    e.preventDefault()
    const input = document.querySelector('input')
    if(input.value){
        socket.emit('message',input.value) //Also here we are gonne use socket.emit and specify
        input.value = ''
    } 
    input.focus()
}

document.querySelector('form').addEventListener('submit', sendMessage) //Here we will not change anything


// Listen for messages from the server
//Also here we are going to change how we listen to messages
socket.on("message", (data)=>{ //Here we are going to have socket.on and then the message event and also the data we dont need to destructure it
    const li = document.createElement('li')
    li.textContent = data
    document.querySelector('ul').appendChild(li) 
})
