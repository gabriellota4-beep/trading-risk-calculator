const { calculateRisk } = require('./script');

test('calculates risk correctly', () => {
    const result = calculateRisk(10000, 1, 50);

    expect(result.riskAmount).toBe(100);
    expect(result.positionSize).toBe(2);
});
test('returns correct values with different inputs', () => {
    const result = calculateRisk(5000, 2, 25);

    expect(result.riskAmount).toBe(100);
    expect(result.positionSize).toBe(4);
});

test('handles zero stop loss safely', () => {
    const result = calculateRisk(10000, 1, 0);

    expect(result.positionSize).toBe(Infinity);
});
