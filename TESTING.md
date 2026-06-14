# Testing

## Automated Testing

Jest was used to test the application's core calculation functionality.

### Tests Performed

#### Risk Calculation Test

Verifies that risk amounts are calculated correctly based on account balance and risk percentage.

**Example:**

- Account Balance: $5000
- Risk Percentage: 1%
- Expected Risk Amount: $50

**Result:** Pass

---

#### Position Size Calculation Test

Verifies that position size calculations are accurate.

**Example:**

- Account Balance: $5000
- Risk Percentage: 1%
- Stop Loss: 50 points
- Expected Position Size: 1.00

**Result:** Pass

---

#### Edge Case Testing

The application was tested against unusual or invalid values.

Tests included:

- Zero stop-loss values
- Empty inputs
- Alternative account sizes
- Alternative risk percentages

**Result:** Pass

---

All automated tests passed successfully.

---

# Manual Testing

| Feature | Test Action | Expected Result | Actual Result | Status |
|----------|-------------|----------------|---------------|---------|
| Account Balance Input | Enter 5000 | Value accepted | Value accepted | Pass |
| Risk Percentage Input | Enter 1 | Value accepted | Value accepted | Pass |
| Stop Loss Input | Enter 50 | Value accepted | Value accepted | Pass |
| Calculate Button | Click Calculate | Results displayed | Results displayed | Pass |
| Risk Calculation | 5000, 1, 50 | Risk Amount = $50.00 | Risk Amount = $50.00 | Pass |
| Position Size Calculation | 5000, 1, 50 | Position Size = 1.00 | Position Size = 1.00 | Pass |
| Empty Account Field | Leave blank | Error displayed | Error displayed | Pass |
| Empty Risk Field | Leave blank | Error displayed | Error displayed | Pass |
| Empty Stop Loss Field | Leave blank | Error displayed | Error displayed | Pass |
| Negative Account Value | Enter -5000 | Invalid input prevented | Invalid input prevented | Pass |
| Negative Risk Value | Enter -1 | Invalid input prevented | Invalid input prevented | Pass |
| Negative Stop Loss | Enter -50 | Invalid input prevented | Invalid input prevented | Pass |
| Decimal Risk Value | Enter 1.5 | Correct calculation | Correct calculation | Pass |
| Large Account Value | Enter 100000 | Correct calculation | Correct calculation | Pass |
| Multiple Calculations | Run several calculations | Results update correctly | Results update correctly | Pass |

---

# Browser Testing

The application was tested on the following browsers:

| Browser | Result |
|----------|----------|
| Google Chrome | Pass |
| Mozilla Firefox | Pass |
| Microsoft Edge | Pass |

All functionality performed consistently across all tested browsers.

---

# Validation Testing

## HTML Validation

HTML was validated using the W3C Markup Validation Service.

No major errors were identified.

**Result:** Pass

---

## CSS Validation

CSS was validated using the W3C CSS Validation Service.

No major errors were identified.

**Result:** Pass

---

## JavaScript Testing

JavaScript functionality was tested manually and through automated Jest testing.

The application successfully:

- Calculated risk amounts
- Calculated position sizes
- Handled invalid inputs
- Displayed calculation results correctly

**Result:** Pass

---

# Bugs Fixed

The following issues were identified and corrected during development:

- Improved input validation.
- Corrected risk calculation handling.
- Improved position size calculations.
- Added automated Jest testing.
- Improved application structure and accessibility.
- Replaced inline JavaScript event handling with Event Listeners.

---

# Known Bugs

No known unresolved bugs at the time of submission.

---

# Testing Summary

The application was tested using a combination of:

- Automated Jest testing
- Manual user testing
- Browser compatibility testing
- HTML validation
- CSS validation

All critical functionality performed as expected.