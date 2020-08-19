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
   
    // Animation Label (checkout)
    const checkoutInput = document.querySelectorAll('.s-checkout-form__input');

    checkoutInput.forEach(element => {
        element.addEventListener('focus', (event) => {
            event.target.previousElementSibling.classList.add('s-checkout-form__label--top');
        })
    })
    
    const checkoutSelect = document.querySelectorAll('.s-checkout-form__select');

    checkoutSelect.forEach(element => {
        element.addEventListener('focus', (event) => {
            event.target.previousElementSibling.classList.add('s-checkout-form__label--top');
        })
    })


jQuery(function ($) {
    const
        $cartBtn = $('.cart-btn'),
        $cart = $('.s-cart'),
        $sCartClose = $('.s-cart__close'),
        $sTopHeader = $('.s-top-header'),
        $sDelivery = $('.s-delivery'),
        $sDeliveryClose = $('.s-delivery__close'),
        $mainMenuLink = $('.main-menu__item'),
        $burgerMenu = $('.burger-menu'),
        $burgerMenuMainItem_1 = $('.burger-menu__main-item--1'),
        $burgerMenuMainItem_2 = $('.burger-menu__main-item--2'),
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
        $burgerMenuMainItem_1.attr('style', 'display: flex');
        $burgerMenu.show(320);
        $burgerMenuMainItem_1.show(320);
        $('body').attr('style', 'overflow: hidden');
    })

    $burgerMenuItem.on('click', () => {
        $burgerMenuMainItem_2.show(320);
        $burgerMenuMainItem_2.attr('style', 'display: flex');
        // $('body').attr('style', 'overflow: hidden');
    })

    $burgerMenuClose.on('click', () => {
        $burgerMenu.hide(320);
        $burgerMenuMainItem_1.hide();
        $burgerMenuMainItem_2.hide();
        $('body').attr('style', 'overflow: auto');
    })

    //** Scroll */
    $('.p-ourstory__btn').on('click', function () {
        let $dest = $('.p-ourstory-history'); // куда скролим
        if ($dest !== undefined && $dest !== '') { // проверяем существование
            $('html').animate({
                scrollTop: $($dest).offset().top // прокручиваем страницу к требуемому элементу
            }, 500 // скорость прокрутки
            );
        }
        return false;
    });


    //** Accordeon  */
    const $accordeonContTitle = $('.accordeon__content-title');

    $accordeonContTitle.on('click', function () {
        $(this).next().fadeToggle();
        $(this).children().toggle();
    })
});