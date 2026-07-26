const input_box = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function Addtask() {
    if (input_box.value === "") {
        alert("You Must Write Something !");
        return false;
    }
    else {
        let li = document.createElement("li");


        let textarea = document.createElement("textarea");
        textarea.innerHTML = input_box.value;
        textarea.setAttribute("readonly", "readonly");

        listContainer.appendChild(li);
        listContainer.prepend(li);

        li.appendChild(textarea);


        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    input_box.value = "";
    saveData();
}

listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
    
}, false);


//Saving to Local Storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();