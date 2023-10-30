// Drop down sidebar menu
const mobileScreen = window.matchMedia("(max-width: 990px )");
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelectorAll(".dashboard-nav-dropdown-toggle");
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

// drag and drop tasks
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

// changing theme color
const colors = ["aquamarine", "pink", "blueviolet", "blue", "green", "gray"];
let defaultColor = "";

colors.forEach((color) => {
  document.getElementById(color).addEventListener("click", changeColor);
});

function changeColor(e) {
  if (e.target.id === "pink") {
    document.body.style.setProperty("--primary-color", "#FD7AC0");
    document.body.style.setProperty("--main-color", "#ffcde8");
    document.body.style.setProperty("--second-color", "#fffafd");
    defaultColor = "pink";
  } else if (e.target.id === "blueviolet") {
    document.body.style.setProperty("--primary-color", "blueviolet");
    document.body.style.setProperty("--main-color", "#c78bff");
    document.body.style.setProperty("--second-color", "#f7efff");
    defaultColor = "blueviolet";
  } else if (e.target.id === "blue") {
    document.body.style.setProperty("--primary-color", "#0637d8");
    document.body.style.setProperty("--main-color", "#678bff");
    document.body.style.setProperty("--second-color", "#f5f7ff");
    defaultColor = "blue";
  } else if (e.target.id === "green") {
    document.body.style.setProperty("--primary-color", "#16a864");
    document.body.style.setProperty("--main-color", "#6be3ab");
    document.body.style.setProperty("--second-color", "#effff7");
    defaultColor = "green";
  } else if (e.target.id === "gray") {
    document.body.style.setProperty("--primary-color", "#b9b9b9");
    document.body.style.setProperty("--main-color", "#dbdbdb");
    document.body.style.setProperty("--second-color", "#eeeeee");
    defaultColor = "gray";
  } else if (e.target.id === "aquamarine") {
    document.body.style.setProperty("--primary-color", "#37BEB0");
    document.body.style.setProperty("--main-color", "#a4e5e0");
    document.body.style.setProperty("--second-color", "#f4fffd");
    defaultColor = "aquamarine";
  }
}

// changing view
const views = ["list", "board", "board2", "list2"];
views.forEach((view) => {
  document.getElementById(view).addEventListener("click", changeView);
});
function changeView(e) {
  if (e.target.id === "list" || e.target.id === "list2") {
    document.querySelector(".style-1").classList.add("view-style");
    document.querySelector(".style-2").classList.remove("view-style");
    document.querySelectorAll(".task").forEach((task) => {
      task.style.height = "3rem";
    });
  } else if (e.target.id === "board" || e.target.id === "board2") {
    document.querySelector(".style-1").classList.remove("view-style");
    document.querySelector(".style-2").classList.add("view-style");
    document.querySelectorAll(".task").forEach((task) => {
      task.style.height = "5rem";
    });
  }
}

document.querySelectorAll(".priority-btn li").forEach((item) => {
  item.addEventListener("click", addPriority);
});

function addPriority(e) {
  if (e.target.dataset.id === "urgent") {
    e.target.parentNode.previousElementSibling.querySelector("i").style.color = "#dc3545";
    // e.target.parentNode.previousElementSibling.querySelector("i").classList.add("text-danger");
  } else if (e.target.dataset.id === "high") {
    e.target.parentNode.previousElementSibling.querySelector("i").style.color = "#ffc107";
  } else if (e.target.dataset.id === "normal") {
    e.target.parentNode.previousElementSibling.querySelector("i").style.color = "#0d6efd";
  } else if (e.target.dataset.id === "low") {
    e.target.parentNode.previousElementSibling.querySelector("i").style.color = "#6c757d";
  }
}
