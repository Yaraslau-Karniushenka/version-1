$(function(){
$('.slider__inner, .news__slider__inner').slick({

nextArrow: '<button type="button" class= "slick-btn  slick-next"></button>',
prevArrow: '<button type="button" class= "slick-btn  slick-prev"></button>',
infinite: false,
})
$('.header__btn__menu').on('click',function(){
    $('.menu ul').slideToggle();
})

});