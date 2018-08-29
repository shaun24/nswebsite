(function ($) {
    "use strict";

    jQuery(document).ready(function () {
        /*---------------------------------------------------
            Portfolio Filter
        ----------------------------------------------------*/

        var Container = $('.container');

        Container.imagesLoaded(function () {

            var portfolio = $('.portfolio-menu');
            portfolio.on('click', 'button', function () {
                $(this).addClass('active').siblings().removeClass('active');
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            var $grid = $('.portfolio-grid').isotope({
                itemSelector: '.grid-item'
            });

            $(document).on('click', '.portfolio-menu ul li', function () {

                var filterValue = $(this).attr('data-filter');

                portfolio.isotope({
                    filter: filterValue
                });

            });

        });




        /*---------------------------------------------------
            Main Slider
        ----------------------------------------------------*/
        $('.silder').owlCarousel({
            loop: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            nav: true,
            dots:false,
            autoplay: true,
            autoplayTimeout: 5000,
            animateOut: 'slideOutDown',
            animateIn: 'fadeIn',
            smartSpeed: 450,
            responsive: {
                0: {
                    items: 1,
                    nav:false
                },
                768: {
                    items: 1,
                    nav:false,
                },
                960: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });

        
        /*---------------------------------------------------
            Testimonial One Carousel
        ----------------------------------------------------*/
        $('#home-testimonial').owlCarousel({
            loop: true,
            margin: 20,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                650: {
                    items: 2
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }
        });


        /*---------------------------------------------------
            Partner Carousel
        ----------------------------------------------------*/
        $('.partner').owlCarousel({
            loop:true,
            autoplay:true,
            autoplayTimeout:5000,
            margin:30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 3
                },
                960: {
                    items: 4
                },
                1200: {
                    items: 6
                },
                1920: {
                    items: 5
                }
            }
        });
        /*---------------------------------------------------
            Team member Carousel
        ----------------------------------------------------*/
        $('#team-carousel').owlCarousel({
            loop:true,
            autoplay:true,
            autoplayTimeout:5000,
            margin:30,
            responsive: {
                0: {
                    items: 1
                },
                599: {
                    items: 2
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });
       
        /*---------------------------------------------------
            Counter
        ----------------------------------------------------*/
        $('.counter-item .count-title').counterUp({
            delay: 10, // the delay time in ms
            time: 1000 // the speed time in ms
        });



        /*---------------------------------------------------
                Magnific PopUp
        ----------------------------------------------------*/
        $('.overlay-cont a.popup-img').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        /*---------------------------------------------------
            Click To Top
        ----------------------------------------------------*/
        $(document).on('click', '.totop a[href=#top]', function () {

            $('body,html').animate({

                scrollTop: 0

            }, 600);

            return false;

        });


    });

    jQuery(window).on('scroll', function () {

        /*---------------------------------------------------
            Click To Top
        ----------------------------------------------------*/
        if ($(this).scrollTop() > 250) {
            $('.footer .totop').fadeIn();
        } else {
            $('.footer .totop').fadeOut();
        }

    })



    jQuery(window).load(function () {

        /*---------------------------------------------------
            Site Preloader
        ----------------------------------------------------*/
        $('.site-preloader').fadeOut(500);


    });


}(jQuery));
