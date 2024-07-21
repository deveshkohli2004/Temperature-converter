document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const input = document.querySelector('input[type="number"]');
    const fromTemp = document.querySelector('select[name="from"]');
    const toTemp = document.querySelector('select[name="to"]');
    const msg = document.querySelector('.msg');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const value = parseFloat(input.value);
        const fromUnit = fromTemp.value;
        const toUnit = toTemp.value;
        const result = convertTemperature(value, fromUnit, toUnit);
        msg.textContent = `${value} ${fromUnit} = ${result} ${toUnit}`;
    });

    function convertTemperature(value, fromUnit, toUnit) {
        // Convert the input value to Celsius
        let celsius;
        switch (fromUnit) {
            case 'Celsius':
                celsius = value;
                break;
            case 'Fahrenheit':
                celsius = (value - 32) * 5/9;
                break;
            case 'Kelvin':
                celsius = value - 273.15;
                break;
            case 'Rankine':
                celsius = (value - 491.67) * 5/9;
                break;
            case 'Reaumur':
                celsius = value * 5/4;
                break;
            default:
                celsius = value;
        }

        // Convert from Celsius to the target unit
        let result;
        switch (toUnit) {
            case 'Celsius':
                result = celsius;
                break;
            case 'Fahrenheit':
                result = (celsius * 9/5) + 32;
                break;
            case 'Kelvin':
                result = celsius + 273.15;
                break;
            case 'Rankine':
                result = (celsius + 273.15) * 9/5;
                break;
            case 'Reaumur':
                result = celsius * 4/5;
                break;
            default:
                result = celsius;
        }

        return result.toFixed(2);
    }
});
