// Function to display items on container
const display = (static = false, menuCleared = false) => {
  if (menuCleared) resetMenuTogglers();
  LIST.forEach((item, index) => {
    const box = document.querySelector(`#display #section-${item.position}`);
    document.getElementById(`counter-${item.position}`).innerHTML = "🔒";
    box.innerHTML = "";
    const span = document.createElement("span");
    span.setAttribute("id", item.id);
    span.innerHTML = `${item.text}`;
    box.appendChild(span);
    setAttributes(span, item.id, index, item.color, static);
    if (item.menu) {
      attachMenu(span);
    }
  });
};
