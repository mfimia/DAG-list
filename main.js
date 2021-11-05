const FORM = document.getElementById("form");
const INPUT = document.getElementById("input");
let LIST = JSON.parse(localStorage.getItem("DAG-list")) || [];

// Add event listeners
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  INPUT.value ? create(INPUT.value) : alert("Please write something!");
});

// Main CRUD functions
const create = (input) => {
  INPUT.value = "";
  const item = {
    text: input,
    id: Math.floor(Math.random() * 100000),
    color: randomLight(),
  };
  LIST.unshift(item);
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  display();
};

const display = () => {
  console.log(LIST);
  const box = document.getElementById("display");
  box.innerHTML = "";
  LIST.forEach((item) => {
    box.innerHTML += `<span style="border-color:${item.color};color:${item.color}">${item.text}</span>`;
  });
};

// Button functions
const deleteAll = () => {
  LIST = [];
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  INPUT.value = "";
  display();
  console.clear();
};

// Helper functions
const randomLight = () => {
  let color = "hsl(" + Math.floor(Math.random() * 360) + ", 100%, 75%)";
  return color;
};

display();
