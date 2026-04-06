function calculate() {
    const account = parseFloat(document.getElementById("account").value);
    const risk = parseFloat(document.getElementById("risk").value);
    const stop = parseFloat(document.getElementById("stop").value);
    const result = document.getElementById("result");

    if (!account || !risk || !stop) {
        result.innerHTML = "⚠️ Please fill all fields correctly.";
        return;
    }

    if (account <= 0 || risk <= 0 || stop <= 0) {
        result.innerHTML = "⚠️ Values must be greater than 0.";
        return;
    }

    const riskAmount = (account * risk) / 100;
    const positionSize = riskAmount / stop;

    result.innerHTML = `
        Risk Amount: $${riskAmount.toFixed(2)} <br>
        Position Size: ${positionSize.toFixed(2)} contracts
    `;
}
