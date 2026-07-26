window.addEventListener("load", () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const input_heading = document.querySelector("#new-task-input-heading");
    const list_el = document.querySelector("#tasks");


    //Page should not Reflesh after the form is Submitted
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;
        const task_heading = input_heading.value;
        if (!task || !task_heading) {
            alert("Please Fill out the task");
            return false;
        }

        //Creating div task & content
        const task_el_heading = document.createElement("div");
        task_el_heading.classList.add("task_heading");

        const task_content_el_heading = document.createElement("div");
        task_content_el_heading.classList.add("content_heading");



        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);
        task_el_heading.appendChild(task_content_el_heading);


        //Creating output
        const task_input_el_heading = document.createElement("input");
        task_input_el_heading.classList.add("text_heading");
        task_input_el_heading.value = task_heading;
        task_input_el_heading.setAttribute("readonly", "readonly");

        const task_input_el = document.createElement("textarea");
        task_input_el.classList.add("text");
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");


        task_content_el_heading.appendChild(task_input_el_heading);
        task_content_el.appendChild(task_input_el);

        //Creating Div Actions
        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");
        //Creating Buttons
        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);


        list_el.appendChild(task_el);
        list_el.appendChild(task_el_heading);
        list_el.prepend(task_el);
        list_el.prepend(task_el_heading);
        input.value = "";
        input_heading.value = "";

        //Edit Button function
        task_edit_el.addEventListener('click', () => {
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_input_el_heading.removeAttribute("readonly");
                task_input_el_heading.focus();

                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
                task_edit_el.innerText = "Save";
            } else {

                /*
                if(!task_input_el || !task_input_el_heading){
                    alert("Please fill Out the Field !!!");
                    return false;
                }else{
                    task_input_el.setAttribute("readonly", "readonly");
                    task_input_el_heading.setAttribute("readonly", "readonly");
                    task_edit_el.innerText = "Edit";
                }*/

                task_input_el.setAttribute("readonly", "readonly");
                task_input_el_heading.setAttribute("readonly", "readonly");
                task_edit_el.innerText = "Edit";
            }
        });

        //Delete Button function
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el_heading);
            list_el.removeChild(task_el);
        });
    });
});