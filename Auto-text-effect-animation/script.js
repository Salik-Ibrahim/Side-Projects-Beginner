const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "WebDeveloper", "FreeLancer", "Instructor"]

let characterIndex = 0;
let careerIndex = 0;

function updateText() {
   containerEl.innerHTML = `<h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`
   characterIndex++;
   if (characterIndex > careers[careerIndex].length) {
      characterIndex = 0;
      careerIndex = (careerIndex + 1) % careers.length;
   }
   setTimeout(updateText, 400);
}

updateText();