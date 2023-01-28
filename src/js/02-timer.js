import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';



const textInput = document.getElementById("datetime-picker")

console.log(textInput);

flatpickr(textInput, {
    onClose(selectedDates) {
        console.log(selectedDates);
    }
})