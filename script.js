// Fungsi untuk menambahkan kelas 'show' ke elemen fade-in saat mereka masuk ke viewport
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

// Typewriter Effect - Menambahkan teks satu per satu
const textElements = document.querySelectorAll('.typewriter-text');
const typewriterEffect = (element) => {
  let textToType = element.textContent;
  element.textContent = ''; // Menghapus teks asli
  let index = 0;

  function typeText() {
    if (index < textToType.length) {
      element.textContent += textToType.charAt(index);
      index++;
      setTimeout(typeText, 100); // Kecepatan mengetik bisa disesuaikan
    }
  }

  typeText(); // Menjalankan animasi ketikan
};

// Menjalankan typewriter effect pada semua elemen dengan class "typewriter-text"
textElements.forEach(element => {
  typewriterEffect(element);
});
