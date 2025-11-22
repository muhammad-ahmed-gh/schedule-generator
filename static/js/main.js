function setupMenuBtn() {
  let menuBtn = document.querySelector("header .bars");
  menuBtn.onclick = () => menuBtn.parentElement.classList.toggle("open");
}

function setTitles() {
  let taskNames = document.querySelectorAll(".task .task-name");
  for (let taskName of taskNames) taskName.title = taskName.textContent;

  let taskDescs = document.querySelectorAll(".task .task-desc");
  for (let taskDesc of taskDescs) taskDesc.title = taskDesc.textContent;
}

function showTaskProperties() {
  let taskPropBox = document.createElement("div");
  let overlay = document.createElement("div");

  taskPropBox.className = "task-prop-box";
  overlay.className = "overlay";

  taskPropBox.innerHTML = `
<span class="task-prop-box-title">task properties</span>
<button class="close-btn">
  <i class="fa-solid fa-xmark"></i>
</button>
<div class="task-prop-field">
  <label for="task-name-field" class="task-prop-label">Name</label>
  <input type="text" id="task-name-field" class="task-prop-input-field" />
</div>
<div class="task-prop-field">
  <label for="task-prior-field" class="task-prop-label">Priority</label>
  <select type="text" id="task-prior-field" class="task-prop-input-field">
    <option value="top">Top</option>
    <option value="high">High</option>
    <option value="medium">Medium</option>
    <option value="low">Low</option>
  </select>
</div>
<div class="task-prop-field">
  <label for="task-start-field" class="task-prop-label">Start</label>
  <input
    type="time"
    id="task-start-field"
    class="task-prop-input-field"
  />
</div>
<div class="task-prop-field">
  <label for="task-end-field" class="task-prop-label">End</label>
  <input type="time" id="task-end-field" class="task-prop-input-field" />
</div>
<div class="task-prop-field">
  <label for="task-desc-field" class="task-prop-label">Description</label>
  <textarea type="text" id="task-desc-field" class="task-prop-input-field">
  </textarea>
</div>
<div class="options">
  <button class="btn done-btn">Done</button>
  <button class="btn cancel-btn">Cancel</button>
</div>
  `;

  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("cancel-btn") ||
      e.target.parentElement.classList.contains("close-btn")
    ) {
      overlay.remove();
      taskPropBox.remove();
    } else if (e.target.classList.contains("done-btn")) {
      overlay.remove();
      taskPropBox.remove();
    }
  });

  document.body.appendChild(overlay);
  document.body.appendChild(taskPropBox);
}

function setupTaskClick() {
  let tasks = document.querySelectorAll(".task");
  for (let task of tasks) {
    task.onclick = showTaskProperties;
  }
}

setupMenuBtn();
setTitles();
setupTaskClick();