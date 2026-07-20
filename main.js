import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Scroll Blur Animation for Texts
  const textElements = document.querySelectorAll('h1, h2, p, .accent-title, h3, h4, .btn');
  
  if (textElements.length > 0) {
    const blurObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          blurObserver.unobserve(entry.target); // Animate only once
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    textElements.forEach(el => {
      el.classList.add('blur-animate');
      blurObserver.observe(el);
    });
  }

  // Testimonial Carousel Scroll
  const wrapper = document.querySelector('.testimonials-wrapper');
  const scrollBtn = document.querySelector('.scroll-right-btn');
  
  if (wrapper && scrollBtn) {
    scrollBtn.addEventListener('click', () => {
      const cardWidth = wrapper.clientWidth / 3;
      wrapper.scrollBy({ left: cardWidth + 30, behavior: 'smooth' });
      
      // If we've reached the end, scroll back to start
      if (wrapper.scrollLeft + wrapper.clientWidth >= wrapper.scrollWidth - 10) {
        wrapper.scrollTo({ left: 0, behavior: 'smooth' });
      }
    });
  }

  // Active Navigation Highlight
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.main-nav a');

  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Trigger when section is in the middle of the viewport
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          mainNav.classList.remove('open');
        }
      });
    });
  }
});
