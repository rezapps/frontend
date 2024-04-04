const taskList = document.getElementById('todo-list');
const newTaskInput = document.getElementById('new-todo');
const addTaskButton = document.getElementById('add-btn');
const errP = document.querySelector('.errPlace');



const addTask = () => {
    const newTaskText = newTaskInput.value.trim();

    if (newTaskText) {
        const newTask = {
            id: Date.now(),
            text: newTaskText,
            completed: false
        }

        saveLocal(newTask);
        newTaskInput.value = '';
        newTaskInput.classList.remove('warn');
        renderTasks();
    } else {
        newTaskInput.classList.add('warn');
    }
}
addTaskButton.addEventListener('click', addTask);


const renderTasks = () => {
    const tasks = getTasks();

    taskList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = cr8TaskLi(task);

        taskList.appendChild(taskElement);
    });
}



const cr8TaskLi = (task) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('list-group-item');

    if (task.completed) {
        taskElement.classList.add('completed');
    }

    const taskText = document.createTextNode(task.text);

    const completeBtn = cr8Btn('✓', 'btn btn-success btn-sm float-end');
    completeBtn.addEventListener('click', () => markDone(task.id, !task.completed));

    const del8Btn = cr8Btn('X', 'btn btn-danger btn-sm float-end');
    del8Btn.addEventListener('click', () => del8(task.id));

    taskElement.appendChild(taskText);
    taskElement.appendChild(completeBtn);
    taskElement.appendChild(del8Btn);

    return taskElement;
}

const cr8Btn = (txt, cls) => {
    const btn = document.createElement('button');
    btn.innerHTML = txt;
    btn.classList.add(...cls.split(' '));

    return btn;
}

const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

const saveLocal = (task) => {
    const tasks = getTasks();

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const markDone = (id, completed) => {
    const tasks = getTasks();

    tasks.forEach(task => {
        if (task.id === id) {
            task.completed = completed;
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks();
}

const del8 = (id) => {
    const tasks = getTasks();

    tasks.splice(tasks.findIndex(task => task.id === id), 1);

    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks();
}

renderTasks();
