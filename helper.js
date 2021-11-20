// "Randomizes" the color
const randomLight = () => {
  const randomValue1 = Math.floor(Math.random() * 51 + 50);
  const randomValue2 = Math.floor(Math.random() * 31 + 50);
  const color = `hsl(${Math.floor(
    Math.random() * 361
  )}, ${randomValue1}%, ${randomValue2}%)`;
  return color;
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

// Toggles the menu of the item as active
const displayedMenuActive = (id) => {
  LIST.forEach((item) => {
    if (item.id == id) {
      console.log(item.menu);
      item.menu = true;
    }
  });
};