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

// Function to display the current name
function displayCurrentName() {
  nameDisplay.textContent = names[currentIndex];
}

// Event listener for the Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % names.length;
  displayCurrentName();
});

// Event listener for the Previous button
previousBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + names.length) % names.length;
  displayCurrentName();
});

// Initial display
displayCurrentName();
