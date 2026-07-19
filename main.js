import './style.css'

document.addEventListener('DOMContentLoaded', () => {
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
});
