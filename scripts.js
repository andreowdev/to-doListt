const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const fullList = document.querySelector(".list-tasks");

let myList = [];

function newTask() {
  const taskValue = input.value.trim();

  if(taskValue !== "") {
    myList.push({
      task: taskValue,
      completed: false,
    });

  showTask();
  input.value = '';
   } else {
    alert('Não é Permitido Por Algo Vazio Na Lista.')
   }

}

function showTask() {
  let newLi = "";

  myList.forEach((item, index) => {
    newLi =
      newLi +
      `

    <li class="task ${item.completed && "done"}">
        <img src="./img/checked.png" alt="check-na-tarefa" onclick="CompleteTask(${index})">
        <p>${item.task}</p>
        <img src="./img/trash.png" alt="tarefa-para-o-lixo" onclick="deleteItem(${index})")>
    </li>
    
    `;
  });

  fullList.innerHTML = newLi;

  localStorage.setItem('task', JSON.stringify(myList) )
}

function CompleteTask(index) {
  myList[index].completed = !myList[index].completed

  showTask();
}
function deleteItem(index) {
  myList.splice(index, 1);

  showTask();
}

function reloadItem(){
  const LocalStorageTask = localStorage.getItem('task')
 
  if (LocalStorageTask) {
    myList = JSON.parse(LocalStorageTask)
    console.log(LocalStorageTask)
  }

  showTask()
}

reloadItem()
button.addEventListener("click", newTask);
