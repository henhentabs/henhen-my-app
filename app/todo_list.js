// JavaScript code for Todo List with delete button functionality

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value !== '') {
      var li = document.createElement("li");
      li.textContent = taskInput.value;
      
      var deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = function() {
        li.remove();
      };
  
      li.appendChild(deleteButton);
      taskList.appendChild(li);
      taskInput.value = '';
    }
  }
  