const FORM = document.getElementById("form");
const INPUT = document.getElementById("input");
let LIST = JSON.parse(localStorage.getItem("DAG-list")) || [];

// Add event listeners
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  if (INPUT.value.length < 56) {
    INPUT.value ? create(INPUT.value) : alert("Please write something!");
  } else {
    alert("Please write something shorter! (Max. 55 characters)");
  }
});

// Main CRUD functions----------------
// Function to create and store items
const create = (input) => {
  INPUT.value = "";
  const item = {
    text: input,
    id: Math.floor(Math.random() * 100000),
    color: randomLight(),
  };
  LIST.push(item);
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  const box = document.getElementById("display");
  display();
};

// Function to display items on container
const display = (event) => {
  const box = document.getElementById("display");
  box.innerHTML = "";
  LIST.forEach((item, i) => {
    const span = document.createElement("span");
    span.innerHTML = `${item.text}`;
    box.appendChild(span);
    setAttributes(span, item.id, i, item.color, event);
  });
};

// Button functions
// Delete all items from local storage, local array and clear console
const deleteAll = () => {
  LIST = [];
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  INPUT.value = "";
  display();
  console.clear();
};

// Helper functions
const randomLight = () => {
  const randomValue1 = Math.floor(Math.random() * 51 + 50);
  const randomValue2 = Math.floor(Math.random() * 31 + 50);
  const color = `hsl(${Math.floor(
    Math.random() * 361
  )}, ${randomValue1}%, ${randomValue2}%)`;
  return color;
};

const setAttributes = (container, id, index, color, event) => {
  if (index === LIST.length - 1 && !event) {
    container.setAttribute("class", "fade-in-left");
  }
  container.setAttribute("id", `${id}`);
  const style = `border-color:${color};color:${color}; height:${container.clientWidth}px; visibility:visible`;
  container.setAttribute("style", style);
  container.addEventListener("mousedown", (event) => {
    console.log(event.target.id);
    event.target.id ? displayMenu(event.target) : false;
  });
};

const displayMenu = (item) => {
  const optionSize = 60;
  const menu = document.createElement("div");
  addOptionsMenu(menu);
  menu.setAttribute("class", "options-menu");
  menu.style.width = `${item.clientWidth + optionSize}px`;
  menu.style.height = `${item.clientHeight + optionSize}px`;
  item.appendChild(menu);
};

const addOptionsMenu = (item) => {
  const addOption = document.createElement("div");
  addOption.setAttribute("class", "add-option");
  const removeOption = document.createElement("div");
  removeOption.setAttribute("class", "remove-option");
  const editOption = document.createElement("div");
  editOption.setAttribute("class", "edit-option");
  const closeOption = document.createElement("div");
  closeOption.setAttribute("class", "close-option");
  item.appendChild(addOption);
  item.appendChild(removeOption);
  item.appendChild(editOption);
  item.appendChild(closeOption);
  return item;
};
