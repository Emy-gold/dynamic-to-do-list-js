document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage on page load
    loadTasks();

    // Load and display tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' means don't save again
    }

    // Save tasks to localStorage
    function saveTasks(tasksArray) {
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }

    // Add a new task to the DOM and optionally save it
    function addTask(taskText, save = true) {
        if (!taskText || taskText.trim() === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");

        removeButton.onclick = function () {
            taskList.removeChild(li);

            // Update Local Storage
            const currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const updatedTasks = currentTasks.filter(task => task !== taskText);
            saveTasks(updatedTasks);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";

        // Save to Local Storage if needed
        if (save) {
            const currentTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            currentTasks.push(taskText);
            saveTasks(currentTasks);
        }
    }

    // Add button click
    addButton.addEventListener("click", function () {
        addTask(taskInput.value);
    });

    // Add task on Enter key
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask(taskInput.value);
        }
    });
});
