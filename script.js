// 1. Dictionary mapping units to their value in standard base units (Meters)
const lengthRatesInMeters = {
    m: 1,
    km: 1000,
    cm: 0.01,
    in: 0.0254,
    ft: 0.3048
};

// 2. DOM Elements Selection
const amountInput = document.getElementById('amount');
const fromUnitSelect = document.getElementById('fromUnit');
const toUnitSelect = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const outputValueSpan = document.getElementById('outputValue');
const outputUnitSpan = document.getElementById('outputUnit');

// 3. Mathematical Converter Function
function performConversion() {
    const value = parseFloat(amountInput.value);
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;

    // Validation: Handle empty or invalid numeric inputs safely
    if (isNaN(value)) {
        outputValueSpan.textContent = "0";
        return;
    }

    // Step A: Convert chosen unit value safely to the base unit (meters)
    const valueInMeters = value * lengthRatesInMeters[fromUnit];

    // Step B: Convert base unit (meters) into target destination unit
    const finalResult = valueInMeters / lengthRatesInMeters[toUnit];

    // Step C: Render clean output rounded to 5 decimal places max
    // Removes trailing zeros if it turns into a whole number cleanly
    outputValueSpan.textContent = Number(finalResult.toFixed(5)).toString();
    outputUnitSpan.textContent = toUnit;
}

// 4. Event Listeners for seamless updates
convertBtn.addEventListener('click', performConversion);

// Optional: Live update calculations as the user inputs data
amountInput.addEventListener('input', performConversion);
fromUnitSelect.addEventListener('change', performConversion);
toUnitSelect.addEventListener('change', performConversion);
