// Sambutan otomatis
window.onload = function () {
  alert("Selamat datang di portofolio saya!");
  typeTitle(); // jalankan animasi ketik
};

// Animasi ketik di header
function typeTitle() {
  const title = document.querySelector("header h1");
  const text = "TekTis Jakarta";
  let i = 0;
  title.textContent = "";

  const typing = setInterval(() => {
    title.textContent += text.charAt(i);
    i++;
    if (i > text.length) clearInterval(typing);
  }, 150);
}

// Efek hover proyek
const projects = document.querySelectorAll(".project");

projects.forEach(function (project) {
  project.addEventListener("mouseenter", function () {
    project.style.backgroundColor = "#f0f8ff";
    project.style.transition = "0.3s";
  });

  project.addEventListener("mouseleave", function () {
    project.style.backgroundColor = "transparent";
  });
});

// Dark mode toggle
const toggleButton = document.createElement("button");
toggleButton.textContent = "🌙 Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.top = "10px";
toggleButton.style.right = "10px";
toggleButton.style.padding = "8px 12px";
toggleButton.style.border = "none";
toggleButton.style.borderRadius = "6px";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

let dark = false;

toggleButton.addEventListener("click", function () {
  document.body.style.backgroundColor = dark ? "#f4f4f4" : "#121212";
  document.body.style.color = dark ? "#333" : "#f4f4f4";
  toggleButton.textContent = dark ? "🌙 Dark Mode" : "☀️ Light Mode";
  dark = !dark;
});
