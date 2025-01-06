(function() {
  'use strict'
  
  // Button open brands 
  const btnOpenBrands = document.querySelector('.open-brands__btn');
  const openBtnChildren = btnOpenBrands.children;
  const listBrands = document.querySelectorAll('.brands__list-item');
  const hiddenBrands = document.querySelectorAll('.hidden-lg'); 
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  
  
  const saveElements = Array.from(listBrands).map(element => element.cloneNode(true));

  saveElements.forEach(element => {
    element.classList.add('swiper-slide');
    swiperWrapper.appendChild(element);
  });

  

  // slider
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,  
    slidesPerGroup: 1, 
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // slider end
  
  
  btnOpenBrands.addEventListener('click', function(evt) {
    evt.preventDefault();

    hiddenBrands.forEach(brand => {
      const computedStyle = window.getComputedStyle(brand);
     

      if (computedStyle.display === 'none') {
        brand.style.display = 'block';
        openBtnChildren[0].style.backgroundImage = "url('../img/arrow-unvisible.svg')"
        openBtnChildren[1].textContent = 'Скрыть';
        btnOpenBrands.style.width = '90px';
      } else if (computedStyle.display === 'block') {
        brand.style.display = 'none';
        openBtnChildren[0].style.backgroundImage = "url('../img/arrow-visible.svg')"
        openBtnChildren[1].textContent = 'Показать всё';
        btnOpenBrands.style.width = '134px';
      }
    });
  });

  

})();
