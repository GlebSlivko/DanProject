let $grid = $(".gallery-content").masonry({
    columnWidth: ".gallery-content-sizer",
    gutter: ".gallery-gutter-sizer",
    itemSelector: ".gallery-content-item",
    percentPosition: true,
});

let counterLowerBtn = 0;
$(".gallery-btn.load-btn").on("click", () => {
    $(".gallery-loading-block .preloader").addClass("loading");
    setTimeout(() => $(".gallery-loading-block .preloader.loading").removeClass("loading"), 2000);
    setTimeout(() => $(".gallery-content-item.unloaded").each(function(number) {
        if (number === 3) {
            return false;
        }
        $(this).removeClass("unloaded");
    }), 2000);

    setTimeout(() => $(".gallery-content").masonry({
        columnWidth: ".gallery-content-sizer",
        gutter: ".gallery-gutter-sizer",
        itemSelector: ".gallery-content-item",
        percentPosition: true,
        transitionDuration: '1s',
        stagger: 30
    }), 2000);

    counterLowerBtn++;
    if (counterLowerBtn === 2)  {
        setTimeout(() => $(".gallery-loading-block").addClass("loaded"), 2000);
    }
});


$grid.on( 'click', '.gallery-content-item', function() {
    $( this ).toggleClass('gallery-content-item-gigante');
    $grid.masonry();
});