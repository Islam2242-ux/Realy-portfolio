/**
 * Animations.js - Mengelola semua animasi menggunakan Anime.js
 * Termasuk animasi gelombang (wave) untuk setiap section
 */

// Import Anime.js
const anime = window.anime

// Konfigurasi animasi gelombang
const waveConfig = {
  duration: 3000,
  easing: "easeInOutSine",
  loop: true,
  direction: "alternate",
}

// Inisialisasi animasi setelah DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  initWaveAnimations()
  initScrollAnimations()
  initHoverAnimations()
})

/**
 * Inisialisasi animasi gelombang untuk semua section
 */
function initWaveAnimations() {
  // Tambahkan gradients ke SVG
  addWaveGradients()

  // Animasi gelombang untuk section beranda
  if (document.querySelector(".wave-path")) {
    anime({
      targets: ".wave-path",
      d: [
        {
          value:
            "M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,186.7C672,203,768,181,864,154.7C960,128,1056,96,1152,90.7C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        },
        {
          value:
            "M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,176C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        },
      ],
      ...waveConfig,
    })
  }

  // Animasi gelombang untuk section tentang
  if (document.querySelector(".wave-path-about")) {
    anime({
      targets: ".wave-path-about",
      d: [
        {
          value:
            "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        },
        {
          value:
            "M0,32L48,42.7C96,53,192,75,288,69.3C384,64,480,32,576,26.7C672,21,768,43,864,58.7C960,75,1056,85,1152,74.7C1248,64,1344,32,1392,16L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        },
      ],
      duration: 4000,
      easing: "easeInOutQuad",
      loop: true,
      direction: "alternate",
    })
  }

  // Animasi gelombang untuk section proyek
  if (document.querySelector(".wave-path-projects")) {
    anime({
      targets: ".wave-path-projects",
      d: [
        {
          value:
            "M0,32L48,37.3C96,43,192,53,288,48C384,43,480,21,576,16C672,11,768,21,864,32C960,43,1056,53,1152,48C1248,43,1344,21,1392,10.7L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        },
        {
          value:
            "M0,16L48,21.3C96,27,192,37,288,32C384,27,480,5,576,0C672,5,768,37,864,48C960,59,1056,53,1152,42.7C1248,32,1344,16,1392,8L1440,0L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        },
      ],
      duration: 3500,
      easing: "easeInOutCubic",
      loop: true,
      direction: "alternate",
    })
  }

  // Animasi gelombang untuk section kontak
  if (document.querySelector(".wave-path-contact")) {
    anime({
      targets: ".wave-path-contact",
      d: [
        {
          value:
            "M0,96L48,90.7C96,85,192,75,288,80C384,85,480,107,576,112C672,117,768,107,864,96C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        },
        {
          value:
            "M0,64L48,74.7C96,85,192,107,288,101.3C384,96,480,64,576,58.7C672,53,768,75,864,90.7C960,107,1056,117,1152,106.7C1248,96,1344,64,1392,48L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
        },
      ],
      duration: 4500,
      easing: "easeInOutSine",
      loop: true,
      direction: "alternate",
    })
  }
}

/**
 * Menambahkan gradients ke SVG untuk efek warna gelombang
 */
function addWaveGradients() {
  const svgs = [
    { selector: ".wave-svg", id: "waveGradient" },
    { selector: ".wave-svg-about", id: "waveGradientAbout" },
    { selector: ".wave-svg-projects", id: "waveGradientProjects" },
    { selector: ".wave-svg-contact", id: "waveGradientContact" },
  ]

  svgs.forEach(({ selector, id }) => {
    const svg = document.querySelector(selector)
    if (svg) {
      // Hapus defs yang sudah ada jika ada
      const existingDefs = svg.querySelector("defs")
      if (existingDefs) {
        existingDefs.remove()
      }

      // Buat elemen defs dan gradient baru
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs")
      const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient")

      gradient.setAttribute("id", id)
      gradient.setAttribute("x1", "0%")
      gradient.setAttribute("y1", "0%")
      gradient.setAttribute("x2", "100%")
      gradient.setAttribute("y2", "0%")

      // Stop pertama (biru)
      const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop")
      stop1.setAttribute("offset", "0%")
      stop1.setAttribute("stop-color", "#3b82f6")
      stop1.setAttribute("stop-opacity", "0.8")

      // Stop kedua (ungu)
      const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop")
      stop2.setAttribute("offset", "100%")
      stop2.setAttribute("stop-color", "#8b5cf6")
      stop2.setAttribute("stop-opacity", "0.8")

      gradient.appendChild(stop1)
      gradient.appendChild(stop2)
      defs.appendChild(gradient)
      svg.insertBefore(defs, svg.firstChild)

      // Set fill path menggunakan gradient
      const path = svg.querySelector("path")
      if (path) {
        path.setAttribute("fill", `url(#${id})`)
      }
    }
  })
}

/**
 * Inisialisasi animasi scroll untuk elemen yang muncul saat di-scroll
 */
function initScrollAnimations() {
  // Observer untuk animasi saat scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const element = entry.target

        // Animasi fade in untuk elemen
        anime({
          targets: element,
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
          easing: "easeOutQuad",
          delay: anime.stagger(100),
        })

        observer.unobserve(element)
      }
    })
  }, observerOptions)

  // Observe elemen yang perlu animasi scroll
  const elementsToAnimate = document.querySelectorAll(".project-card, .tech-tag, .form-input")
  elementsToAnimate.forEach((el) => {
    el.style.opacity = "0"
    observer.observe(el)
  })
}

/**
 * Inisialisasi animasi hover untuk interaktivitas
 */
function initHoverAnimations() {
  // Animasi hover untuk kartu proyek
  const projectCards = document.querySelectorAll(".project-card")
  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      anime({
        targets: card,
        scale: 1.02,
        duration: 300,
        easing: "easeOutQuad",
      })
    })

    card.addEventListener("mouseleave", () => {
      anime({
        targets: card,
        scale: 1,
        duration: 300,
        easing: "easeOutQuad",
      })
    })
  })

  // Animasi hover untuk tombol
  const buttons = document.querySelectorAll("button, .btn-primary, .btn-secondary")
  buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
      anime({
        targets: button,
        scale: 1.05,
        duration: 200,
        easing: "easeOutQuad",
      })
    })

    button.addEventListener("mouseleave", () => {
      anime({
        targets: button,
        scale: 1,
        duration: 200,
        easing: "easeOutQuad",
      })
    })
  })
}

