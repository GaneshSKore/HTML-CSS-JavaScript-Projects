document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTaskButton");
  const taskList = document.getElementById("taskList");

  // Function to add a new task
  function addTask(task) {
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }

    // Create task item
    const taskItem = document.createElement("li");
    taskItem.textContent = task;

    // Add action buttons
    const buttons = document.createElement("div");
    buttons.className = "task-buttons";

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.className = "complete";
    completeButton.addEventListener("click", () => {
      taskItem.classList.toggle("completed");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskList.removeChild(taskItem);
      if (!taskList.children.length) {
        displayNoTasksMessage();
      }
    });

    buttons.appendChild(completeButton);
    buttons.appendChild(deleteButton);
    taskItem.appendChild(buttons);

    // Remove "No tasks yet" message if present
    if (taskList.children[0]?.textContent === "No tasks yet. Start adding some!") {
      taskList.innerHTML = "";
    }

    taskList.appendChild(taskItem);
    taskInput.value = ""; // Clear input
  }

  // Display "No tasks yet" message
  function displayNoTasksMessage() {
    const noTasksMessage = document.createElement("li");
    noTasksMessage.textContent = "No tasks yet. Start adding some!";
    taskList.appendChild(noTasksMessage);
  }

  // Add task on button click
  addTaskButton.addEventListener("click", () => {
    addTask(taskInput.value);
  });

  // Add task on Enter key press
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask(taskInput.value);
    }
  });

  // Initialize with no tasks
  displayNoTasksMessage();
});
