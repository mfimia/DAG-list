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
  editOption.innerHTML = "&#9997;";
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
