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
