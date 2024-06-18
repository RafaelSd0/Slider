var x = 0;

function goToImg(x){
    scrollPosition = scrollAmount2 * x;
    if (scrollPosition >= bgSlide.scrollWidth) {
        scrollPosition = 0;
    }
    bgSlide.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });

}


const scrollContainer = document.getElementById('scrollContainer');
const scrollLeft = document.getElementById('scrollLeft');
const scrollRight = document.getElementById('scrollRight');

const scrollAmount = 790;

scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

scrollRight.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

const bgSlide = document.getElementById('bg-slide');
const scrollAmount2 = bgSlide.clientWidth;
let scrollPosition = 0;

setInterval(() => {
    scrollPosition += scrollAmount2;
    if (scrollPosition >= bgSlide.scrollWidth) {
        scrollPosition = 0;
    }
    bgSlide.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });
}, 9000);