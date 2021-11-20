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
    menu: false,
  };
  LIST.unshift(item);
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  display();
};

// Function to display items on container
const display = (loaded = false) => {
  const box = document.getElementById("display");
  box.innerHTML = "";
  LIST.forEach((item, i) => {
    const span = document.createElement("span");
    span.innerHTML = `${item.text}`;
    box.appendChild(span);
    setAttributes(span, item.id, i, item.color, loaded);
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

// Function to set all atrributes
const setAttributes = (container, id, index, color, loaded) => {
  // Logic to add padding/animation when item is first/not small
  if (index === 0 && !loaded && container.innerHTML.length > 5) {
    container.setAttribute("class", "fade-in-left padding");
  } else if (index === 0 && !loaded && container.innerHTML.length <= 5) {
    container.setAttribute("class", "fade-in-left");
  } else if (container.innerHTML.length > 5) {
    container.setAttribute("class", "padding");
  }
  container.setAttribute("id", `${id}`);
  const style = `border-color:${color};color:${color}; height:${container.clientWidth}px; visibility:visible`;
  container.setAttribute("style", style);
  container.addEventListener("mousedown", (event) => {
    event.target.id ? displayMenu(event.target, event.target.id) : false;
  });
};

// Function that takes an item and displays its menu
const displayMenu = (item, id) => {
  const dagItem = LIST.filter((element) => element.id == id);
  if (!dagItem[0].menu) {
    let optionSize = item.clientWidth > 100 ? 80 : 60;
    const menu = document.createElement("div");
    addOptionsMenu(menu);
    item.clientWidth > 100
      ? menu.setAttribute("class", "options-menu-large")
      : menu.setAttribute("class", "options-menu");
    menu.style.width = `${item.clientWidth + optionSize}px`;
    menu.style.height = `${item.clientHeight + optionSize}px`;
    item.appendChild(menu);
  }
  displayedMenuActive(id);
};

const displayedMenuActive = (id) => {
  LIST.forEach((item) => {
    if (item.id == id) {
      console.log(item.menu);
      item.menu = true;
    }
  });
};

// Creates all menu options and returns item
const addOptionsMenu = (item) => {
  const addOption = document.createElement("div");
  addOption.setAttribute("class", "add-option");
  addOption.addEventListener("click", () => {
    addItemFromMenu();
  });
  const removeOption = document.createElement("div");
  removeOption.setAttribute("class", "remove-option");
  removeOption.addEventListener("click", () => {
    removeItemFromMenu();
  });
  const editOption = document.createElement("div");
  editOption.setAttribute("class", "edit-option");
  editOption.addEventListener("click", () => {
    editItemFromMenu();
  });
  const closeOption = document.createElement("div");
  closeOption.setAttribute("class", "close-option");
  closeOption.addEventListener("click", () => {
    closeItemFromMenu();
  });
  item.appendChild(addOption);
  item.appendChild(removeOption);
  item.appendChild(editOption);
  item.appendChild(closeOption);
  return item;
};
