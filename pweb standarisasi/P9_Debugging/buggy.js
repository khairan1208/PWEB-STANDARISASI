console.log("=== PERCOBAAN 9: FIXED CODE ===");

// PERBAIKAN 1: Menggunakan nama variabel yang konsisten
const namaMahasiswa = "Raka";
console.log("Nama mahasiswa:", namaMahasiswa);

// PERBAIKAN 2: Mengonversi string ke number menggunakan Number()
const nilaiTugas = Number("80");
const nilaiUts = Number("75");
const total = nilaiTugas + nilaiUts;
console.log("Total nilai (setelah konversi):", total);

// PERBAIKAN 3: Memanggil nama fungsi yang benar (hitungRataRata)
function hitungRataRata(a, b) {
    return (a + b) / 2;
}
console.log("Rata-rata:", hitungRataRata(nilaiTugas, nilaiUts));