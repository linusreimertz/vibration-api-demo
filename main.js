import "./style.css";

const emojiEl = document.getElementById("emoji");
const punchButton =
  document.getElementById("punch");

const emojis = [
  "&#128565;",
  "&#128555;",
  "&#128551;",
  "&#128543;",
  "&#128578;"
];

let currentHealth = [4];

function punch() {
  console.log("punch");
  if (currentHealth > 0) {
    currentHealth--;
    updateDOM();
  }
}

function updateDOM() {
  emojiEl.innerHTML = emojis[currentHealth];
}

punchButton.onclick = punch;
