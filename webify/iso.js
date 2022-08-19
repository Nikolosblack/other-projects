$('.isotop__gallery').isotope({
    itemSelector: '.isotop__gallery__item',
});

$("#isotop__filter li").click(function(){
    var selector = $(this).data("filter");

    $(".isotop__gallery").isotope({
      filter: selector,
    });
});

(function() {
    const filterLink = document.querySelectorAll(".filter__item")
        filterLink.forEach(link => {
            link.addEventListener("click", () => {
                document.querySelector(".filter__item-active").classList.remove("filter__item-active");
                link.classList.add("filter__item-active");
        });
    });

})();