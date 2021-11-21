// Add event listeners
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  if (INPUT.value.length < 56) {
    INPUT.value ? create(INPUT.value) : alert("Please write something!");
  } else {
    alert("Please write something shorter! (Max. 55 characters)");
  }
});

// Main CRUD functions----------------
// Function to create and store items
const create = (input) => {
  INPUT.value = "";
  const item = {
    text: input,
    id: Math.floor(Math.random() * 100000),
    color: randomLight(),
    menu: false,
  };
  LIST.unshift(item);
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  display(false, true);
};

// Button functions
// Delete all items from local storage, local array and clear console
const deleteAll = () => {
  LIST = [];
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  INPUT.value = "";
  display();
  console.clear();
};
