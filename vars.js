const FORM = document.getElementById("form");
const INPUT = document.getElementById("input");
let LIST = JSON.parse(localStorage.getItem("DAG-list")) || [];
let LIST_COUNTER = JSON.parse(localStorage.getItem("DAG-counter")) || 0;
let FULL_LIST = LIST_COUNTER <= 4 ? false : true;
