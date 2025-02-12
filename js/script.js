function convert() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const explanation = document.getElementById('explanation');
    const formulaText = document.getElementById('conversion-formula');

    if (isNaN(celsiusInput.value) || celsiusInput.value === "") {
        alert("Masukkan angka yang valid!");
        return;
    }

    // Konversi Celsius ke Fahrenheit
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    
    fahrenheitInput.value = fahrenheit.toFixed(2);
    explanation.classList.remove('hidden');
    formulaText.innerHTML = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function resetForm() {
    document.getElementById('celsius').value = "";
    document.getElementById('fahrenheit').value = "";
    document.getElementById('explanation').classList.add('hidden');
}

function reverseConversion() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    
    if (isNaN(fahrenheitInput.value) {
        alert("Hasil konversi tidak valid!");
        return;
    }

    // Konversi Fahrenheit ke Celsius
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    
    celsiusInput.value = celsius.toFixed(2);
    fahrenheitInput.value = "";
    document.getElementById('conversion-formula').innerHTML = 
        `(${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C`;
}