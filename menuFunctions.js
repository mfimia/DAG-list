const addItemFromMenu = (id) => {
  console.log(id);
};
const removeItemFromMenu = (id) => {
  LIST.forEach((element, index) => {
    if (element.id == id) {
      LISTS_ARRAY.forEach((list) => {
        if (list.position === element.position) {
          list.filled = false;
        }
      });
      LIST.splice(index, 1);
    }
  });
  sessionStorage.setItem("DAG-lists-slots", JSON.stringify(LISTS_ARRAY));
  sessionStorage.setItem("DAG-list", JSON.stringify(LIST));
  display(true, true);
};
const editItemFromMenu = (id) => {
  console.log(id);
};
const closeItemFromMenu = () => {
  display(true, true);
};
