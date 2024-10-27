
document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task');
    const clearCompletedBtn = document.getElementById('clear-completed');
    let tasks = [];

    // Function to render tasks based on filter
    function renderTasks(filter = 'all') {
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => 
            filter === 'all' || 
            (filter === 'active' && !task.completed) || 
            (filter === 'completed' && task.completed)
        );
        filteredTasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskItem.innerHTML = `
                <input type="checkbox" class="mr-2" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
                <span class="task-text">${task.text}</span>
                <button class="btn btn-sm btn-danger ml-auto" onclick="deleteTask(${index})">Delete</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    // thêm nhiệm vụ
    addTaskBtn.addEventListener('click', () => {
        const text = newTaskInput.value.trim();
        if (text) {
            tasks.push({ text, completed: false });
            newTaskInput.value = '';
            renderTasks();
        }
    });

    // chuyển đổi hoàn thành nhiệm vụ
    window.toggleTask = (index) => {
        tasks[index].completed = !tasks[index].completed;
        renderTasks();
    };

    // xoá nhiệm vụ
    window.deleteTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
    };

    // xoá hết nhiệm vụ
    clearCompletedBtn.addEventListener('click', () => {
        tasks = tasks.filter(task => !task.completed);
        renderTasks();
    });

    //  lọc nhiệm vụ
    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.nav-link.active').classList.remove('active');
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter');
            renderTasks(filter);
        });
    });

    renderTasks(); // Initial render
});
