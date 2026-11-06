const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplication");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector("#multiplication-title");
const resultTag = document.querySelector("#result-tag");
const resultCount = document.querySelector("#result-count");

function createTable(number, limit) {
  multiplicationTable.replaceChildren();

  for (let multiplier = 1; multiplier <= limit; multiplier += 1) {
    const row = document.createElement("div");
    row.className = "row";

    const operation = document.createElement("span");
    operation.className = "operation";
    operation.textContent = `${number} × ${multiplier} =`;

    const result = document.createElement("span");
    result.className = "result";
    result.textContent = String(number * multiplier);

    row.append(operation, result);
    multiplicationTable.appendChild(row);
  }

  multiplicationTitle.querySelector("span").textContent = number;
  resultTag.textContent = "TABLE GENERATED";
  resultTag.classList.add("ready");
  resultCount.textContent = `${limit} ${limit === 1 ? "OPERATION" : "OPERATIONS"}`;
}

function showMessage(message) {
  multiplicationTable.replaceChildren();
  const emptyState = document.createElement("div");
  emptyState.className = "empty-state";
  const symbol = document.createElement("div");
  symbol.className = "empty-symbol";
  symbol.textContent = "!";
  const title = document.createElement("strong");
  title.textContent = message;
  emptyState.append(symbol, title);
  multiplicationTable.appendChild(emptyState);
  resultTag.textContent = "CHECK INPUT";
  resultTag.classList.remove("ready");
  resultCount.textContent = "0 OPERATIONS";
}

multiplicationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const rawNumber = numberInput.value.trim();
  const number = Number(rawNumber);
  const limit = Number(multiplicationInput.value);

  if (rawNumber === "" || !Number.isFinite(number)) {
    showMessage("ENTER A VALID NUMBER");
    numberInput.focus();
    return;
  }

  if (!Number.isInteger(limit) || limit < 1 || limit > 100) {
    showMessage("LIMIT MUST BE FROM 1 TO 100");
    multiplicationInput.focus();
    return;
  }

  createTable(number, limit);
});
