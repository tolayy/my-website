// scripts.js

window.onbeforeunload = function() {
    // Подтвердите ваше намерение уйти.
    if (dataIsChanged) {
        return '🪣 Вы уверены, что хотите покинуть страницу?';
    }
};
