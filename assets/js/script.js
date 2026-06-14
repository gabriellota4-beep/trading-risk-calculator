// PURE FUNCTION (for testing)
function calculateRisk(balance, riskPercent, stopLoss) {
    const riskAmount = (balance * riskPercent) / 100;
    const positionSize = riskAmount / stopLoss;

    return {
        riskAmount,
        positionSize
    };
}

// DOM FUNCTION (for UI)
function calculate() {
    const account = parseFloat(document.getElementById("account").value);
    const risk = parseFloat(document.getElementById("risk").value);
    const stop = parseFloat(document.getElementById("stop").value);
    const result = document.getElementById("result");

    if (!account || !risk || !stop) {
        result.innerHTML = "⚠️ Please fill all fields correctly.";
        return;
    }

    const data = calculateRisk(account, risk, stop);

    result.innerHTML = `
        <p><strong>Risk Amount:</strong> $${data.riskAmount.toFixed(2)}</p>
        <p><strong>Position Size:</strong> ${data.positionSize.toFixed(2)}</p>
    `;
}

// EVENT LISTENER
document.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate-btn");

    if (calculateButton) {
        calculateButton.addEventListener("click", calculate);
    }
});

// EXPORT FOR JEST
if (typeof module !== "undefined") {
    module.exports = { calculateRisk };
}