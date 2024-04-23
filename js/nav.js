$("#navIcon").on("click", function(){
    $(".mobileNav").slideToggle();
    $("#navIcon").toggleClass("fa-bars");
    $("#navIcon").toggleClass("fa-xmark");
})
