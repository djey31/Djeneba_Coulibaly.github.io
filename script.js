const slides = document.querySelectorAll(".slide");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

slides.forEach(slide => observer.observe(slide));
