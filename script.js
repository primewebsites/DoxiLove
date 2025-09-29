document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".whatsapp-float");
  setInterval(() => {
    btn.classList.toggle("pulse");
  }, 1000);
});
// SCROLL SUAVE NOS LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});

// ANIMAÇÃO FADE-IN NAS SEÇÕES
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// PULSO NO BOTÃO DO WHATSAPP
const whatsappBtn = document.querySelector(".whatsapp-float");
if (whatsappBtn) {
  setInterval(() => {
    whatsappBtn.classList.add("pulse");
    setTimeout(() => whatsappBtn.classList.remove("pulse"), 1000);
  }, 5000); // a cada 5 segundos
}
