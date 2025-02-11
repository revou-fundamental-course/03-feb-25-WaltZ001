document.getElementById('temperatureForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit

    // Ambil nilai input
    const temperature = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;

    // Validasi input (hanya angka)
    if (isNaN(temperature)) {
        alert("Masukkan hanya angka!");
        return;
    }

    // Konversi suhu
    let result, explanation;
    if (unit === 'celsius') {
        result = (temperature * 9 / 5) + 32; // Celsius ke Fahrenheit
        explanation = `${temperature}°C sama dengan ${result.toFixed(2)}°F.`;
    } else {
        result = (temperature - 32) * 5 / 9; // Fahrenheit ke Celsius
        explanation = `${temperature}°F sama dengan ${result.toFixed(2)}°C.`;
    }

    // Tampilkan hasil
    document.getElementById('conversionResult').textContent = `Hasil: ${result.toFixed(2)}°`;
    document.getElementById('explanation').textContent = explanation;
    document.getElementById('result').classList.remove('hidden');
});