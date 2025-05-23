// Select DOM elements
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Add task on button click
addTaskBtn.addEventListener("click", addTask);

// Add task on Enter key
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Main function to add a task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  // Create task elements
  const listItem = document.createElement("li");
  listItem.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    toggleTaskCompletion(checkbox);
  });

  const textSpan = document.createElement("span");
  textSpan.className = "task-text";
  textSpan.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });

  // Append elements
  listItem.appendChild(checkbox);
  listItem.appendChild(textSpan);
  listItem.appendChild(deleteBtn);
  taskList.appendChild(listItem);

  // Clear input
  taskInput.value = "";
}

// Toggle completed state
function toggleTaskCompletion(checkbox) {
  const taskText = checkbox.nextElementSibling;
  const taskItem = checkbox.closest(".task-item");

  if (checkbox.checked) {
    taskText.classList.add("completed");
    taskItem.classList.add("completed"); // Turn green
  } else {
    taskText.classList.remove("completed");
    taskItem.classList.remove("completed"); // Turn red
  }
}
