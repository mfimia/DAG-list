// "Randomizes" the color
const randomLight = () => {
  const randomValue1 = Math.floor(Math.random() * 51 + 50);
  const randomValue2 = Math.floor(Math.random() * 31 + 50);
  const color = `hsl(${Math.floor(
    Math.random() * 361
  )}, ${randomValue1}%, ${randomValue2}%)`;
  return color;
};

// Function to set all atrributes
const setAttributes = (container, id, index, color, static) => {
  // Logic to add padding/animation when item is first/not small
  if (index === 0 && !static && container.innerHTML.length > 5) {
    container.setAttribute("class", "fade-in-left padding");
  } else if (index === 0 && !static && container.innerHTML.length <= 5) {
    container.setAttribute("class", "fade-in-left");
  } else if (container.innerHTML.length > 5) {
    container.setAttribute("class", "padding");
  }
  container.setAttribute("id", `${id}`);
  const style = `border-color:${color};color:${color}; height:${container.clientWidth}px; visibility:visible`;
  container.setAttribute("style", style);
  container.addEventListener("mousedown", (event) => {
    displayedMenuActive(event.target.id);
    event.target.id ? display(true, false) : false;
  });
};

// Toggles the menu of the item as active
const displayedMenuActive = (id) => {
  resetMenuTogglers();
  LIST.forEach((item) => {
    if (item.id == id) {
      item.menu = true;
    }
  });
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
};

// Resetting menu display toggler on load
const resetMenuTogglers = () => {
  LIST.forEach((element) => {
    element.menu = false;
  });
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
};

// Attaches a menu when called
const attachMenu = (item) => {
  let optionSize = item.clientWidth > 100 ? 100 : 80;
  const menu = document.createElement("div");
  addOptionsMenu(menu);
  item.clientWidth > 100
    ? menu.setAttribute("class", "options-menu-large")
    : menu.setAttribute("class", "options-menu");
  menu.style.width = `${item.clientWidth + optionSize}px`;
  menu.style.height = `${item.clientHeight + optionSize}px`;
  item.appendChild(menu);
};
