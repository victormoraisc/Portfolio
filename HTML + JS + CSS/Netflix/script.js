
/**
 * Turn on audio for the video element with class 'trailer video'
 */
function turnOnAudio() {
    // Get the video element
    var video = document.querySelector('.trailer video');
    // Set the 'muted' property to false to turn on the audio
    video.muted = false;
}
document.addEventListener('click', turnOnAudio);

/**
 * Toggles the background color of the header based on the scroll position.
 */
function toggleBackground() {
    var header = document.querySelector('.header');
    var body = document.body;
    var html = document.documentElement;

    function checkScroll() {
        alert("scrolling");
        if (body.scrollTop > 0 || html.scrollTop > 0) {
            header.classList.add('black');
        } else {
            header.classList.remove('black');
        }
    }

    window.addEventListener('scroll', checkScroll);
}

toggleBackground();


/**
 * Initialize the sliders.
 */
function initSliders() {
    /**
     * Initialize a slider.
     * 
     * @param {Element} sliderContainer - The container element of the slider.
     * @param {number} currentIndex - The current index of the slider.
     * @param {number} zIndex - The z-index of the slider.
     */
    function initSlider(sliderContainer, currentIndex, zIndex) {
        // Get the slider content and slides.
        var sliderContent = sliderContainer.querySelector('.slider-content');
        var slides = sliderContent.querySelectorAll('.slide');
        // Get the previous and next buttons.
        var prevBtn = sliderContainer.querySelector('.prev-btn');
        var nextBtn = sliderContainer.querySelector('.next-btn');

        /**
         * Go to the specified slide index.
         * 
         * @param {number} index - The index of the slide to go to.
         */
        function goToSlide(index) {
            // If the index is greater than or equal to the second last slide, reset to the first slide.
            if (index >= (slides.length - 3)) {
                index = 0;
            }
            currentIndex = index;
            // If the current index is less than 0, set it to 0.
            if (currentIndex < 0) {
                currentIndex = 0;
            }
            var translateValue = -currentIndex * 351 + "px";
            // Set the translation and z-index of the slider content.
            sliderContent.style.transform = 'translateX(' + translateValue + ')';
            sliderContent.style.zIndex = zIndex;
            // Toggle the visibility of the previous button based on the index.
            prevBtn.classList.toggle("hidden", index <= 0);
        }

        // Add click event listeners to the previous and next buttons.
        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                goToSlide(currentIndex - 1);
            }
        });

        nextBtn.addEventListener('click', function() {
            goToSlide(currentIndex + 1);
        });

    }

    // Initialize slider 1.
    var sliderContainer1 = document.querySelector('.slider-container1');
    initSlider(sliderContainer1, 0, 4);

    // Initialize slider 2.
    var sliderContainer2 = document.querySelector('.slider-container2');
    initSlider(sliderContainer2, 0, 3);
}

document.addEventListener('DOMContentLoaded', initSliders);
