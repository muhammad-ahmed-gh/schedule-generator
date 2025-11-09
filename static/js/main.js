let menuBtn = document.querySelector("header .bars");
menuBtn.onclick = () => menuBtn.parentElement.classList.toggle("open");

let taskNames = document.querySelectorAll(".task .task-name");
for(let taskName of taskNames) {
  taskName.title = taskName.textContent;
}

let taskDescs = document.querySelectorAll(".task .task-desc");
for(let taskDesc of taskDescs) {
  taskDesc.title = taskDesc.textContent;
}