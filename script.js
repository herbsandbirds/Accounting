function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  window.addEventListener('scroll', function() {
    const scrollTopButton = document.getElementById('scrollToTop');
    if (window.pageYOffset > 200) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });
  