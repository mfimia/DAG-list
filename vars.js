const FORM = document.getElementById("form");
const INPUT = document.getElementById("input");
let LIST = JSON.parse(localStorage.getItem("DAG-list")) || [];
let LIST_COUNTER = JSON.parse(localStorage.getItem("DAG-counter")) || 0;
let FULL_LIST = LIST_COUNTER <= 3 ? false : true;

// Selecting all lists and storing them with their counters
const LISTS_ARRAY = [
  {
    list: document.getElementById("section-1"),
    counter: document.getElementById("counter-1"),
    filled: false,
    position: 1,
  },
  {
    list: document.getElementById("section-2"),
    counter: document.getElementById("counter-2"),
    filled: false,
    position: 2,
  },
  {
    list: document.getElementById("section-3"),
    counter: document.getElementById("counter-3"),
    filled: false,
    position: 3,
  },
  {
    list: document.getElementById("section-4"),
    counter: document.getElementById("counter-4"),
    filled: false,
    position: 4,
  },
];

