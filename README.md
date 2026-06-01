# TRADCAL – Trading Risk Calculator

## Introduction

TRADCAL is a web-based Trading Risk Calculator designed to help traders manage risk effectively by calculating position sizes based on account balance, risk percentage, and stop-loss distance.

Risk management is one of the most important aspects of successful trading. This application aims to provide traders with a simple and intuitive tool to quickly determine appropriate position sizing while maintaining disciplined risk management practices.

The project was developed as part of the Code Institute Diploma in Web Application Development.

---

# User Experience (UX)

## Project Goals

The primary goal of TRADCAL is to provide traders with a fast, simple, and reliable way to calculate trading risk and position size.

The application was designed with the following objectives:

- Provide a clean and easy-to-use interface.
- Help traders manage risk consistently.
- Deliver accurate risk calculations.
- Validate user inputs to prevent calculation errors.
- Provide instant calculation results.

---

## User Stories

### First Time Visitor Goals

- As a first-time visitor, I want to understand the purpose of the application immediately.
- As a first-time visitor, I want an intuitive interface that requires little explanation.
- As a first-time visitor, I want quick access to the calculator's functionality.

### Returning User Goals

- As a returning user, I want consistent and accurate calculations.
- As a returning user, I want the calculator to be fast and responsive.
- As a returning user, I want a reliable tool for everyday trading decisions.

### Trader Goals

- As a trader, I want to calculate my risk amount so I know how much money I am risking per trade.
- As a trader, I want to calculate position size so I can trade responsibly.
- As a trader, I want invalid inputs to be prevented so that incorrect calculations are avoided.
- As a trader, I want results displayed clearly and instantly.

---

# Design

## Colour Scheme

A simple and professional colour scheme was chosen to provide a clean and distraction-free user experience.

## Typography

Standard web-safe fonts were used to maximize readability and accessibility across all devices and browsers.

## Layout

The application follows a minimal design approach, allowing users to focus entirely on the calculator without unnecessary distractions.

---

# Features

## Existing Features

### Risk Calculation

Users can enter:

- Account Balance
- Risk Percentage
- Stop Loss Distance

The application calculates:

- Risk Amount
- Position Size

### Input Validation

The application validates user inputs to reduce the risk of invalid calculations and improve reliability.

### Responsive Design

The layout adapts to different screen sizes to improve usability across desktop and mobile devices.

### Automated Testing

Jest testing has been implemented to verify the accuracy of core risk calculations.

---

# Future Features

Potential future improvements include:

- Futures contract sizing
- Forex lot size calculations
- Cryptocurrency position sizing
- Trade journal integration
- Risk-to-reward calculator
- Multi-account support
- Saved user preferences

---

# Technologies Used

## Languages

- HTML5
- CSS3
- JavaScript

## Frameworks, Libraries and Tools

- Git
- GitHub
- Visual Studio Code
- Jest
- GitHub Pages

---

# Testing

## Automated Testing

The project uses Jest to test key calculation functionality.

Tests include:

### Risk Calculation Test

Verifies that risk amounts are calculated correctly based on account balance and risk percentage.

### Position Size Calculation Test

Verifies that position size calculations are accurate.

### Edge Case Testing

Tests special cases such as zero stop-loss values and alternative input combinations.

---

## Manual Testing

| Feature | Action | Expected Result | Outcome |
|----------|----------|----------------|---------|
| Account Balance Input | Enter value | Value accepted | Pass |
| Risk Percentage Input | Enter value | Value accepted | Pass |
| Stop Loss Input | Enter value | Value accepted | Pass |
| Calculate Button | Click button | Calculation displayed | Pass |
| Invalid Input | Enter invalid value | Error prevented | Pass |
| Risk Calculation | Valid inputs | Correct risk amount | Pass |
| Position Size | Valid inputs | Correct position size | Pass |

---

## Browser Testing

The project was tested on:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

Results were consistent across all tested browsers.

---

## Validator Testing

### HTML

HTML was validated using the W3C Markup Validation Service.

No major errors were identified.

### CSS

CSS was validated using the W3C CSS Validation Service.

No major errors were identified.

### JavaScript

JavaScript functionality was tested through both manual testing and automated Jest testing.

---

# Bugs

## Fixed Bugs

- Input validation issues were resolved.
- Position size calculation logic was improved.
- Risk calculation edge cases were addressed.
- Testing coverage was added using Jest.

## Known Bugs

No known unresolved bugs at the time of submission.

---

# Deployment

The site was deployed using GitHub Pages.

## Deployment Steps

1. Navigate to the GitHub repository.
2. Select the Settings tab.
3. Navigate to Pages.
4. Select the Main branch.
5. Save the settings.
6. GitHub Pages generates the live deployment link.

---

# Repository

GitHub Repository:

[Insert GitHub Repository URL Here]

Live Site:

[Insert Live Site URL Here]

---

# Credits

## Content

All project content was created by Gabriel Dada Lota.

## Code References

General JavaScript, HTML, and CSS reference material was consulted from:

- MDN Web Docs
- JavaScript Documentation
- Jest Documentation

---

# Acknowledgements

- Code Institute
- Course facilitators and mentors
- The open-source developer community

---

# Author

Gabriel Dada Lota

2026