let images = document.querySelectorAll(".container .slider img");
console.dir(images)
let currentImageIndex = 0;

function changeSlide() {
    if(currentImageIndex < 3) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0;
    }

    for(let i = 0; i < images.length; i++) {
        if(i == currentImageIndex) {
            images[i].classList.add('active');
        } else {
            images[i].classList.remove('active');
        }
    }
};

setInterval(changeSlide, 2000);

// Дата из datetime
    const dateStr = document.getElementById('deliveryDate').getAttribute('datetime');
    const date = new Date(dateStr);
        
// Массив дней недели на русском
    const days = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        
// Получение дня недели
    document.getElementById('dayOfWeek').innerText = days[date.getDay()];
    