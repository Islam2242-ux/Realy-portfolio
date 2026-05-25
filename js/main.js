/**
 * Main.js - Mengelola semua fungsi utama website portfolio
 * Termasuk navigasi, modal, form handling, dan manajemen proyek
 */

// Data proyek default
let projects = [
  {
    id: 1,
    title: "Study Club Website",
    description: "Modern Website dengan fitur lengkap untuk alokasi SC",
    detailDescription:
      "Platform e-commerce yang dibangun dengan Laravel 12 dan Vue.js. Dilengkapi dengan sistem pembayaran terintegrasi, manajemen inventory, dashboard admin yang komprehensif, dan sistem notifikasi real-time. Menggunakan MySQL sebagai database dan Redis untuk caching.",
    technologies: ["Laravel 12", "Vite", "MySQL", "Filament", "Tailwind CSS", "Docker"],
    image: "image/BERANDA — STUDY CLUB PORTAL.png",
    github: "https://github.com/username/ecommerce-platform",
    demo: "https://kimiaholic.ade-setiawan.my.id/",
  },
  {
    id: 2,
    title: "Mobile Generate Scedule",
    description: "Aplikasi AI Scedule dengan UI/UX yang modern",
    detailDescription:
      "Proyek ini merupakan sebuah proyek aplikasi Flutter baru yang berfungsi sebagai titik awal (starting point) untuk pengembangan aplikasi pembuat jadwal berbasis AI (AI Schedule Generator).",
    technologies: ["Flutter", "Dart", "Firebase"],
    image: "image/WhatsApp Image 2026-05-21 at 13.24.08.jpeg",
    github: "https://github.com/Islam2242-ux/ai-schedule-generator-app.git",
    demo: "https://ai-schedule-generator-app.appwrite.network/",
  },
  {
    id: 3,
    title: "Web Driver Portofolio",
    description: "Sistem manajemen tugas untuk tim dengan kolaborasi real-time",
    detailDescription:
      "Sistem manajemen tugas berbasis web yang memungkinkan tim untuk berkolaborasi secara real-time. Dilengkapi dengan fitur kanban board, time tracking, reporting, dan integrasi dengan berbagai tools produktivitas. Dibangun dengan teknologi modern untuk performa optimal.",
    technologies: ["HTML", "Javascript", "Tailwind CSS", "SEO"],
    image: "image/60624061-aac98b9b06ee8451970680737b464de1.png",
    github: "https://github.com/Islam2242-ux/Mahdi-Driver.git",
    demo: "https://mahdi-driver.vercel.app/",
  },
]

// Inisialisasi aplikasi setelah DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

/**
 * Inisialisasi semua fungsi utama aplikasi
 */
function initializeApp() {
  setupNavigation()
  setupModals()
  setupForms()
  setupMobileMenu()
  renderProjects()
  setupScrollEffects()
  loadProjectsFromStorage()
  initVanta()
}

/**
 * Inisialisasi Vanta.js untuk background
 */
function initVanta() {
  if (typeof VANTA !== 'undefined') {
    VANTA.NET({
      el: "#vanta-bg",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      color: 0x3b82f6,
      backgroundColor: 0xf9fafb,
      points: 12.00,
      maxDistance: 20.00,
      spacing: 16.00
    })
  }
}

/**
 * Setup navigasi dan smooth scrolling
 */
function setupNavigation() {
  // Smooth scrolling untuk link navigasi
  const navLinks = document.querySelectorAll('a[href^="#"]')
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80 // Offset untuk fixed navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })

        // Tutup mobile menu jika terbuka
        const mobileMenu = document.getElementById("mobileMenu")
        if (!mobileMenu.classList.contains("hidden")) {
          mobileMenu.classList.add("hidden")
        }
      }
    })
  })

  // Highlight active navigation
  window.addEventListener("scroll", highlightActiveNav)
}

/**
 * Highlight navigasi aktif berdasarkan scroll position
 */
function highlightActiveNav() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let currentSection = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.clientHeight

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("text-primary-600", "font-semibold")
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("text-primary-600", "font-semibold")
    }
  })
}

/**
 * Setup mobile menu toggle
 */
function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })

  // Tutup mobile menu saat klik di luar
  document.addEventListener("click", (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden")
    }
  })
}

/**
 * Setup semua modal functionality
 */
