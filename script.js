// Initialize AOS
AOS.init({ duration: 800, once: true });

// Slider functionality
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const slideContents = document.querySelectorAll(".slide-content");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slideContents.forEach((content) => {
    content.style.display = "none";
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].style.display = "block";
  setTimeout(() => {
    slideContents[index].style.display = "block";
  }, 1000);
  dots[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  const newIndex = (currentIndex + 1) % totalSlides;
  showSlide(newIndex);
  resetAutoSlide();
}

function prevSlide() {
  const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(newIndex);
  resetAutoSlide();
}

function goToSlide(index) {
  showSlide(index);
  resetAutoSlide();
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(nextSlide, 8000);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 8000);
}

// Swiper init
const swiper = new Swiper(".swiper-container", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Google Maps Embed (placeholder function)
function initMap() {
  const mapElement = document.getElementById("googleMapEmbed");
  if (mapElement) {
    mapElement.innerHTML =
      '<p style="text-align:center;padding-top:180px;">Google Map would be embedded here</p>';
  }
}

// Initialize on window load
window.onload = function () {
  showSlide(0);
  startAutoSlide();
  initMap();
};

const partnerSwiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    475: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  AOS.init({ duration: 800, once: true });

  // Email Icon
  document.getElementById("email-icon").innerHTML = "📧";

  // Mobile Menu
  window.toggleMenu = function () {
    const menu = document.getElementById("mobileMenu");
    const icon = document.getElementById("menu-icon");
    if (menu.style.display === "block") {
      menu.style.display = "none";
      icon.innerHTML = "☰";
    } else {
      menu.innerHTML = `
        <li class="nav-item-mobile"><a href="index.html" class="nav-links-mobile">Accueil</a></li>
        <li class="nav-item-mobile"><a href="services.html" class="nav-links-mobile">Services</a></li>
        <li class="nav-item-mobile"><a href="contact.html" class="nav-links-mobile">Contactez-Nous</a></li>
        <li class="nav-item-mobile"><a href="aboutus.html" class="nav-links-mobile">À Propos</a></li>
      `;
      menu.style.display = "block";
      icon.innerHTML = "✕";
    }
  };

  // Animate title after 2s
  setTimeout(() => {
    document.getElementById("animatedText").classList.add("visible");
  }, 2000);

  // Service Cards Data
  const services = [
    {
      img: "DISTANCE.jpg",
      title: "ACCÈS À DISTANCE",
      description:
        "Permet de surveiller et contrôler les équipements industriels à distance via des connexions sécurisées, idéal pour la maintenance préventive et la réduction des interventions sur site.",
      features: [
        "Accès sécurisé",
        "Surveillance en temps réel",
        "Intégration avec IoT",
      ],
    },
    {
      img: "air.jpg",
      title: "GESTION D'ÉNERGIE",
      description:
        "Solutions intelligentes pour optimiser la consommation énergétique, détecter les fuites et générer des rapports de performance énergétique.",
      features: [
        "Monitoring en temps réel",
        "Alertes de consommation",
        "Reporting automatisé",
      ],
    },
    {
      img: "services.jpeg",
      title: "RÉSEAUX ETHERNET",
      description:
        "Mise en place de réseaux industriels robustes et fiables, adaptés aux environnements exigeants, avec redondance et haute disponibilité.",
      features: [
        "Topologie redondante",
        "Switchs industriels",
        "Fibre optique",
      ],
    },
    {
      img: "radio.jpg",
      title: "TRANSMISSION RADIO",
      description:
        "Communication sans fil fiable sur de longues distances, parfaite pour les zones rurales ou difficiles d'accès, sans besoin de câblage.",
      features: ["Portée longue distance", "Faible latence", "Sécurité RF"],
    },
    {
      img: "passerelle.jpeg",
      title: "PASSERELLE DE COMMUNICATION",
      description:
        "Intégration transparente entre différents protocoles et systèmes (Modbus, OPC UA, MQTT), permettant l'interopérabilité dans l'industrie 4.0.",
      features: [
        "Conversion de protocoles",
        "Edge computing",
        "Sécurité réseau",
      ],
    },
    {
      img: "cabels.jpeg",
      title: "ACQUISITION DE DONNÉES",
      description:
        "Collecte, stockage et analyse des données en temps réel à partir de capteurs et automates, pour une prise de décision rapide et éclairée.",
      features: [
        "Historisation",
        "Visualisation en temps réel",
        "Alertes programmables",
      ],
    },
  ];

  // Render service cards
  const serviceWrapper = document.getElementById("servicesCards");
  services.forEach((s) => {
    const card = document.createElement("a");
    card.href = "#";
    card.className = "services-card";
    card.setAttribute("data-aos", "zoom-out");
    card.innerHTML = `
      <div class="services-image-container">
        <img src="${s.img}" alt="${s.title}" class="services-image" />
        <div class="services-gradient-overlayy"></div>
      </div>
      <div class="services-content">
        <h3 class="services-title">${s.title}</h3>
        <span class="services-arrow-icon">↗</span>
      </div>
    `;
    card.onclick = (e) => {
      e.preventDefault();
      showDetails(s);
    };
    serviceWrapper.appendChild(card);
  });

  window.closeDetails = function () {
    document.getElementById("detailsPanel").style.display = "none";
  };

  function showDetails(service) {
    document.getElementById("detailsPanel").style.display = "block";
    document.getElementById("detailTitle").textContent = service.title;
    document.getElementById("detailDescription").textContent =
      service.description;
    const ul = document.getElementById("featuresList");
    ul.innerHTML = "";
    service.features.forEach((f) => {
      const li = document.createElement("li");
      li.textContent = f;
      ul.appendChild(li);
    });
  }

  // Partners
  const partnerImgs = [
    "oncf.png",
    "vivo-new-logo.png",
    "logo_marsa.png",
    "lesieu.png",
    "vinci.png",
    "samit.png",
    "LOGO2.png",
    "logo--laprophan-w.png",
    "afrikia.png",
    "TMSA-Logo.png",
  ];

  const partnerGrid = document.getElementById("partnersGrid");

  partnerImgs.forEach((img) => {
    const div = document.createElement("div");
    div.className = "partne-card";
    div.innerHTML = `
      <div class="partne-logo-container">
        <img src="${img}" class="partne-logo" />
      </div>
      <p class="partne-name"></p>
    `;
    partnerGrid.appendChild(div);
  });
});

