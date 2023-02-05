// Задание 1 - переключатель цветов
// Выполняй это задание в файлах 01 - color - switcher.html и 01 - color - switcher.js.Посмотри демо видео работы переключателя.
// В HTML есть кнопки «Start» и «Stop».
// <button type="button" data-start>Start</button>
// <button type="button" data-stop>Stop</button>
// Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона < body > 
// на случайное значение используя инлайн стиль.При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.
//     ВНИМАНИЕ
// Учти, на кнопку «Start» можно нажать бесконечное количество раз.Сделай так, чтобы пока изменение темы запушено, 
// кнопка «Start» была не активна(disabled).
// Для генерации случайного цвета используй функцию getRandomHexColor.
// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

refs.stopBtn.setAttribute('disabled', true);

refs.startBtn.addEventListener('click', onSwitcherStart);
refs.stopBtn.addEventListener('click', onSwitcherStop);

let setId = null;

function onSwitcherStart() {
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled');
    setId = setInterval(() => { document.body.style.backgroundColor = `${getRandomHexColor()}` }, 1000);
}

function onSwitcherStop() {
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', true);
    clearInterval(setId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
