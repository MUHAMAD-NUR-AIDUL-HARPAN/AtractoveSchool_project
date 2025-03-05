document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");
  let isOpen = false;

  // Pastikan elemen menu memakai transform dan transisi yang smooth
  mobileMenu.classList.add("transform", "transition-all", "duration-500", "ease-in-out");
  // Kondisi awal: menu tersembunyi dengan geser ke kiri dan opacity 0
  mobileMenu.classList.add("-translate-x-full", "opacity-0");

  function closeMenu() {
    isOpen = false;
    mobileMenu.classList.remove("translate-x-0", "opacity-100", "max-h-screen");
    mobileMenu.classList.add("-translate-x-full", "opacity-0", "max-h-0");
    menuIcon.innerHTML = `
      <line x1="4" y1="6" x2="20" y2="6" stroke-linecap="round"></line>
      <line x1="4" y1="12" x2="20" y2="12" stroke-linecap="round"></line>
      <line x1="4" y1="18" x2="20" y2="18" stroke-linecap="round"></line>
    `;
    // Aktifkan kembali scroll pada halaman ketika menu tertutup
    document.body.style.overflow = "auto";
  }

  mobileMenuButton.addEventListener("click", () => {
    isOpen = !isOpen;
    if (isOpen) {
      mobileMenu.classList.remove("-translate-x-full", "opacity-0", "max-h-0");
      mobileMenu.classList.add("translate-x-0", "opacity-100", "max-h-screen");
      menuIcon.innerHTML = `
        <line x1="6" y1="6" x2="18" y2="18" stroke-linecap="round"></line>
        <line x1="6" y1="18" x2="18" y2="6" stroke-linecap="round"></line>
      `;
      // Nonaktifkan scroll pada body ketika menu terbuka
      document.body.style.overflow = "hidden";
    } else {
      closeMenu();
    }
  });
});







// slider start 
document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("teacher-slider");
  const prevButton = document.getElementById("prev-slide");
  const nextButton = document.getElementById("next-slide");

  if (!container || !prevButton || !nextButton) return;

  // Aktifkan smooth scroll
  container.style.scrollBehavior = "smooth";

  // Ambil slide asli dan clone untuk infinite loop
  const slides = Array.from(container.children);
  const slideCount = slides.length;
  slides.forEach((slide) => {
    container.appendChild(slide.cloneNode(true));
  });

  // Menghitung lebar satu item slider (termasuk gap, misal 16px)
  const itemWidth = slides[0].offsetWidth + 16;

  nextButton.addEventListener("click", function () {
    // Jika sudah melewati setengah total konten (slide asli), reset ke awal
    if (container.scrollLeft >= container.scrollWidth / 2) {
      // Nonaktifkan transisi sebentar agar reset tidak terlihat
      container.style.scrollBehavior = "auto";
      container.scrollLeft = 0;
      container.offsetHeight; // paksa reflow
      container.style.scrollBehavior = "smooth";
    }
    container.scrollLeft += itemWidth;
  });

  prevButton.addEventListener("click", function () {
    // Jika di posisi awal, langsung lompat ke akhir (bagian clone)
    if (container.scrollLeft === 0) {
      container.style.scrollBehavior = "auto";
      container.scrollLeft = container.scrollWidth / 2;
      container.offsetHeight; // paksa reflow
      container.style.scrollBehavior = "smooth";
    }
    container.scrollLeft -= itemWidth;
  });
});


// scrol
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    
    // Ambil elemen target berdasarkan href
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    
    // Misalnya offset 80px (sesuaikan dengan tinggi header fixed)
    const headerOffset = 80;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});


console.log