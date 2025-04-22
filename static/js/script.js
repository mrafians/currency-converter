async function converter() {
    try {
        const amount = document.getElementById('currency_one');
        const result_one = document.getElementById('currency_two');
        const result_two = document.getElementById('currency_three');

        const amount_to_convert = document.querySelector('#dropdown_button_one button').textContent.split('-')[0].trim();
        const converter_one = document.querySelector('#dropdown_button_two button').textContent.split('-')[0].trim();
        const converter_two = document.querySelector('#dropdown_button_three button').textContent.split('-')[0].trim();

        const url = `https://api.exchangerate-api.com/v4/latest/${amount_to_convert}`
        const response = await fetch(url);
        const data = await response.json();

        const rate_one = data.rates[converter_one];
        const rate_two = data.rates[converter_two];

        const converted_one = amount.value * rate_one;
        const converted_two = amount.value * rate_two;

        result_one.value = converted_one.toFixed(2);
        result_two.value = converted_two.toFixed(2);
    }

    catch {
        console.error('Conversion Error:', error);
    }
}

/**
 * 
 * Code to see the data from the API
 * 
 * const url = "https://api.exchangerate-api.com/v4/latest/USD"
 * const response = await fetch(url);
 * const data = await response.json();
 * 
 * console.log(data)
 * 
 */