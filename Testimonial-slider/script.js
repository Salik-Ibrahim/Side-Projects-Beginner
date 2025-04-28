const testimonials = [{
   name: "John Doe",
   photoUrl: "https://images.unsplash.com/photo-1727093267255-e9b31b2b35ba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
   text: "I have been using apple for over a year now and I love it! I can't imagine life without it.It's so easy to use, and the customer service is great"
},
{
   name: "Charlie",
   photoUrl: "https://images.unsplash.com/photo-1727619784641-db497cc6da32?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
   text: "Apple has helped my team and I stay on the same page. Previously, we were all over the board. Using apple has definitely saved us time and money."
},
{
   name: "Rosetta",
   photoUrl: "https://images.unsplash.com/photo-1598441363148-a79234277e7f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
   text: "I have tried a few software of this kind and apple is the best by far!"
}
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".username");

let index = 0;

updateTestimonial();

function updateTestimonial() {
   const { name, photoUrl, text } = testimonials[index];
   imgEl.src = photoUrl;
   textEl.innerText = text;
   nameEl.innerText = name;
   index++;
   if (index === testimonials.length)
      index = 0;
   setTimeout(() => {
      updateTestimonial();
   }, 10000)
}