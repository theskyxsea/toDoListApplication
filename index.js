const textEl = document.getElementById("text-el");
const saveEl = document.getElementById("save-el");
const clearEl = document.getElementById("clear-el");
const ulEl = document.getElementById("ul-el");
const showEl = document.getElementById("show-el");
let toDoTemp;
let toDoList = [];
let donelist = [];
let checkVal = 0;
// autoDisplay();

saveEl.addEventListener("click", function () {
  toDoTemp = textEl.value;
  toDoList.push(toDoTemp);
  saveForever();
  getForever();
  renderList(toDoList);
  // donefunc();
});

// function validation() {
//   if (toDoTemp.length <= 0) return false;
// }

clearEl.addEventListener("click", function () {
  ulEl.innerHTML = "";
});
clearEl.addEventListener("dblclick", function () {
  toDoList = [];
  saveForever();
  ulEl.innerHTML = "";
  disableBtn();
});
showEl.addEventListener("dblclick", function () {
  getForever();
  renderList(toDoList);
});

// function autoDisplay() {
//   console.log("1");
//   if (checkVal == 0) {
//     console.log("2");
//     getForever();
//     renderList();
//   }
// }

function renderList(list) {
  if (list.length > 0) {
    let textToHtml = ``;
    for (let i = 0; i < list.length; i++) {
      if (list[i].length <= 0) {
      } else {
        textToHtml += `<li>${list[i]}</li>`;
      }
    }
    ulEl.innerHTML = textToHtml;
    textEl.value = "";
    // donefunc();
    disableBtn();
  } else {
    ulEl.innerHTML = "";
  }
}

function disableBtn() {
  let length = toDoList.length;
  if (length > 0) {
    showEl.hidden = false;
  } else {
    showEl.hidden = true;
  }
}

function saveForever() {
  const stringify = localStorage.setItem("myList", JSON.stringify(toDoList));
}
function getForever() {
  toDoList = JSON.parse(localStorage.getItem("myList"));
}

function taskDone(i) {
  doneList.push(toDoList[i]);
  addToDone(i);
}

function donefunc() {
  for (let i = 0; i < doneList.length; i++) {
    for (let j = 0; j < toDoForever.length; j++) {
      if (doneList[i] === j) {
        addToDone(j);
      }
    }
  }
}

function addToDone(i) {
  let taskEl = document.getElementById(`${i}`);
  // taskEl.style.setProperty("text-decoration", "line-through");
  taskEl.classList.add("listDone");
}
