let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const clickSound = document.getElementById("clickSound");

updateCount();

increaseBtn.addEventListener("click", () => changeCount(1));
decreaseBtn.addEventListener("click", () => changeCount(-1));
resetBtn.addEventListener("click", () => {
  count = 0;
  saveAndUpdate();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "+") changeCount(1);
  if (e.key === "-") changeCount(-1);
});

function changeCount(value) {
  count += value;
  saveAndUpdate();
  playSound();
  animate();
}

function saveAndUpdate() {
  localStorage.setItem("count", count);
  updateCount();
}

function updateCount() {
  countDisplay.textContent = count;

  if (count > 0) {
    countDisplay.style.color = "green";
  } else if (count < 0) {
    countDisplay.style.color = "red";
  } else {
    countDisplay.style.color = "black";
  }
}

function animate() {
  countDisplay.classList.add("animate");
  setTimeout(() => {
    countDisplay.classList.remove("animate");
  }, 200);
}

function playSound() {
  clickSound.currentTime = 0;
  clickSound.play();
}
