import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

require('flatpickr/dist/themes/material_orange.css');

const refs = {
    inputCalendar: document.querySelector('input[type="text"]'),
    startBtn: document.querySelector('button[data-start]'),
    timerDays: document.querySelector('[data-days]'),
    timerHours: document.querySelector('[data-hours]'),
    timerMinutes: document.querySelector('[data-minutes]'),
    timerSeconds: document.querySelector('[data-seconds]'),
};

let setTimerId = null;
let timeToDate = null;

refs.startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        timeToDate = selectedDates[0].getTime()
        if (timeToDate > Date.now()) {
            refs.startBtn.removeAttribute('disabled');
        } else {
            Notiflix.Notify.failure('Please choose a date in the future', {
                opacity: 1,
                position: 'center-top',
                timeout: 100,
                cssAnimationDuration: 2000,
                cssAnimationStyle: 'from-top',
            });
        }
    },
};

flatpickr(refs.inputCalendar, options);

refs.startBtn.addEventListener('click', onClickTimer);

function onClickTimer() {
    Notiflix.Notify.success('Start', {
        opacity: 1,
        position: 'center-top',
        timeout: 250,
        cssAnimationDuration: 2000,
        cssAnimationStyle: 'from-top',
    });
    setTimerId = setInterval(() => {
        const deltaTime = timeToDate - Date.now();
        if (deltaTime > 0) {
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            refs.timerDays.textContent = `${days}`;
            refs.timerHours.textContent = `${hours}`;
            refs.timerMinutes.textContent = `${minutes}`;
            refs.timerSeconds.textContent = `${seconds}`;
        } else {
            clearInterval(setTimerId);
            refs.inputCalendar.removeAttribute('disabled');
        }
    }, 1000);
    refs.startBtn.disabled = true;
    refs.inputCalendar.disabled = true;
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
}