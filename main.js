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
  LIST.push(item);
  localStorage.setItem("DAG-list", JSON.stringify(LIST));
  const box = document.getElementById("display");
  display();
};

const display = () => {
//   console.log(LIST);
  const box = document.getElementById("display");
  box.innerHTML = "";
  LIST.forEach((item, i) => {
    if (i === LIST.length - 1) {
    //   const span = document.createElement("span");
    //   span.setAttribute('id', `${item.id}`);
    //   span.setAttribute('class', 'fade-in-left');
    //   span.innerHTML = `${item.text}`
      box.innerHTML += `<span id=${item.id} class="fade-in-left" style="border-color:${item.color};color:${item.color}">${item.text}</span>`;
    } else {
      box.innerHTML += `<span id=${item.id} style="border-color:${item.color}; color:${item.color}">${item.text}</span>`;
    }
    // const width = document.getElementById(`${item.id}`).clientWidth;
    // document.getElementById(`${item.id}`);
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
  const randomValue1 = Math.floor(Math.random() * 51 + 50);
  const randomValue2 = Math.floor(Math.random() * 31 + 50);
  const color = `hsl(${Math.floor(
    Math.random() * 361
  )}, ${randomValue1}%, ${randomValue2}%)`;
  return color;
};

// const setAttributes = (id, ) => {

// }

display();
