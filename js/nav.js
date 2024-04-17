$("#navIcon").on("click", function(){
    $(".mobilwNav").slideToggle();
    $("#navIcon").toggleClass("fa-bars");
    $("#navIcon").toggleClass("fa-xmark");
})