function setupModals() {
  setupProjectModal()
}

/**
 * Setup modal detail proyek
 */
function setupProjectModal() {
  const modal = document.getElementById("projectModal")
  const closeBtn = document.getElementById("closeModal")

  closeBtn.addEventListener("click", () => {
    closeModal(modal)
  })

  // Tutup modal saat klik overlay
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal(modal)
    }
  })

  // Tutup modal dengan ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal(modal)
    }
  })
}

/**
 * Buka modal dengan animasi
 */
function openModal(modal) {
  modal.classList.remove("hidden")
  document.body.style.overflow = "hidden"

  if (window.portfolioAnimations) {
    window.portfolioAnimations.animateModalOpen(modal)
  }
}

/**
 * Tutup modal dengan animasi
 */
function closeModal(modal) {
  if (window.portfolioAnimations) {
    window.portfolioAnimations.animateModalClose(modal, () => {
      modal.classList.add("hidden")
      document.body.style.overflow = "auto"
    })
  } else {
    modal.classList.add("hidden")
    document.body.style.overflow = "auto"
  }
}

/**
 * Setup semua form handling
 */
function setupForms() {
  setupContactForm()
  setupWhatsAppCopy()
}

/**
 * Setup form kontak
 */
function setupContactForm() {
  const form = document.getElementById("contactForm")

  form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = new FormData(form)
    const data = {
      nama: formData.get("nama"),
      email: formData.get("email"),
      pesan: formData.get("pesan"),
    }

    const submitBtn = form.querySelector('button[type="submit"]')
    const originalText = submitBtn.innerHTML

    // Animasi loading
    if (window.portfolioAnimations) {
      window.portfolioAnimations.animateLoading(submitBtn, true)
    }

    try {
      // Simulasi pengiriman email (ganti dengan implementasi nyata)
      await simulateEmailSend(data)

      // Reset form
      form.reset()

      // Tampilkan toast sukses
      showToast("Pesan berhasil dikirim!", "success")
    } catch (error) {
      console.error("Error sending email:", error)
      showToast("Gagal mengirim pesan. Silakan coba lagi.", "error")
    } finally {
      // Reset tombol
      submitBtn.innerHTML = originalText
      submitBtn.disabled = false
    }
  })
}

/**
 * Setup tombol copy WhatsApp
 */
function setupWhatsAppCopy() {
  const copyBtn = document.getElementById("copyWhatsApp")
  const whatsappNumber = "+62 857-9200-2867"

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(whatsappNumber)
      showToast("Nomor WhatsApp berhasil disalin!", "success")

      // Ubah teks tombol sementara
      const originalText = copyBtn.innerHTML
      copyBtn.innerHTML = '<i class="fas fa-check text-xl mr-3"></i>Tersalin!'

      setTimeout(() => {
        copyBtn.innerHTML = originalText
      }, 2000)
    } catch (error) {
      console.error("Error copying to clipboard:", error)
      showToast("Gagal menyalin nomor. Silakan salin manual: " + whatsappNumber, "error")
    }
  })
}

/**
 * Render semua proyek ke dalam grid
 */
function renderProjects() {
  const projectGrid = document.getElementById("projectGrid")

  if (!projectGrid) return

  projectGrid.innerHTML = ""

  projects.forEach((project) => {
    const projectCard = createProjectCard(project)
    projectGrid.appendChild(projectCard)
  })
}

/**
 * Buat kartu proyek
 */
function createProjectCard(project) {
  const card = document.createElement("div")
  card.className =
    "project-card bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"

  card.innerHTML = `
        <div class="relative overflow-hidden">
            <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover transition-transform duration-300">
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold text-gray-800 mb-3">${project.title}</h3>
            <p class="text-gray-600 mb-4 line-clamp-3">${project.description}</p>
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.technologies
                  .map(
                    (tech) => `
                    <span class="tech-tag bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        ${tech}
                    </span>
                `,
                  )
                  .join("")}
            </div>
            <div class="flex justify-between items-center">
                <button class="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                    <i class="fas fa-eye mr-2"></i>Lihat Detail
                </button>
                <div class="flex space-x-2">
                    ${
                      project.github
                        ? `
                        <a href="${project.github}" target="_blank" class="text-gray-600 hover:text-gray-800 transition-colors">
                            <i class="fab fa-github text-lg"></i>
                        </a>
                    `
                        : ""
                    }
                    ${
                      project.demo
                        ? `
                        <a href="${project.demo}" target="_blank" class="text-gray-600 hover:text-gray-800 transition-colors">
                            <i class="fas fa-external-link-alt text-lg"></i>
                        </a>
                    `
                        : ""
                    }
                </div>
            </div>
        </div>
    `

  // Event listener untuk membuka modal detail
  card.addEventListener("click", (e) => {
    // Jangan buka modal jika klik pada link eksternal
    if (e.target.closest("a")) return

    showProjectDetail(project)
  })

  return card
}

