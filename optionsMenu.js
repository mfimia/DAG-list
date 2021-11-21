// Creates all menu options and returns item
const addOptionsMenu = (item) => {
  const addOption = document.createElement("div");
  addOption.setAttribute("class", "add-option popout-add");
  addOption.innerHTML = "➕";
  addOption.addEventListener("click", () => {
    addItemFromMenu();
  });
  const removeOption = document.createElement("div");
  removeOption.setAttribute("class", "remove-option popout-remove");
  removeOption.innerHTML = "❌";
  removeOption.addEventListener("click", () => {
    removeItemFromMenu();
  });
  const editOption = document.createElement("div");
  editOption.setAttribute("class", "edit-option popout-edit");
  editOption.innerHTML = "✍";
  editOption.addEventListener("click", () => {
    editItemFromMenu();
  });
  const closeOption = document.createElement("div");
  closeOption.setAttribute("class", "close-option popout-exit");
  closeOption.innerHTML = "🙋‍♂️";
  closeOption.addEventListener("click", () => {
    closeItemFromMenu();
  });
  item.appendChild(addOption);
  item.appendChild(removeOption);
  item.appendChild(editOption);
  item.appendChild(closeOption);
  return item;
};
