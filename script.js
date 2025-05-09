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
