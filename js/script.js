document.getElementById('temperatureForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit

    // Ambil nilai input
    const celsius = document.getElementById('celsius').value;

    // Validasi input (hanya angka)
    if (isNaN(celsius)) {
        alert("Masukkan hanya angka!");
        return;
    }

    // Konversi Celsius ke Fahrenheit
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Tampilkan hasil
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
    document.getElementById('result').classList.remove('hidden');
});

// Tombol Reset
document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('celsius').value = '';
    document.getElementById('fahrenheit').value = '';
    document.getElementById('result').classList.add('hidden');
});

// Tombol Reverse (Fahrenheit ke Celsius)
document.getElementById('reverseButton').addEventListener('click', function () {
    const fahrenheit = document.getElementById('fahrenheit').value;

    if (fahrenheit === '' || isNaN(fahrenheit)) {
        alert("Hasil konversi belum tersedia atau tidak valid!");
        return;
    }

    // Konversi Fahrenheit ke Celsius
    const celsius = (fahrenheit - 32) * 5 / 9;
    document.getElementById('celsius').value = celsius.toFixed(2);
});