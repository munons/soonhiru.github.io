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

// Menambahkan event listener untuk elemen proyek agar bisa mendeteksi sentuhan pada perangkat seluler
const projects = document.querySelectorAll(".project");

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
