// Задание 3 - генератор промисов
// Выполняй это задание в файлах 03 - promises.html и 03 - promises.js.Посмотри демо видео работы генератора промисов.
// В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах,
//  шаг увеличения задержки для каждого промиса после первого и количество промисов которое необходимо создать.
// < form class="form" >
//   <label>
//     First delay (ms)
//     <input type="number" name="delay" required />
//   </label>
//   <label>
//     Delay step (ms)
//     <input type="number" name="step" required />
//   </label>
//   <label>
//     Amount
//     <input type="number" name="amount" required />
//   </label>
//   <button type="submit">Create promises</button>
// </ >
//   Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз, 
// сколько ввели в поле amount.При каждом вызове передай ей номер создаваемого промиса(position) и задержку 
// учитывая введенную пользователем первую задержку(delay) и шаг(step).
// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// Дополни код функции createPromise так, чтобы она возвращала один промис, который выполняется или отклоняется через delay времени.
// Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров.
// Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.
//   createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// Библиотека уведомлений
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.
// Для отображения уведомлений пользователю вместо console.log() используй библиотеку notiflix.

import Notiflix from 'notiflix';

const formRef = document.querySelector('form');

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const { delay, amount, step } = e.target.elements;

  let delayValue = Number(delay.value);

  for (let i = 1; i <= amount.value; i += 1) {

    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
          opacity: 0.8,
          timeout: 250,
          cssAnimationDuration: 1500,
        });
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
          opacity: 0.8,
          timeout: 250,
          cssAnimationDuration: 1500,
        });
      });
    delayValue += Number(step.value);
  }
  e.target.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
