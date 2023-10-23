const mobileScreen = window.matchMedia("(max-width: 990px )");
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelectorAll(
    ".dashboard-nav-dropdown-toggle"
  );
  const menuToggle = document.querySelector(".menu-toggle");
  const dashboardNav = document.querySelector(".dashboard-nav");
  const dashboard = document.querySelector(".dashboard");
  const mobileScreen = window.matchMedia("(max-width: 767px)");

  dropdownToggle.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const dropdown = this.closest(".dashboard-nav-dropdown");
      dropdown.classList.toggle("show");
      const siblings = dropdown.parentNode.children;
      Array.from(siblings).forEach(function (sibling) {
        if (sibling !== dropdown) {
          sibling.classList.remove("show");
        }
      });
    });
  });

  menuToggle.addEventListener("click", function () {
    if (mobileScreen.matches) {
      dashboardNav.classList.toggle("mobile-show");
    } else {
      dashboard.classList.toggle("dashboard-compact");
    }
  });
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// drag and drop
let addForm = document.querySelector(".add-task-form");
let taskText = document.querySelector("#taskText");
let addButton = document.querySelector(".add-button");
let toDo = document.querySelector("#to-do");

addForm.onsubmit = function (event) {
  event.preventDefault();

  let newTask = document.createElement("li");
  newTask.classList.add("task");
  newTask.textContent = taskText.value;
  newTask.draggable = true;
  newTask.ondragstart = function () {
    currentDrag = newTask;
  };
  toDo.append(newTask);
  taskText.value = "";
};

let tasks = document.querySelectorAll(".task");
let taskLists = document.querySelectorAll(".task-list");
let currentDrag = "";

for (let task of tasks) {
  task.draggable = true;
  task.ondragstart = function () {
    currentDrag = task;
  };
}

for (let taskList of taskLists) {
  taskList.ondragover = function (event) {
    event.preventDefault();
  };

  taskList.ondrop = function () {
    taskList.append(currentDrag);
  };
}
