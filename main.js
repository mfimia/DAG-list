const FORM = document.getElementById("form");
const INPUT = document.getElementById("input");
const LIST = JSON.parse(localStorage.getItem("DAG-list")) || [];

// Add event listeners
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  INPUT.value ? create(INPUT.value) : alert("Please write something!");
});

const create = (input) => {
  INPUT.value = "";
  const item = {
    text: input,
    id: Math.floor(Math.random() * 100000),
  };
  LIST.unshift(item);
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  console.log(LIST);
};
