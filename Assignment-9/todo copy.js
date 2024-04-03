const todoDiv = document.querySelector(".todoDiv");
const input = document.getElementById("input");
const tasksUL = document.querySelector(".todos");
const edit = "&#xF4CB;"
const done = "&#x2713;"
const del8 = "&#x2717;"

function renderTodos() {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasksUL.innerHTML = "";

    savedTasks.forEach((task) => {
        const taskLI = document.createElement("li");
        for (const key in task) {
            taskLI.appendChild(document.createElement("span").innerHTML = task[key]);
        }
        // const todoSpan = document.createElement("span");
        // const statusSpan = document.createElement("span");
        // const editSpan = document.createElement("span");
        // const del8Span = document.createElement("span");


        // todoSpan.innerText = task.todo;
        // statusSpan.innerText = task.done ? done : "";
        // editSpan.innerText = edit;
        // del8Span.innerText = del8;




        // taskLI.appendChild(todoSpan);
        // taskLI.appendChild(statusSpan);
        // taskLI.appendChild(editSpan);
        // taskLI.appendChild(del8Span);



        tasksUL.appendChild(taskLI);


        const buttons = document.createElement("div");
        buttons.classList.add("buttons");
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.addEventListener("click", () => editTodo(todo));
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => deleteTodo(todo));
        const completeButton = document.createElement("button");
        completeButton.innerText = todo.completed ? "Uncomplete" : "Complete";
        completeButton.addEventListener("click", () => completeTodo(todo));
        buttons.append(editButton, deleteButton, completeButton);
        li.append(buttons);
        todos.appendChild(li);
    });
}

function completeTodo(todo) {
    todo.completed = !todo.completed;
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    renderTodos();
}

function deleteTodo(todo) {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    const index = savedTodos.indexOf(todo);
    savedTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    renderTodos();
}

function editTodo(todo) {
    const inputValue = prompt("Enter new text:", todo.text);
    if (inputValue) {
        todo.text = inputValue;
        localStorage.setItem("todos", JSON.stringify(savedTodos));
        renderTodos();
    }
}

todoDiv.addEventListener("submit", (e) => {
    e.preventDefault();

    // get todo from input
    const todoText = input.value.trim();

    // save todo to localstorage
    let savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    savedTodos.push({
        text: todoText,
        completed: false
    });
    localStorage.setItem("todos", JSON.stringify(savedTodos));

    // render saved todos
    renderTodos();

    // clear input after submit
    input.value = "";
});

// render saved todos on load
renderTodos();

