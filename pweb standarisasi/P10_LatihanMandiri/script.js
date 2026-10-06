// === SCRIPT JAVASCRIPT KONVERSI SUHU ===
console.log("=== JavaScript Fundamental: Konversi Suhu Dimuat ===");

// 1. Function untuk perhitungan rumus konversi
function hitungKonversi(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    let reamur = celsius * 4/5;
    let kelvin = celsius + 273.15;

    return {
        celsius: celsius,
        fahrenheit: fahrenheit,
        reamur: reamur,
        kelvin: kelvin
    };
}

// 2. Function conditional untuk menentukan kategori suhu
function tentukanKategori(celsius) {
    if (celsius >= 35) {
        return "Sangat Panas";
    } else if (celsius >= 28) {
        return "Hangat / Normal";
    } else {
        return "Sejuk / Dingin";
    }
}

// 3. Menghubungkan DOM (Event Listener untuk Form Submit)
const formSuhu = document.getElementById("formSuhu");
const hasilDiv = document.getElementById("hasil");

formSuhu.addEventListener("submit", function(event) {
    // Mencegah halaman reload default saat submit form
    event.preventDefault();

    // Konversi input string ke number secara eksplisit
    const inputCelsius = Number(document.getElementById("celsius").value);

    // Memanggil function perhitungan dan kategori
    const hasil = hitungKonversi(inputCelsius);
    const kategori = tentukanKategori(inputCelsius);

    // Membuat array data untuk divalidasi dengan loop/console
    const daftarHasil = [hasil.fahrenheit, hasil.reamur, hasil.kelvin];
    
    // Debugging via Console log
    console.log(`Input Celsius: ${inputCelsius}`);
    console.log(`Hasil Konversi -> F: ${hasil.fahrenheit}, R: ${hasil.reamur}, K: ${hasil.kelvin}`);
    console.log(`Kategori Suhu: ${kategori}`);

    // Menampilkan output dinamis ke halaman HTML menggunakan template literal
    hasilDiv.innerHTML = `
        <h2>Hasil Perhitungan</h2>
        <p>Suhu Celsius: <strong>${hasil.celsius.toFixed(1)} °C</strong></p>
        <p>Fahrenheit: <span class="score">${hasil.fahrenheit.toFixed(2)} °F</span></p>
        <p>Reamur: <strong>${hasil.reamur.toFixed(2)} °R</strong></p>
        <p>Kelvin: <strong>${hasil.kelvin.toFixed(2)} K</strong></p>
        <p>Kategori: <span class="badge">${kategori}</span></p>
    `;
});