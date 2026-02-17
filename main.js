const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".about__container .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".about__container .section__description", {
  ...scrollRevealOption,
  delay: 500,
  interval: 500,
});
ScrollReveal().reveal(".about__container img", {
  ...scrollRevealOption,
  delay: 1500,
});

// ScrollReveal().reveal(".service__container .section__header", {
//   ...scrollRevealOption,
// });
// ScrollReveal().reveal(".service__container .section__description", {
//   ...scrollRevealOption,
//   delay: 500,
// });
// ScrollReveal().reveal(".service__card", {
//   duration: 1000,
//   delay: 1000,
//   interval: 500,
// });

// const swiper = new Swiper(".swiper", {
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });
const swiper = new Swiper(".swiper", {
  loop: true,
  speed: 800,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


ScrollReveal().reveal(".blog__content .section__header", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".blog__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".blog__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".blog__content .blog__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

// const instagram = document.querySelector(".instagram__flex");

// Array.from(instagram.children).forEach((item) => {
//   const duplicateNode = item.cloneNode(true);
//   duplicateNode.setAttribute("aria-hidden", true);
//   instagram.appendChild(duplicateNode);
// });

// Call button attention on page load
window.addEventListener("load", () => {
  const callBtn = document.querySelector(".floating-btn.call");

  if (!callBtn) return;

  // Delay so page settles
  setTimeout(() => {
    callBtn.classList.add("attention");
    callBtn.classList.add("show-tooltip");

    // Remove tooltip after 3 seconds
    setTimeout(() => {
      callBtn.classList.remove("show-tooltip");
    }, 3000);
  }, 1200);
});



ScrollReveal().reveal(".instagram__container .section__header", {
  distance: "60px",
  origin: "bottom",
  duration: 1200,
  opacity: 0,
  easing: "cubic-bezier(0.5, 0, 0, 1)",
});


/* ===============================
   Counter Animation
   =============================== */

const counters = document.querySelectorAll(".counter");

const runCounters = () => {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const duration = 1500;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    let current = 0;

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.floor(current) + "+";
        setTimeout(updateCounter, stepTime);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCounter();
  });
};

/* Run when section enters viewport */
const statsSection = document.querySelector(".stats__section");

const observer = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) {
    runCounters();
    observer.disconnect();
  }
}, { threshold: 0.4 });

observer.observe(statsSection);





const instaSwiper = new Swiper(".insta-swiper", {
  loop: true,
  speed: 800,

  slidesPerView: 1,
  spaceBetween: 0,

  centeredSlides: false,      // REMOVE centeredSlides
  loopAdditionalSlides: 1,    // stabilizes loop

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".insta-swiper .swiper-pagination",
    clickable: true,
  },

  allowTouchMove: true,
});

