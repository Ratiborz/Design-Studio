const parentArrow = document.querySelector('.brick__directions');  // Parent arrow.
const parentLinks = document.querySelector('.brick__tag--flex');  // Parent links
const textInfo = document.querySelector('.brick__text-options'); // Parent for information pictures

const leftArrow = document.querySelector('.brick__directions--lef');
const rightArrow = document.querySelector('.brick__directions--right');
const circles = document.querySelectorAll('.brick__directions--ellipse');
const links = document.querySelectorAll('.brick__tag--flex--p');
const photos = document.querySelector('.brick__img'); // Photos

const nameTown = textInfo.querySelector('.brick__text-options-1 .brick__text--discrip');
const meters = textInfo.querySelector('.brick__text-options-2 .brick__text--discrip');
const time = textInfo.querySelector('.brick__text-options-3 .brick__text--discrip');

let activeSlideIndex = 0; // Счётчик слайдов.

leftArrow.addEventListener('click', () => { 
    clearActiveEllipse();
    changeEllipse('left');
});

rightArrow.addEventListener('click', () => {
    clearActiveEllipse();
    changeEllipse('right');
});

// Слушатель у родителя кругов. Смена active при рандомном нажатии на круги.  
parentArrow.addEventListener('click', function(event)  {  
    if (event.target.className === 'brick__directions--ellipse') { 
        clearActiveEllipse();
        event.target.classList.add('active');
        correctIndex('ellipse');
        links[activeSlideIndex].classList.add('active__link'); 
    }
});

// Слушатель у родителя ссылок. Смена active__link при рандомном нажатии на ссылки.
parentLinks.addEventListener('click', function(event)  {  
    if (event.target.className === 'brick__tag--flex--p') { 
        clearActiveEllipse();
        event.target.classList.add('active__link');
        correctIndex('link');
        circles[activeSlideIndex].classList.add('active');
    }
});

function changeEllipse(el) {  // Смена active у кругов и ссылок.
    if (el === 'right') {
        activeSlideIndex++;
        if (activeSlideIndex > 2) {
            activeSlideIndex = 0;
        }

        for(let i = 0; i < circles.length; i++) {
            circles[activeSlideIndex].classList.add('active'); // Смена круга вправо
            links[activeSlideIndex].classList.add('active__link'); // Смена ссылки вправо
        }
    }else if (el === 'left') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = 2;
        }

        for(let i = 0; i < circles.length; i++) {
            circles[activeSlideIndex].classList.add('active'); // Смена круга влево
            links[activeSlideIndex].classList.add('active__link'); // Смена ссылки влево 
        }
    }
};

function correctIndex(el) { 
    if (el === 'link') { // При нажатии на ссылку корректирует индекс в activeSlideIndex
        activeSlideIndex = 
    [...document.querySelectorAll(".brick__tag--flex>.brick__tag--flex--p")]
    .findIndex(div => div.classList.contains("active__link"));
    
    }else if (el === 'ellipse') { // При нажатии на круг корректирует индекс в activeSlideIndex
        activeSlideIndex = 
    [...document.querySelectorAll(".brick__directions>.brick__directions--ellipse")]
    .findIndex(div => div.classList.contains("active"));
    }
};

function changePhoto() {      // Информация и Картинки меняются в зависимости от значения activeSlideIndex
    if (activeSlideIndex === 0) {
        photos.src = 'images/Sec_1-1.1.png';
        textInfo.querySelector('.brick__text-options-1').style.marginRight = '100px';
        nameTown.innerHTML = 'Rostov-on-Don <br> LCD admiral';
        meters.textContent = '81 m2';
        time.textContent = '3.5 months';
    }else if (activeSlideIndex === 1) {
        photos.src = 'images/Sec_1-1.2.png';
        textInfo.querySelector('.brick__text-options-1').style.marginRight = '144px';
        nameTown.innerHTML = 'Sochi <br> Thieves';
        meters.textContent = '105 m2';
        time.textContent = '4 months';  
    }else if (activeSlideIndex === 2) {
        photos.src = 'images/Sec_1-1.3.png';
        textInfo.querySelector('.brick__text-options-1').style.marginRight = '100px';
        nameTown.innerHTML = 'Rostov-on-Don <br> Patriotic';
        meters.textContent = '93 m2';
        time.textContent = '3 months';
    }
};

setInterval(changePhoto, 400); // Проверка activeSlideIndex на изменения 

function clearActiveEllipse() { // Удаление активных классов 
    circles.forEach((slide) => {
        slide.classList.remove('active')
    })
    links.forEach((slide) => {
        slide.classList.remove('active__link')
    })
};

