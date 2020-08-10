$(document).ready(function(){
    var link = $('.navbar-link')
    var menu = $('.navbar-toggle')
    var nav_link = $('#nav_link')
    var bgPhoto = $('#bgPhoto')
    var logo = $('#logo')

    link.click(function(){
        link.toggleClass('navbar-link__active');
        menu.toggleClass('navbar-toggle__active');
    });

    nav_link.click(function(){
        bgPhoto.css("display", "none");
        return false;
    });

    logo.click(function(){
        bgPhoto.css("display", "flex");
    });
});