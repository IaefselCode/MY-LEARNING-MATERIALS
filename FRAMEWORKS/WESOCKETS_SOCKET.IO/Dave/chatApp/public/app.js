const socket = io("ws://localhost:3500");

const msgInput = document.querySelector("#message");
const nameInput = document.querySelector("#name");
const chatRoom = document.querySelector("#room");

const activity = document.querySelector(".activity");
const usersList = document.querySelector(".user-list");
const roomList = document.querySelector(".room-list");
const chatDisplay = document.querySelector(".chat-display");

const msgForm = document.querySelector(".form-message");
const joinForm = document.querySelector(".form-join");

function sendMessage(e) {
  e.preventDefault();
  if (nameInput.value && msgInput.value && chatRoom.value) {
    socket.emit("message", {
      name: nameInput.value,  //Now we will send an object with name and text
      text: msgInput.value,
    });
    msgInput.value = "";
  }
  msgInput.focus();
}


function  enterRoom(e){
    e.preventDefault()
    if (nameInput.value && chatRoom.value) {
        socket.emit("enterRoom", {
            name: nameInput.value,
            room: chatRoom.value,
          });
    }
}

msgForm.addEventListener("submit", sendMessage);
joinForm.addEventListener("submit", enterRoom);

msgInput.addEventListener("keypress", () => {
    socket.emit("activity", nameInput.value); //Here is the other activity and we are sending the name
}); //Because we want to send the name of which user is emitting  any activity at that time
  

//Listen for messages
socket.on("message", (data) => {
    activity.textContent = ""
    const { name, text, time } = data
    const li = document.createElement('li')
    li.className = 'post'
    if (name === nameInput.value) li.className = 'post post--left'
    if (name !== nameInput.value && name !== 'Admin') li.className = 'post post--right'
    if (name !== 'Admin') {
        li.innerHTML = `<div class="post__header ${name === nameInput.value
            ? 'post__header--user'
            : 'post__header--reply'
            }">
        <span class="post__header--name">${name}</span> 
        <span class="post__header--time">${time}</span> 
        </div>
        <div class="post__text">${text}</div>`
    } else {
        li.innerHTML = `<div class="post__text">${text}</div>`
    }
    document.querySelector('.chat-display').appendChild(li)

    chatDisplay.scrollTop = chatDisplay.scrollHeight
});



let activityTimer;
//Listen for the activity event
socket.on("activity", (name) => {
  activity.textContent = `${name} is typing...`;

  // clear after 3 seconds
  clearTimeout(activityTimer);
  activityTimer = setTimeout(() => {
    activity.textContent = "";
  }, 2000);
});

socket.on('userList', ({ users }) => {
    showUsers(users)
})


socket.on('roomList', ({ rooms }) => {
    showRooms(rooms)
})


 //NOW RECEIVING THE ROOMS LIST AND THE USERS LIST
function showUsers(users) {
    usersList.textContent = ''
    if (users) {
        usersList.innerHTML = `<em>Users in ${chatRoom.value}:</em>`
        users.forEach((user, i) => {
            usersList.textContent += ` ${user.name}`
            if (users.length > 1 && i !== users.length - 1) {
                usersList.textContent += ","
            }
        })
    }
}

function showRooms(rooms) {
    roomList.textContent = ''
    if (rooms) {
        roomList.innerHTML = '<em>Active Rooms:</em>'
        rooms.forEach((room, i) => {
            roomList.textContent += ` ${room}`
            if (rooms.length > 1 && i !== rooms.length - 1) {
                roomList.textContent += ","
            }
        })
    }
}