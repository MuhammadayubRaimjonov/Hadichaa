const openButton = document.getElementById("openBtn");
const letter = document.getElementById("letter");

openButton.addEventListener("click", () => {
  letter.classList.add("show");
  openButton.textContent = "Yuragimdagi gaplar shu edi ♥";
  openButton.disabled = true;
});
