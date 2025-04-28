const textEl = document.querySelector(".text");
const charCount = document.querySelector(".character-count");
const remCount = document.querySelector(".remaining-count");

textEl.addEventListener("keyup", () => {
   updateCounter();
});

updateCounter()
function updateCounter() {
   charCount.innerText = textEl.value.length;
   remCount.innerText = `${50 - textEl.value.length}`;
}