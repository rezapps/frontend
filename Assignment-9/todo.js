const todoDiv = document.querySelector(".todoDiv");
const input = document.getElementById("input");
const tasksUL = document.querySelector(".tasksUL");
const edit = "&#xF4CB;"
const done = "&#x2713;"
const del8 = "&#x2717;"


const myList = [
    { id: 1, task: "wake up", done: "done" },
    { id: 2, task: "get ready", done: "no" }
];
const jsonString = JSON.stringify(myList);
localStorage.setItem("tasks", jsonString);

function renderTodos() {

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasksUL.innerHTML = "";

    savedTasks.forEach((task) => {
        const taskLI = document.createElement("li");
        const del8Span = document.createElement("span");
        del8Span.innerHTML = del8;
        for (const key in task) {
            const item = document.createElement("span");
            if (task[key] == "yes") {
                item.innerHTML = done;
            } else {
                item.innerHTML = task[key];
            }
            taskLI.append(item);
            taskLI.append(del8Span);
        }


        tasksUL.appendChild(taskLI);

    });

    console.log(savedTasks);
    todoDiv.appendChild(tasksUL);
}


renderTodos();