const monthName = document.querySelector("#month-name");
const dayName = document.querySelector("#day-name");
const dayNumber = document.querySelector("#day-number");
const year = document.querySelector("#year");

const date = new Date();
const month = date.getMonth();
monthName.innerText = date.toLocaleString("en", { month: "long" });
dayName.innerText = date.toLocaleString("en", { weekday: "long" });
dayNumber.innerText = date.getDate();
year.innerText = date.getFullYear();