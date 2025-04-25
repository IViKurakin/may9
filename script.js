// Кнопка "Наверх"
    // Забираем кнопку в обработку по классу
    let button_up = document.querySelector('.up')
    // Добавляем обработчик события для плавной прокрутки наверх
    button_up.addEventListener("click", function () {
        window.scrollTo(
            {
                top: 0,
                behavior: "smooth" 
            });
        });

// Ночная тема
    // Забираем кнопку в обработку
    let button_theme = document.querySelector('.theme');
    // Забираем в обработку <body> и <header>
    let body = document.querySelector('body');
    let header = document.querySelector('header');
    // Назначаем toggle-событие для кнопки
    button_theme.addEventListener('click', function() {
        body.classList.toggle('night');
        header.classList.toggle('night');
    })