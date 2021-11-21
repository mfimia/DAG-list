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

// Function that takes an item and displays its menu
const displayMenu = (item, id) => {
  const dagItem = LIST.filter((element) => element.id == id);
  if (!dagItem[0].menu) {
    let optionSize = item.clientWidth > 100 ? 100 : 80;
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
