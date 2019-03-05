let newTask = document.getElementById("newTask");
let taskBtn = document.getElementById("taskBtn");
let pendingTasksList = document.getElementById("pendingTasksList");
let completedTasksList = document.getElementById("completedTasksList");

//create the list item within our <ul> tag - with a delete button, checkbox, and the name of the task
let makeList = function(taskToAdd) {
  let newListItem = document.createElement("li");
  newListItem.id = "task";

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.id = "checkbox";
  newListItem.appendChild(checkBox);

  let task = document.createTextNode(taskToAdd);
  newListItem.appendChild(task);

  let removeBtn = document.createElement("button");
  removeBtn.id = "removeButton";

  let buttonText = document.createTextNode("Remove");
  removeBtn.appendChild(buttonText);
  newListItem.appendChild(removeBtn);

  //checkbox event listener to move task from pending to completed tasks and visa vi
  checkBox.addEventListener("change", function() {
    if (this.checked) {
      completedTasksList.appendChild(newListItem);
    } else {
      pendingTasksList.appendChild(newListItem);
    }
  });

  //deletes task list element
  removeBtn.addEventListener("click", function() {
    this.parentNode.remove();
  });

  return newListItem;
};

//creates the list item when the add task button is clicked
taskBtn.addEventListener("click", function() {
  let listItem = makeList(newTask.value);

  pendingTasksList.appendChild(listItem);
  newTask.value = "";
});
