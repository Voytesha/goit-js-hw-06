//Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//проверяет его содержимое на правильное количество введённых символов.

const inputEl = document.querySelector(`#validation-input`);

inputEl.addEventListener(`blur`, onInputBlur);

function onInputBlur(event) {
    if (event.currentTarget.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add(`valid`);
        inputEl.classList.remove(`invalid`);
    } else { 
        inputEl.classList.add(`invalid`);
        inputEl.classList.remove(`valid`);
    }
};