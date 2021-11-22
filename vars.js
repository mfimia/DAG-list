const FORM = document.getElementById("form");
const INPUT = document.getElementById("input");
// Data containing elements in the list (up to 4)
let LIST = JSON.parse(localStorage.getItem("DAG-list")) || [];
// List of lists. Includes its counter, its position and information about status
const LISTS_ARRAY = JSON.parse(localStorage.getItem("DAG-lists-slots")) || [
  {
    filled: false,
    position: 1,
  },
  {
    filled: false,
    position: 2,
  },
  {
    filled: false,
    position: 3,
  },
  {
    filled: false,
    position: 4,
  },
];
