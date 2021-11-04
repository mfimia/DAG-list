const FORM = document.getElementById("form");
const INPUT = document.getElementById("input");

// Add event listeners
FORM.addEventListener("submit", (e) => {
  e.preventDefault();
  INPUT.value ? create(INPUT.value) : alert("Please write something!");
});

const create = (input) => {
  INPUT.value = "";
  console.log(input);
};
