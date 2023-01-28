const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};

refs.startBtn.addEventListener('click', onSwitcherStart);
refs.stopBtn.addEventListener('click', onSwitcherStop);

let setId = null;

function onSwitcherStart() {
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled', true);
    setId = setInterval(() => { document.body.style.backgroundColor = `${getRandomHexColor()}` }, 1000);
}

function onSwitcherStop() {
    refs.startBtn.removeAttribute('disabled', true);
    refs.stopBtn.setAttribute('disabled', true);
    clearInterval(setId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
