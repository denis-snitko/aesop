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

    let ourstorySwiper = new Swiper('.p-ourstory__swiper-container', {
        slidesPerView: 1,

        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        },

        scrollbar: {
          el: '.swiper-scrollbar',
          hide: false,
        }
      });

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


jQuery(function ($) {
    const
        $cartBtn = $('.cart-btn'),
        $cart = $('.s-cart'),
        $sCartClose = $('.s-cart__close'),
        $sTopHeader = $('.s-top-header'),
        $sDelivery = $('.s-delivery'),
        $sDeliveryClose = $('.s-delivery__close'),
        $mainMenuLink = $('.main-menu__link'),
        $burgerMenu = $('.burger-menu'),
        $burgerMenuMainItem_1 = $('.burger-menu__main-item--1'),
        $burgerMenuMainItem_2 = $('.burger-menu__main-item--2'),
        $burgerMenuMainItem_3 = $('.burger-menu__main-item--3'),
        $burgerMenuItem = $('.burger-menu__item'),
        $burgerMenuClose = $('.burger-menu__close');

    $cartBtn.on('click', () => {
        $cart.show(270);
        $sTopHeader.hide();
    });

    $sCartClose.on('click', () => {
        $cart.hide(270);
        $sTopHeader.show();
    })
    
    $sTopHeader.on('click', () => {
        $sDelivery.show(270);
        $('body').attr('style', 'overflow: hidden');
    })
    
    $sDeliveryClose.on('click', () => {
        $sDelivery.hide(270);
        $('body').attr('style', 'overflow: auto');
    })

    $mainMenuLink.on('click', () => {
        $burgerMenu.show(320);
        $burgerMenuMainItem_1.show(320);
        $('body').attr('style', 'overflow: hidden');
    })
    
    $burgerMenuItem.on('click', () => {
        $burgerMenuMainItem_2.show(320);
        $burgerMenuMainItem_2.attr('style', 'display: flex');
        // $('body').attr('style', 'overflow: hidden');
    })
    
    $('.burger-menu__main-item--2 .burger-menu__item').on('click', () => {
        $burgerMenuMainItem_3.show(320);
        // $burgerMenuMainItem_2.attr('style', 'display: flex');
        // $('body').attr('style', 'overflow: hidden');
    })

    $burgerMenuClose.on('click', () => {
        $burgerMenu.hide(320);
        $burgerMenuMainItem_1.hide();
        $burgerMenuMainItem_2.hide();
        $burgerMenuMainItem_3.hide();
        $('body').attr('style', 'overflow: auto');
    })

    //** Scroll */
    $('.p-ourstory__btn').on( 'click', function(){ 
        let $dest = $('.p-ourstory-history'); // куда скролим
        if($dest !== undefined && $dest !== '') { // проверяем существование
            $('html').animate({ 
                scrollTop: $($dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
            );
        }
        return false;
    });
});

