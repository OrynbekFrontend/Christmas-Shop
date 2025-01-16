function slider() {
    const sliderInner = document.querySelector('.slider__inner');
    const slider = document.querySelector('.slider__list');
    const prevButton = document.querySelector('.slider__button-prev');
    const nextButton = document.querySelector('.slider__button-next');
    let totalWidthSlider = 2210;
    
    

    let offset = 0;
    function init() {
        let sliderVisisbleArea = sliderInner.offsetWidth;
        let transform;
        if (sliderVisisbleArea >= 769) {
            transform = Math.round((totalWidthSlider - sliderVisisbleArea) / 3);
            nextButton.addEventListener('click', () => {
                offset += transform;
                slider.style.transform = `translateX(-${offset}px)`;
                conditionsForNextArrowButton(771, 1440);
            });
            prevButton.addEventListener('click', () => {  
                offset -= transform;
                slider.style.transform = `translateX(-${offset}px)`;
                conditionsForPrevArrowButton(960, 0);
            });
        } else if (sliderVisisbleArea <= 768) {
            totalWidthSlider = 2025;
            transform = Math.round((totalWidthSlider - sliderVisisbleArea) / 6);
            nextButton.addEventListener('click', () => {
                offset += transform;
                slider.style.transform = `translateX(-${offset}px)`;
                conditionsForNextArrowButton(1260, 1644);
            });
            prevButton.addEventListener('click', () => {
                offset -= transform;
                slider.style.transform = `translateX(-${offset}px)`;

                conditionsForPrevArrowButton(1370, 0);
            })
        }
    };

    const conditionsForNextArrowButton = (size1, size2) => {
        if (offset == size1 || offset == size2) {
            nextButton.classList.remove('slider__button-arrow-active');
            nextButton.setAttribute('disabled', 'true');
        } else {
            prevButton.classList.add('slider__button-arrow-active');
            nextButton.removeAttribute('disabled');
        }
    };

    const conditionsForPrevArrowButton = (size1, size2) => {
        if (offset <= size1) {
            nextButton.classList.add('slider__button-arrow-active');
            nextButton.removeAttribute('disabled');
        };
        if (offset == size2) {
            prevButton.classList.remove('slider__button-arrow-active');
            prevButton.setAttribute('disabled', 'true');
        }
    }

    window.addEventListener('resize', init);
    init();
}
export default slider;