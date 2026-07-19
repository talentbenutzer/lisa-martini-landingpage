import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Testimonial Carousel Scroll
  const wrapper = document.querySelector('.testimonials-wrapper');
  
  if (wrapper) {
    let scrollInterval;
    
    wrapper.addEventListener('mouseenter', () => {
      scrollInterval = setInterval(() => {
        wrapper.scrollBy({ left: 1.5, behavior: 'auto' });
      }, 16);
    });
    
    wrapper.addEventListener('mouseleave', () => {
      clearInterval(scrollInterval);
      wrapper.scrollTo({ left: 0, behavior: 'smooth' });
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
});
