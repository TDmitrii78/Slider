function slider() {
    const items = document.querySelectorAll('.slider__item');
    const wrapper = document.querySelector('.slider__wrapper');
    const screen = document.querySelector('.slider__window');

    const back = document.querySelector('.slider__back');
    const forward = document.querySelector('.slider__forward');

    // Функция: gредупреждение: ширина окна и слайда должны быть одинаковы.
    function warn() {
        const width = getComputedStyle(items[0]).width;
        const widthWindow = getComputedStyle(screen).width;
        if (widthWindow !== width) {
            console.log('warning!!! ширина окна .slider__window и ширина элемента слайдера должна быть одинакова!!!');
        }
    }

    // Функция: определяет ширину слайда из css.
    function itemWidth(items) {
        const width = getComputedStyle(items[0]).width;
        return +width.slice(0, width.indexOf('px'));
    }

    // Функция: определяет отступ gap между слайдами из css.
    function gapSizePx(wrapper) {
        const gap = getComputedStyle(wrapper).gap;
        return +gap.slice(0, gap.indexOf('px'));
    }

    // Функция: определяет количество слайдов из html.
    function countSlides(items) {
        return items.length;
    }

    // Номер начального слайда.
    let currentSlide = 1;

    // Обработчик нажатия кнопки слайдера 'назад'.
    back.onclick = () => {
        if (currentSlide > 1) {
            --currentSlide;
            wrapper.style.transform = `translate(-${(currentSlide - 1) * (itemWidth(items) + gapSizePx(wrapper))}px)`;
            active();
        }
    }

    // Обработчик нажатия кнопки слайдера 'вперед'.
    forward.onclick = () => {
        if (currentSlide < countSlides(items)) {
            ++currentSlide;
            wrapper.style.transform = `translate(-${(currentSlide - 1) * (itemWidth(items) + gapSizePx(wrapper))}px)`;
            active();
        }
    }

    // Функция: активация стилей.
    function active() {
        items.forEach(el => {
            el.classList.remove('slider__item_active');
            el.classList.remove('slider__item_prevSibling');
            el.classList.remove('slider__item_nextSibling');
        })
        items[currentSlide - 1].classList.add('slider__item_active');
        const prevSibl = items[currentSlide - 1].previousElementSibling;
        const nextSibl = items[currentSlide - 1].nextElementSibling;
        (prevSibl) ? prevSibl.classList.add('slider__item_prevSibling') : false;
        (nextSibl) ? nextSibl.classList.add('slider__item_nextSibling') : false;
    }

    // Начальная активация.
    active();
    
    // Предупреждение.
    warn();
}

// Старт
slider();