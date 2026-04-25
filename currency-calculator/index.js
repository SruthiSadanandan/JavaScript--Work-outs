

const inputCurrencyFirst = document.getElementById("inputFirst");
const inputCurrencySecond = document.getElementById("inputsecond");
const selectCurrencyFirst = document.getElementById("selectFirst");
const selectCurrencySecond = document.getElementById("selectSecond");

function currencyRateUpdate() {
    console.log("call");

    fetch(`https://open.er-api.com/v6/latest/${selectCurrencyFirst.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            const rate = data.rates[selectCurrencySecond.value];
            const amount = inputCurrencyFirst.value;

            inputCurrencySecond.value = (amount * rate).toFixed(2);
        })
        .catch((error) => console.log("Error:", error));
}

currencyRateUpdate();

inputCurrencyFirst.addEventListener("input", currencyRateUpdate);
selectCurrencyFirst.addEventListener("change", currencyRateUpdate);
selectCurrencySecond.addEventListener("change", currencyRateUpdate);
const swapBtn = document.getElementById("swapBtn");

swapBtn.addEventListener("click", () => {


    const temp = selectCurrencyFirst.value;

    selectCurrencyFirst.value = selectCurrencySecond.value;

    selectCurrencySecond.value = temp;

    currencyRateUpdate();
});
