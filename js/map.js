var mapLink = document.querySelector('.way');
var mapPopup = document.querySelector('.modal-map');
var mapClose = mapPopup.querySelector('.modal-close');

mapLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.add('js-modal-show');
});

mapClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove('js-modal-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains('js-modal-show')) {
            mapPopup.classList.remove('js-modal-show');
        }
    }
});