/**
 * Tampilkan detail proyek dalam modal
 */
function showProjectDetail(project) {
  const modal = document.getElementById("projectModal")
  const title = document.getElementById("modalTitle")
  const content = document.getElementById("modalContent")
  const actions = document.getElementById("modalActions")

  title.textContent = project.title

  content.innerHTML = `
        <div class="mb-6">
            <img src="${project.image}" alt="${project.title}" class="w-full h-64 object-cover rounded-lg shadow-md">
        </div>
        <div class="prose max-w-none">
            <h4 class="text-lg font-semibold text-gray-800 mb-3">Deskripsi Proyek</h4>
            <p class="text-gray-600 leading-relaxed mb-6">${project.detailDescription}</p>
            
            <h4 class="text-lg font-semibold text-gray-800 mb-3">Teknologi yang Digunakan</h4>
            <div class="flex flex-wrap gap-2 mb-6">
                ${project.technologies
                  .map(
                    (tech) => `
                    <span class="tech-tag bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        ${tech}
                    </span>
                `,
                  )
                  .join("")}
            </div>
        </div>
    `

  actions.innerHTML = `
        ${
          project.github
            ? `
            <a href="${project.github}" target="_blank" 
               class="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center">
                <i class="fab fa-github mr-2"></i>Lihat Repository
            </a>
        `
            : ""
        }
        ${
          project.demo
            ? `
            <a href="${project.demo}" target="_blank" 
               class="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
                <i class="fas fa-external-link-alt mr-2"></i>Lihat Demo
            </a>
        `
            : ""
        }
    `

  openModal(modal)
}

/**
 * Tampilkan toast notification
 */
function showToast(message, type = "success") {
  console.log(`[${type}] ${message}`)
}

/**
 * Setup scroll effects
 */
function setupScrollEffects() {
  // Navbar background saat scroll
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav")
    if (window.scrollY > 50) {
      navbar.classList.add("bg-white/95", "shadow-md")
      navbar.classList.remove("bg-white/90")
    } else {
      navbar.classList.add("bg-white/90")
      navbar.classList.remove("bg-white/95", "shadow-md")
    }
  })
}

/**
 * Simulasi pengiriman email (ganti dengan implementasi nyata)
 */
async function simulateEmailSend(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulasi sukses/gagal random untuk demo
      if (Math.random() > 0.1) {
        console.log("Email sent:", data)
        resolve()
      } else {
        reject(new Error("Network error"))
      }
    }, 2000)
  })
}

/**
 * Simpan proyek ke localStorage
 */
function saveProjectsToStorage() {
  try {
    localStorage.setItem("portfolioProjects", JSON.stringify(projects))
  } catch (error) {
    console.error("Error saving projects to localStorage:", error)
  }
}

/**
 * Muat proyek dari localStorage
 */
function loadProjectsFromStorage() {
  try {
    const savedProjects = localStorage.getItem("portfolioProjects")
    if (savedProjects) {
      const parsedProjects = JSON.parse(savedProjects)
      // Gabungkan dengan proyek default, hindari duplikasi
      const existingIds = projects.map((p) => p.id)
      const newProjects = parsedProjects.filter((p) => !existingIds.includes(p.id))
      projects = [...projects, ...newProjects]
      renderProjects()
    }
  } catch (error) {
    console.error("Error loading projects from localStorage:", error)
  }
}

/**
 * Utility function untuk debounce
 */
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Export fungsi untuk debugging (opsional)
window.portfolioApp = {
  projects,
  renderProjects,
  showProjectDetail,
  showToast,
  saveProjectsToStorage,
  loadProjectsFromStorage,
}
