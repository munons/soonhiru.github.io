<script>
  // Sambutan otomatis
  window.onload = function() {
    alert("Selamat datang di portofolio saya!");
  };

  // Efek highlight proyek saat hover
  const projects = document.querySelectorAll(".project");

  projects.forEach(function(project) {
    project.addEventListener("mouseenter", function() {
      project.style.backgroundColor = "#f0f8ff";
      project.style.transition = "0.3s";
    });

    project.addEventListener("mouseleave", function() {
      project.style.backgroundColor = "transparent";
    });
  });
</script>
