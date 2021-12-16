let tasks = ['Я хочу сделать список задач', 'Вторая заметка'];

const input = document.querySelector("input[type='text']");
const tasksList = document.querySelector('.tasks');
const addBtn = document.querySelector('.addTask');

const handleClickAdd = () => {
    if ( !input.value.trim()) {
        alert('Поле не должно быть пустым');
    } else {
        tasks = [...tasks, input.value];
        render();
        input.value = '';
    }
};

const handleClickRemove = (index) => {
    tasks.splice(index, 1);
    render();
};

const render = () => {
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
        tasksList.innerHTML += `
        <li>${task} <button onclick="handleClickRemove(${index})">x</button></li>
        `;
    });
    console.log(tasks);
};

addBtn.addEventListener('click', handleClickAdd);

render();