/**
 * Animasi untuk modal (dipanggil dari main.js)
 */
function animateModalOpen(modal) {
  const modalContent = modal.querySelector(".bg-white")

  anime({
    targets: modal,
    opacity: [0, 1],
    duration: 300,
    easing: "easeOutQuad",
  })

  anime({
    targets: modalContent,
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 400,
    easing: "easeOutBack",
    delay: 100,
  })
}

/**
 * Animasi untuk menutup modal
 */
function animateModalClose(modal, callback) {
  const modalContent = modal.querySelector(".bg-white")

  anime({
    targets: modalContent,
    scale: [1, 0.8],
    opacity: [1, 0],
    duration: 300,
    easing: "easeInBack",
  })

  anime({
    targets: modal,
    opacity: [1, 0],
    duration: 200,
    easing: "easeInQuad",
    delay: 100,
    complete: callback,
  })
}

/**
 * Animasi untuk toast notification
 */
function animateToast(toast, show = true) {
  if (show) {
    anime({
      targets: toast,
      translateX: [400, 0],
      opacity: [0, 1],
      duration: 400,
      easing: "easeOutBack",
    })
  } else {
    anime({
      targets: toast,
      translateX: [0, 400],
      opacity: [1, 0],
      duration: 300,
      easing: "easeInQuad",
    })
  }
}

/**
 * Animasi loading untuk form submission
 */
function animateLoading(element, show = true) {
  if (show) {
    element.innerHTML = '<div class="loading"></div> Memproses...'
    element.disabled = true
  } else {
    element.disabled = false
    // Konten akan dikembalikan oleh fungsi pemanggil
  }
}

// Export fungsi untuk digunakan di file lain
window.portfolioAnimations = {
  animateModalOpen,
  animateModalClose,
  animateToast,
  animateLoading,
}
