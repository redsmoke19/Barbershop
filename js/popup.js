var popupLink = document.querySelector('.login-link');
var popup = document.querySelector('.modal-login');
var popupClose = document.querySelector('.modal-close');
var form = popup.querySelector('form');
var login = popup.querySelector('[name=login]');
var password = popup.querySelector('[name=password]');

var storage = '';
var isStorageSupport = true;

// Проверка работы локального хранилища

try {
    storage = localStorage.getItem('login');
} catch (err) {
    isStorageSupport = false;
}

// Создаем события клика на ссылку "Войти" и добавляем при клике класс. Добавдяем проверку наличия локального хранилища и если оно есть то при открытии ставим фокус на поле "пароль", если его нет то при открытии ставим фокус на поле "логин"

popupLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('js-modal-show');
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

// Создаем событие клика на крестик и убираем класс класс эррор тоже убираем что бы при ошибке ввода этот класс не остался при закрытии модального окна

popupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('js-modal-show');
    popup.classList.remove('js-modal-error');
});

// Проверяем форму, если при нажатии на кнопку "отправить" мы забыли ввести какое то поле, то сначала удаляется класс еррор (для надежности), а потом он же добавляется и начинает трястись. Если мы все поля заполнили то если прошла проверка браузера на локальное хранилище (код выше с try) то мы записываем в локальное хранилище логин.

form.addEventListener('submit', function (evt) {
    if (!login.value || !password.value) {
        evt.preventDefault();
        popup.classList.remove('js-modal-error');
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add('js-modal-error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem('login', login.value);
        }
    }
});

// Проверка на нажатие кнопки Esc. Если проверка проходит что нажата действительно Esc то потом идет следующая проверка на содержание класса модал шоу, если такой класс есть то он него убирает

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains('js-modal-show')) {
            popup.classList.remove('js-modal-show');
            popup.classList.remove('js-modal-error');
        }
    }
});

