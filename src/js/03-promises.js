import Notiflix from 'notiflix';

const formRef = document.querySelector('form');

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const { delay, amount, step } = e.target.elements;

  let delayValue = Number(delay.value);

  for (let i = 0; i < amount.value; i += 1) {

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
