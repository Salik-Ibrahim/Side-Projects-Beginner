const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
   const xPos = e.offsetX;
   const yPos = e.offsetY;
   // for getting mouse position in x and y
   const span = document.createElement("span");

   span.style.left = xPos + "px";
   span.style.top = yPos + "px";

   const size = 35 + Math.random() * 50 + "px";
   span.style.width = size
   span.style.height = size
   body.appendChild(span);

   // setTimeout(function () { body.removeChild(span) }, 300) // my method for animation
   setTimeout(function () {
      span.remove();
   }, 3000)
});