// Function to display items on container
const display = (static = false, menuCleared = false) => {
  if (!FULL_LIST) {
    if (menuCleared) resetMenuTogglers();
    for (i = 1; i <= LIST_COUNTER; i++) {
      const box = document.querySelector(`#display #section-${i}`);
      box.innerHTML = "";
      LIST.forEach((item, index) => {
        if (index + 1 === i) {
          const span = document.createElement("span");
          span.setAttribute("id", item.id);
          span.innerHTML = `${item.text}`;
          box.appendChild(span);
          setAttributes(span, item.id, index, item.color, static);
          if (item.menu) {
            attachMenu(span);
          }
        }
      });
    }
  }
};
