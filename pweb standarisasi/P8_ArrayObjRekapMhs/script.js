// Array yang berisi kumpulan object mahasiswa[cite: 25]
const mahasiswa = [
    { nama: "Ayu", prodi: "SI", nilai: 88 },
    { nama: "Bima", prodi: "SI", nilai: 76 },
    { nama: "Citra", prodi: "SI", nilai: 91 },
    { nama: "Dedi", prodi: "SI", nilai: 64 }
];

// Fungsi untuk menentukan status kelulusan berdasarkan nilai[cite: 25]
function tentukanStatus(nilai) {
    return nilai >= 65 ? "Lulus" : "Belum Lulus";
}

// Fungsi untuk menghitung rata-rata nilai dari array of object mahasiswa[cite: 25]
function hitungRataRata(dataMahasiswa) {
    let total = 0;

    for (let i = 0; i < dataMahasiswa.length; i++) {
        total += dataMahasiswa[i].nilai;
    }

    return total / dataMahasiswa.length;
}

// Menghitung rata-rata dan jumlah mahasiswa yang lulus[cite: 25]
const rataRata = hitungRataRata(mahasiswa);
const jumlahLulus = mahasiswa.filter((item) => item.nilai >= 65).length;

// Menampilkan ringkasan ke dalam elemen HTML dengan ID 'ringkasan'
const ringkasan = document.getElementById("ringkasan");
ringkasan.innerHTML = `
    <article>Total Mahasiswa<strong>${mahasiswa.length}</strong></article>
    <article>Rata-rata Nilai<strong>${rataRata.toFixed(1)}</strong></article>
    <article>Jumlah Lulus<strong>${jumlahLulus}</strong></article>
`;

// Melakukan loop untuk merender kartu data setiap mahasiswa ke dalam elemen ID 'daftar'[cite: 26]
const daftar = document.getElementById("daftar");
for (let i = 0; i < mahasiswa.length; i++) {
    const item = mahasiswa[i];
    const status = tentukanStatus(item.nilai);

    daftar.innerHTML += `
        <article class="card">
            <span class="badge">${item.prodi}</span>
            <h2>${item.nama}</h2>
            <p>Nilai: <strong>${item.nilai}</strong></p>
            <p>Status: ${status}</p>
        </article>
    `;
}

// Debugging menggunakan Console[cite: 26]
console.table(mahasiswa);
console.log("Rata-rata:", rataRata);