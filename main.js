// Add event listeners
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  if (LISTS_ARRAY.every((item) => item.filled)) {
    alert("All lists are taken! Please remove an existing item");
  } else {
    if (INPUT.value.length < 56) {
      INPUT.value ? create(INPUT.value) : alert("Please write something!");
    } else {
      alert("Please write something shorter! (Max. 55 characters)");
    }
  }
});

// Main CRUD functions----------------
// Function to create and store items
const create = (input) => {
  INPUT.value = "";
  const availableSpot = LISTS_ARRAY.find((item) => !item.filled);
  const item = {
    text: input,
    id: Math.floor(Math.random() * 100000),
    color: randomLight(),
    menu: false,
    position: availableSpot.position,
  };
  updateFreeSpots(item);
  LIST.push(item);
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  display(false, true);
};

// Button functions
// Delete all items from local storage, local array and clear console
const deleteAll = () => {
  LIST = [];
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  INPUT.value = "";
  clearDisplay();
  emptyAllSpots();
  console.clear();
  display();
};
