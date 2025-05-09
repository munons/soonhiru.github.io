// Animasi ketik di header
// Efek Teks Ketik
const typingText = document.getElementById("typing-text");
const text = "Selamat datang di Portofolio Saya!";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

window.onload = typeEffect;

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

// Menambahkan efek saat elemen proyek disentuh di perangkat seluler
projects.forEach(function (project) {
  // Event untuk saat elemen disentuh
  project.addEventListener("touchstart", function () {
    // Menambahkan efek transformasi dan bayangan saat disentuh
    project.style.transform = "scale(1.05)";
    project.style.transition = "transform 0.3s ease-in-out";
    project.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
  });

  // Event untuk saat sentuhan selesai
  project.addEventListener("touchend", function () {
    // Mengembalikan transformasi dan bayangan ke keadaan semula setelah sentuhan selesai
    project.style.transform = "scale(1)";
    project.style.boxShadow = "none";
  });
});
