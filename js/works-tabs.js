let $activeWorkTab = $(".work-collection-tab-active");

$(".work-collection-tab").on("click", event => {
    const $target = event.target;
    highlightTab($target);
});

function highlightTab(tabX) {
    if ($activeWorkTab) {
        $($activeWorkTab).toggleClass("work-collection-tab-active");
        const $className = $($activeWorkTab).attr("data-name");
        $($(".work-collection-content-block:not('.unloaded'):not(."+ $className +")")).removeClass("unfiltered");
    }
    $activeWorkTab = tabX;
    $($activeWorkTab).toggleClass("work-collection-tab-active");
    const $className = $($activeWorkTab).attr("data-name");
    $($(".work-collection-content-block:not('.unloaded'):not(."+ $className +")")).addClass("unfiltered");
}

let counterUpperBtn = 0;
$(".work-collection-btn.load-btn").on("click", () => {
    $(".work-collection-loading-block .preloader").addClass("loading");
    setTimeout(() => $(".work-collection-loading-block .preloader.loading").removeClass("loading"), 2000);
    setTimeout(() => $(".work-collection-content-block.unloaded").each(function(number) {
        if (number === 12) {
            return false;
        }
        $(this).removeClass("unloaded");
        $(this).addClass("all");
    }), 2000);
    counterUpperBtn++;
    if (counterUpperBtn === 2)  {
        setTimeout(() => $(".work-collection-loading-block").addClass("loaded"), 2000);
    }
});