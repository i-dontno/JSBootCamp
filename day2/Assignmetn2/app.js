const names = [
  "Aarav",
  "Sanya",
  "Vikram",
  "Neha",
  "Rohan",
  "Priya",
  "Amit",
  "Meera",
  "Rajiv",
  "Ananya",
];
let currentIndex = 0;
const nameDisplay = document.getElementById("nameDisplay");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

function displayCurrentName() {
  nameDisplay.innerText = names[currentIndex];
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % names.length;
  displayCurrentName();
});

previousBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + names.length) % names.length;
  displayCurrentName();
});

displayCurrentName();
