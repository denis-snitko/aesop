document.addEventListener('DOMContentLoaded', () => {

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

    // Animation Label
    const inputMail = document.querySelectorAll('.login-modal__email');

    inputMail.forEach(element => {
        element.addEventListener('focus', (event) => {
            event.target.previousElementSibling.classList.add('login-modal__label--top');
        })
    })

    //** Login-modal */

    const
        body = document.querySelector('body'), //для запрета скрола
        modal = document.querySelector('.login-modal'), //модалка вместе с фоном
        showModalBtn = document.querySelector('.login-btn'), // элемент который открывает модалку
        closeModalBtn = document.querySelector('.login-modal__close'); // элемент закрытия модалки
    hiddenClass = 'login-modal--hidden'; //класс закрытия

    function toggleModal() {
        modal.classList.toggle(hiddenClass);
        if (modal.classList.contains(hiddenClass)) {
            body.setAttribute('style', 'overflow: auto');
        } else {
            body.setAttribute('style', 'overflow: hidden');
        }
    }

    showModalBtn.addEventListener('click', toggleModal);
    closeModalBtn.addEventListener('click', toggleModal);

    //** Закрытие при клике ВНЕ модалки */
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            toggleModal();
        }
    })
});

AOS.init();

/** Cart */
jQuery(function ($) {
    const
        $cartBtn = $('.cart-btn'),
        $cart = $('.s-cart'),
        $sCartClose = $('.s-cart__close');

    $cartBtn.on('click', () => {
        $cart.show(270);
    });

    $sCartClose.on('click', () => {
        $cart.hide(270);
    })
});

