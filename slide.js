function setupSlider(section) {
    const slides = section.querySelector('.slides');
    const dots = section.querySelectorAll('.dot');
    const slideCount = dots.length;
    let currentIndex = 0;

    function showSlide(index) {
      currentIndex = (index + slideCount) % slideCount;
      const offset = -currentIndex * 100;
      slides.style.transform = `translateX(${offset}%)`;
      updateDots();
    }

    function updateDots() {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }

    dots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        showSlide(parseInt(e.target.dataset.index));
      });
    });

    let startX = 0;

    slides.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    slides.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX > endX + 50) {
        showSlide(currentIndex + 1);
      } else if (startX < endX - 50) {
        showSlide(currentIndex - 1);
      }
    });

    showSlide(currentIndex);
  }

  document.querySelectorAll('.slider-section').forEach(setupSlider);
