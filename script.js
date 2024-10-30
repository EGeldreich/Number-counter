
/* SELECTORS & VARIABLES*/

const counterValueEl = document.querySelector('.counter__value');
const counterDecreaseEl = document.querySelector('.counter__button--decrease');
const counterIncreaseEl = document.querySelector('.counter__button--increase');
const counterResetEl = document.querySelector('.counter__reset-button');
const counterTitleEl = document.querySelector('.counter__title');

let currentValue = 0;
counterValueEl.textContent = currentValue;

/* FUNCTIONS */

const updateCounterDisplay = () => {
    counterValueEl.textContent = currentValue;
    counterDecreaseEl.classList.toggle('counter__button--decrease--zero', currentValue === 0);
};

const updateTitle = (message = 'Compteur 101', addLimitClass = false) => {
    counterTitleEl.textContent = message;
    counterTitleEl.classList.toggle('counter__title--limit', addLimitClass);
};

const increase = () => {
    if (currentValue < 10) {
        currentValue++;
        updateCounterDisplay();
        updateTitle();
    } else {
        updateTitle('Limite atteinte :(', true);
    }
};

const decrease = () => {
    updateTitle();
    if (currentValue > 0) {
        currentValue--;
        updateCounterDisplay();
    }
};

const reset = () => {
    currentValue = 0;
    updateCounterDisplay();
    updateTitle();
};

/* EVENTS */
counterResetEl.addEventListener('click', reset);
counterIncreaseEl.addEventListener('click', increase);
counterDecreaseEl.addEventListener('click', decrease);