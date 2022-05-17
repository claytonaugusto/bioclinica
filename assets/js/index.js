$(document).ready(function(){
    $('.icon').click(function(){
        $('.search').toggleClass('active')
    })
})
//menu
 $(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active')
    })
    $('ul li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
})
