// seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplication");

const multiplicationTable = document.querySelector("#multiplication-operations");

// função
const createTable = (number, multiplicationNumber) => {
    multiplicationTable.innerHTML = "";

    for (let i = 1; i <= multiplicationNumber; i++) {
        const result = number * i;

        const template = `
            <div class="row">
                <div class="operation">${number} x ${i} = </div>
                <div class="result">${result}</div>
            </div>
        `;

        const parser = new DOMParser();
        const htmlTemplate = parser.parseFromString(template, "text/html");
        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }
};

// evento
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const number = +numberInput.value;
    const multiplicationNumber = +multiplicationInput.value;

    if (!number || !multiplicationNumber) return;

    createTable(number, multiplicationNumber);
});
