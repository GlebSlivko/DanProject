const $allSlides = $(".opinion-slide");
let $activeSlide = $(".active-slide");

$allSlides.on("click", event => {
    const $target = event.target.closest("li");
    activeOpinion($target);
});

function activeOpinion(tabX) {
    if ($activeSlide === tabX) {
        return false
    } else {
        $($activeSlide).removeClass("active-slide");
        let $id = $($activeSlide).attr("data-slide");
        $(`div.${$id}`).hide();
        $activeSlide = tabX;
        $($activeSlide).addClass("active-slide");
        let $newId = $($activeSlide).attr("data-slide");
        $(`div.${$newId}`).fadeToggle(500);
    }
};

let slideIndex;
$("#previous").on("click", () => {
    slideIndex = $allSlides.index($activeSlide) ;
    slideToggle(slideIndex - 1);
    activeOpinion( $allSlides[slideIndex]);
});

$("#next").on("click", () => {
    slideIndex = $allSlides.index($activeSlide) ;
    slideToggle(slideIndex + 1);
    activeOpinion($allSlides[slideIndex]);
});

function slideToggle(index) {
    $($allSlides[slideIndex]).removeClass("active-slide");
    slideIndex = (index + $allSlides.length) % $allSlides.length;
    $($allSlides[slideIndex]).addClass("active-slide");
}