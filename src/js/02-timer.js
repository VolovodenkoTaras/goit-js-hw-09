import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

require('flatpickr/dist/themes/material_orange.css');

let setTimerId = null;
let dateDiff = null;

const refs = {
    inputCalendar: document.querySelector('input[type="text"]'),
    startBtn: document.querySelector('button[data-start]'),
    timerDays: document.querySelector('[data-days]'),
    timerHours: document.querySelector('[data-hours]'),
    timerMinutes: document.querySelector('[data-minutes]'),
    timerSeconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        clearInterval(setTimerId);
        const setId = setInterval(() => {
            dateDiff = selectedDates[0].getTime() - new Date().getTime();
            if (dateDiff <= 0) {
                clearInterval(setId);
                refs.startBtn.disabled = true;
                Notiflix.Notify.failure('Please choose a date in the future', {
                    opacity: 1,
                    position: 'center-top',
                    timeout: 250,
                    backOverlay: true,
                    cssAnimationDuration: 3500,
                    backOverlayColor: 'rgba(255,85,73,0.2)',
                    cssAnimationStyle: 'from-top',
                });
                return;
            }
        }, 1000);

        refs.startBtn.disabled = false;
    },
};

flatpickr(refs.inputCalendar, options);

refs.startBtn.addEventListener('click', onClickTimer);

function onClickTimer() {
    Notiflix.Notify.success('Start', {
        opacity: 1,
        position: 'center-top',
        timeout: 250,
        cssAnimationDuration: 1500,
        backOverlay: true,
        backOverlayColor: 'rgba(50,198,130,0.2)',
        cssAnimationStyle: 'from-top',
    });
    const setTimerId = setInterval(() => {
        if (dateDiff > 0) {
            const { days, hours, minutes, seconds } = convertMs(dateDiff);

            refs.timerDays.textContent = `${days}`;
            refs.timerHours.textContent = `${hours}`;
            refs.timerMinutes.textContent = `${minutes}`;
            refs.timerSeconds.textContent = `${seconds}`;
        }
        if (dateDiff <= 0) {
            clearInterval(setTimerId);
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