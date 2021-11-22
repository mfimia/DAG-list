// Function to display items on container
const display = (static = false, menuCleared = false) => {
  if (menuCleared) resetMenuTogglers();
  const box = document.getElementById("display");
  // box.innerHTML = "";
  LIST.forEach((item, i) => {
    const span = document.createElement("span");
    span.setAttribute("id", item.id);
    span.innerHTML = `${item.text}`;
    box.appendChild(span);
    setAttributes(span, item.id, i, item.color, static);
    if (item.menu) {
      attachMenu(span);
    }
  });
};