const menuToggleIcon = document.getElementById("menuToggleIcon");
const mobileMenu = document.getElementById("mobileMenu");

const navItems = [
  { id: 1, name: "Accueil", path: "index.html" },
  { id: 2, name: "Services", path: "services.html" },
  { id: 3, name: "Contactez-Nous", path: "contact.html" },
  { id: 4, name: "À Propos", path: "aboutus.html" },
];

let menuOpen = false;
menuToggleIcon.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.innerHTML = menuOpen
    ? navItems
        .map(
          (item) =>
            `<li class="nav-item-mobile">
                  <a href="${item.path}" class="nav-links-mobile">${item.name}</a>
                </li>`
        )
        .join("")
    : "";
  menuToggleIcon.className = menuOpen ? "fa fa-times" : "fa fa-bars";
});

// EmailJS Contact Form
const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs
    .sendForm("service_e7ngkkr", "template_o1ld45o", form, "X9hSFMOMwU2mPZbtz")
    .then(
      (result) => {
        successMsg.textContent = "Message envoyé avec succès !";
        successMsg.classList.add("show");
        setTimeout(() => {
          successMsg.textContent = "";
          successMsg.classList.remove("show");
        }, 6000);
      },
      (error) => {
        successMsg.textContent = "Une erreur s'est produite.";
        successMsg.classList.add("show");
      }
    );

  form.reset();
});

// Select elements with "partens" prefix to avoid conflicts
const partensSliderContainer = document.querySelector(".slider-container");
const partensSlides = Array.from(document.querySelectorAll(".slide-item"));
const partensPaginationDots = document.querySelectorAll(".dot");
const partensPrevBtn = document.querySelector(".prev-btn");
const partensNextBtn = document.querySelector(".next-btn");

// Variables
let partensCurrentIndex = 0;
const partensSlideWidth = partensSlides[0].offsetWidth + 20; // width + margin

// Function to update slider position
function partensUpdateSliderPosition() {
  partensSliderContainer.style.transform = `translateX(-${
    partensCurrentIndex * partensSlideWidth
  }px)`;
}

// Function to update pagination dots
function partensUpdatePagination() {
  partensPaginationDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === partensCurrentIndex);
  });
}

// Handle navigation buttons
partensPrevBtn.addEventListener("click", () => {
  if (partensCurrentIndex > 0) {
    partensCurrentIndex--;
    partensUpdateSliderPosition();
    partensUpdatePagination();
  }
});

partensNextBtn.addEventListener("click", () => {
  if (partensCurrentIndex < partensSlides.length - 3) {
    // Show 3 slides at a time
    partensCurrentIndex++;
    partensUpdateSliderPosition();
    partensUpdatePagination();
  }
});

// Handle pagination dots
partensPaginationDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    partensCurrentIndex = index;
    partensUpdateSliderPosition();
    partensUpdatePagination();
  });
});

// Initial setup
partensUpdateSliderPosition();
partensUpdatePagination();
