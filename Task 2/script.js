function addTask() {
    const taskTitle = document.getElementById("taskTitle").value;
    const taskDeadline = document.getElementById("taskDeadline").value;
    const taskPriority = document.getElementById("taskPriority").value;
    const taskLabel = document.getElementById("taskLabel").value;

    if (taskTitle.trim() === "") {
        return;
    }

    const tasksList = document.getElementById("tasks");
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span><strong>Title:</strong> ${taskTitle}</span>
        <span><strong>Deadline:</strong> ${taskDeadline}</span>
        <span><strong>Priority:</strong> ${taskPriority}</span>
        <span><strong>Label:</strong> ${taskLabel}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;
    tasksList.appendChild(taskItem);

    clearTaskFields();
}

function removeTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
}

function clearTaskFields() {
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDeadline").value = "";
    document.getElementById("taskPriority").value = "high";
    document.getElementById("taskLabel").value = "";
}
