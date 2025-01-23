function slider() {
    const slider = document.querySelector('.slider__list');
    const prevButton = document.querySelector('.slider__button-prev');
    const nextButton = document.querySelector('.slider__button-next');
    function calculateMoveDistance() {
        const screenWidth = window.innerWidth;
        const totalWidth = slider.scrollWidth;
        const visibleWidth = slider.offsetWidth;
        const clickToMove = screenWidth <= 768 && screenWidth >= 380 ? 6 : 3;
        return (totalWidth - visibleWidth) / clickToMove;
    }
    
    

    let offset = 0;
    function init() {
        const screenWidth = window.innerWidth;

        if (!nextButton || !prevButton || !slider) {
            return;
        }

        if (screenWidth >= 769) {
            nextButton.addEventListener('click', () => {
                offset += Math.round(calculateMoveDistance());
                slider.style.transform = `translateX(-${offset}px)`;
                StopMoveForThreeClicksNext();
                // StopMoveForSixClicks();
            });
            prevButton.addEventListener('click', () => {
                offset -= Math.round(calculateMoveDistance());
                slider.style.transform = `translateX(-${offset}px)`;
                StopMoveForThreeClicksPrev();
            })
        } else {
            nextButton.addEventListener('click', () => {
                offset += Math.round(calculateMoveDistance());
                slider.style.transform = `translateX(-${offset}px)`;
                StopMoveForSixClicksNext();
            });
            prevButton.addEventListener('click', () => {
                offset -= Math.round(calculateMoveDistance());
                slider.style.transform = `translateX(-${offset}px)`;
                StopMoveForSixClicksPrev();
            })
        }
    };

    let current = 0;
    function StopMoveForThreeClicksNext() {
        current++;
        console.log(current);
        if (current >= 3) {
            nextButton.classList.remove('slider__button-arrow-active');       
            nextButton.setAttribute('disabled', 'true');
        } else if (current > 0) {
            prevButton.classList.add('slider__button-arrow-active');
            prevButton.removeAttribute('disabled');
        }
    }
    function StopMoveForThreeClicksPrev() {
        current--;
        console.log(current);
        if (current == 0) {
            prevButton.classList.remove('slider__button-arrow-active');
            prevButton.setAttribute('disabled', 'true');
        } else if (current > 0) {
            nextButton.classList.add('slider__button-arrow-active');       
            nextButton.removeAttribute('disabled');
        }  
    };

    function StopMoveForSixClicksNext() {
        current++;
        console.log(current);
        if (current >= 6) {
            nextButton.classList.remove('slider__button-arrow-active');       
            nextButton.setAttribute('disabled', 'true');
        } else if (current > 0) {
            prevButton.classList.add('slider__button-arrow-active');
            prevButton.removeAttribute('disabled');
        }
    };

    function StopMoveForSixClicksPrev() {
        current--;
        console.log(current);
        if (current == 0) {
            prevButton.classList.remove('slider__button-arrow-active');
            prevButton.setAttribute('disabled', 'true');
        } else if (current > 0) {
            nextButton.classList.add('slider__button-arrow-active');       
            nextButton.removeAttribute('disabled');
        }  
    };
    
    window.addEventListener('resize', init);
    init();
}
export default slider;