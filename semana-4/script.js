const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Input deve conter pelo menos um caracter");
    taskInput.value = "";
    return;
  }

  if (taskList.children) {
    for (const listItem of taskList.children) {
      const currentItemText = listItem.firstElementChild.textContent;

      if (currentItemText === taskText) {
        alert("Tarefas não podem se repetir");
        taskInput.value = "";
        return;
      }
    }
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task">${taskText}</span>
    <button class="remove-button">X</button>
  `;

  li.querySelector(".remove-button").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
});
