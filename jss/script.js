let menuBtn = document.querySelector('#menu-btn'); 
let navbar = document.querySelector('.header .flex .navbar');

// When the menu button is clicked
menuBtn.onclick = () => {
    // Toggle the icon change (hamburger ↔ close)
    menuBtn.classList.toggle('fa-times');

    // Toggle showing the navbar
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".courses-slider", {
    spaceBetween:20,
    grabCursor:true,
    loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
      },
        breakpoints: {
        540: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
    });

    var swiper = new Swiper(".teachers-slider", {
    spaceBetween:20,
    grabCursor:true,
    loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable:true,
      },
        breakpoints: {
        540: {
          slidesPerView: 1,
          
        },
        768: {
          slidesPerView: 2,
          
        },
        1024: {
          slidesPerView: 3,
          
        },
      },
    });
    var swiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });