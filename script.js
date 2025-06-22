document.addEventListener("DOMContentLoaded", function () {
    // Select DOM Elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Define the addTask function
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            // Create a new li element
            const li = document.createElement("li");
            li.textContent = taskText;

            // Create a remove button
            const removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.className = "remove-btn";

            // On click, remove the li
            removeButton.onclick = function () {
                taskList.removeChild(li);
            };

            // Append the remove button and add li to the list
            li.appendChild(removeButton);
            taskList.appendChild(li);

            // Clear input field
            taskInput.value = "";
        } else {
            alert("Please enter a task.");
        }
    }

    // Attach Event Listeners
    addButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Optional: Preload example task
    // addTask("Welcome Task"); // You can use this if needed
});
