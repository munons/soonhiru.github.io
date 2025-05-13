function showAlert(platform) {
  alert('Menuju ke ' + platform + ' Munons.');
}

// Animasi fade-in saat scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(fade => observer.observe(fade));

//Animasi ketika teks
const textElement = document.getElementById('typewriter-text');
const textToType = "Selamat datang di website kami!";
let index = 0;

function typeText() {
  if (index === 0) textElement.textContent = ''; // Reset teks
  if (index < textToType.length) {
    textElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, 100); // Ubah kecepatan jika perlu
  }
}

typeText();
