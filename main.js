// Add event listeners
FORM.addEventListener("submit", (e) => {
  evaluateCount();
  if (!FULL_LIST) {
    e.preventDefault();
    if (INPUT.value.length < 56) {
      INPUT.value ? create(INPUT.value) : alert("Please write something!");
    } else {
      alert("Please write something shorter! (Max. 55 characters)");
    }
  } else {
    alert("List is full! Please remove an existing item");
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
  LIST.push(item);
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  LIST_COUNTER++;
  localStorage.setItem("DAG-counter", JSON.stringify(LIST_COUNTER));
  display(false, true);
  evaluateCount();
};

// Button functions
// Delete all items from local storage, local array and clear console
const deleteAll = () => {
  LIST = [];
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  INPUT.value = "";
  LIST_COUNTER = 0;
  localStorage.setItem("DAG-counter", JSON.stringify(LIST_COUNTER));
  evaluateCount();
  clearDisplay();
  display();
  console.clear();
};
