let baseSlider = document.querySelectorAll('.swiper-container');
baseSlider.forEach((el) => {
    let swiperProduction = new Swiper(el, {
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true,

        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
                navigation: {
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                },
            },
        }
    });
})
