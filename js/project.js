let images = document.querySelectorAll(".container .slider img");
console.dir(images)
let currentImageIndex = 0;

images[currentImageIndex].classList.add('active');

function changeSlide() {
     images[currentImageIndex].classList.remove('active');

     currentImageIndex = (currentImageIndex + 1) % images.length;

     images[currentImageIndex].classList.add('active');
}

setInterval(changeSlide, 3000);

//Делаем активным hidden-part:
document.addEventListener('DOMContentLoaded', () => {
    const nameLamps = document.querySelectorAll('.name-lamp'); // Находим все элементы с классом name-lamp
    const hiddenParts = document.querySelectorAll('.hidden-part'); // Находим все элементы с классом hidden-part

    nameLamps.forEach((nameLamp, index) => {
        nameLamp.addEventListener('click', () => {
            const hiddenPart = hiddenParts[index]; // Находим соответствующий элемент hidden-part по индексу

            // Проверяем текущее состояние элемента hidden-part и переключаем его видимость
            if (hiddenPart.style.display === 'none' || hiddenPart.style.display === '') {
                hiddenPart.style.display = 'block'; // Показываем элемент
            } else {
                hiddenPart.style.display = 'none'; // Скрываем элемент
            }
        });
    });
});

//При наведении на крестик скрываем p
document.addEventListener('DOMContentLoaded', () => {
    const closeButtons = document.querySelectorAll('.menu-plus'); // Находим все элементы с классом menu-plus

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.closest('.content'); // Находим ближайший родительский элемент с классом content
            const paragraph = content.querySelector('p'); // Находим параграф внутри этого элемента
            
            if (paragraph) {
                // Переключаем видимость параграфа
                if (paragraph.style.display === 'none') {
                    paragraph.style.display = 'block'; // Показываем параграф
                } else {
                    paragraph.style.display = 'none'; // Скрываем параграф
                }
            }
        });
    });
});

// Дата из datetime
    document.addEventListener('DOMContentLoaded', () => {
        const deliveryDates = document.querySelectorAll('.deliveryDate');
        const days = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

        deliveryDates.forEach(dateElement => {
            const dateStr = dateElement.getAttribute('datetime');
            const date = new Date(dateStr);
            
            // Находим соответствующий элемент dayOfWeek
            const dayOfWeekElement = dateElement.nextElementSibling; // Получаем следующий элемент (span)
            dayOfWeekElement.innerText = days[date.getDay()];
        });
    });