// Get references to HTML elements
const valueInput = document.getElementById("value-input");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Add a new task to the list
function addTask() {
    const taskText = valueInput.value;
    if (taskText.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        valueInput.value = "";
    }
}

// Event listeners
addTaskButton.addEventListener("click", addTask);
valueInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});


