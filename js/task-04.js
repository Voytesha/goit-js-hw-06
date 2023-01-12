
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.

// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.

// Обновляй интерфейс новым значением переменной counterValue.

const descrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);
const counterEl = document.querySelector(`#value`);
let counterValue = 0;


descrementBtn.addEventListener(`click`, descrementButtonClickHandler);
incrementBtn.addEventListener(`click`, incrementButtonClickHandler);

function descrementButtonClickHandler() {
    counterValue -= 1;
    counterEl.innerHTML = counterValue;
}
function incrementButtonClickHandler() {
    counterValue += 1;
    counterEl.innerHTML = counterValue;
}
