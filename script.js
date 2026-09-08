let jumlahMK = 1;


// ===============================
// TAMBAH MATA KULIAH
// ===============================

function tambahMK() {

    jumlahMK++;

    const container = document.getElementById("mataKuliahContainer");

    const card = document.createElement("div");

    card.className = "mk-card";

    card.innerHTML = `
        <div class="mk-header">
            <h3>Mata Kuliah #${jumlahMK}</h3>

            <button type="button"
                    class="remove-btn"
                    onclick="hapusMK(this)">
                ×
            </button>
        </div>

        <div class="form-grid">

            <div class="input-group full">
                <label>Nama Mata Kuliah</label>

                <input type="text"
                       class="nama-mk"
                       placeholder="Contoh: Pemrograman Web">
            </div>

            <div class="input-group">
                <label>Nilai Tugas</label>

                <input type="number"
                       class="tugas"
                       min="0"
                       max="100"
                       placeholder="0 - 100">
            </div>

            <div class="input-group">
                <label>Nilai UTS</label>

                <input type="number"
                       class="uts"
                       min="0"
                       max="100"
                       placeholder="0 - 100">
            </div>

            <div class="input-group">
                <label>Nilai UAS</label>

                <input type="number"
                       class="uas"
                       min="0"
                       max="100"
                       placeholder="0 - 100">
            </div>

            <div class="input-group">
                <label>Kehadiran (%)</label>

                <input type="number"
                       class="kehadiran"
                       min="0"
                       max="100"
                       placeholder="0 - 100">
            </div>

        </div>
    `;

    container.appendChild(card);

    updateNomorMK();
}


// ===============================
// HAPUS MATA KULIAH
// ===============================

function hapusMK(button) {

    const cards = document.querySelectorAll(".mk-card");

    if (cards.length <= 1) {
        alert("Minimal harus ada satu mata kuliah.");
        return;
    }

    button.closest(".mk-card").remove();

    updateNomorMK();
}


// ===============================
// UPDATE NOMOR
// ===============================

function updateNomorMK() {

    const cards = document.querySelectorAll(".mk-card");

    cards.forEach((card, index) => {

        card.querySelector("h3").textContent =
            `Mata Kuliah #${index + 1}`;

    });

    jumlahMK = cards.length;
}


// ===============================
// HITUNG NILAI
// ===============================

const universitas =
    document.getElementById("universitas").value.trim();


    if (!nama || !nim || !universitas || !prodi || !kelas ||
        !semester || !angkatan || !email ||
        isNaN(targetIpk)) {

        alert("Mohon lengkapi semua identitas mahasiswa.");

        return;
    }


function hitungNilai() {

    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const prodi = document.getElementById("prodi").value.trim();
    const kelas = document.getElementById("kelas").value.trim();

    const semester =
        document.getElementById("semester").value;

    const angkatan =
        document.getElementById("angkatan").value;

    const email =
        document.getElementById("email").value.trim();

    const targetIpk =
        parseFloat(document.getElementById("targetIpk").value);


    if (!nama || !nim || !prodi || !kelas ||
        !semester || !angkatan || !email ||
        isNaN(targetIpk)) {

        alert("Mohon lengkapi semua identitas mahasiswa.");

        return;
    }


    const cards = document.querySelectorAll(".mk-card");

    let daftarNilai = [];
    let totalNilai = 0;


    // ===============================
    // HITUNG SETIAP MATA KULIAH
    // ===============================

    cards.forEach(card => {

        const namaMK =
            card.querySelector(".nama-mk").value.trim();

        const tugas =
            parseFloat(card.querySelector(".tugas").value) || 0;

        const uts =
            parseFloat(card.querySelector(".uts").value) || 0;

        const uas =
            parseFloat(card.querySelector(".uas").value) || 0;

        const kehadiran =
            parseFloat(card.querySelector(".kehadiran").value) || 0;


        if (!namaMK) {
            alert("Nama mata kuliah belum diisi.");
            return;
        }


        // Sama dengan Python
        const nilaiAkhir =
            tugas * 0.30 +
            uts * 0.30 +
            uas * 0.35 +
            kehadiran * 0.05;


        daftarNilai.push({
            nama: namaMK,
            nilai: nilaiAkhir
        });

        totalNilai += nilaiAkhir;

    });


    if (daftarNilai.length === 0) {
        return;
    }


    // ===============================
    // RATA-RATA
    // ===============================

    const rataRata =
        totalNilai / daftarNilai.length;


    // ===============================
    // GRADE
    // ===============================

    let grade;
    let mutu;

    if (rataRata >= 90) {

        grade = "A";
        mutu = 4.0;

    } else if (rataRata >= 80) {

        grade = "B";
        mutu = 3.0;

    } else if (rataRata >= 70) {

        grade = "C";
        mutu = 2.0;

    } else if (rataRata >= 60) {

        grade = "D";
        mutu = 1.0;

    } else {

        grade = "E";
        mutu = 0.0;

    }


    // ===============================
    // STATUS
    // ===============================

    const status =
        rataRata >= 75
            ? "LULUS"
            : "TIDAK LULUS";


    // ===============================
    // PREDIKAT
    // ===============================

    let predikat;
    let emoji;

    if (rataRata >= 90) {

        predikat = "Sangat Memuaskan";
        emoji = "🏆";

    } else if (rataRata >= 80) {

        predikat = "Memuaskan";
        emoji = "🥇";

    } else if (rataRata >= 70) {

        predikat = "Cukup";
        emoji = "😊";

    } else if (rataRata >= 60) {

        predikat = "Kurang";
        emoji = "😕";

    } else {

        predikat = "Sangat Kurang";
        emoji = "😭";

    }


    // ===============================
    // TERBAIK & TERBURUK
    // ===============================

    const terbaik =
        [...daftarNilai]
            .sort((a, b) => b.nilai - a.nilai)[0];

    const terburuk =
        [...daftarNilai]
            .sort((a, b) => a.nilai - b.nilai)[0];


    // ===============================
    // OUTPUT IDENTITAS
    // ===============================

    document.getElementById("hasilUniversitas").textContent = universitas;

    document.getElementById("hasilNama").textContent = nama;

    document.getElementById("hasilNim").textContent = nim;

    document.getElementById("hasilProdi").textContent = prodi;

    document.getElementById("hasilKelas").textContent = kelas;

    document.getElementById("hasilSemester").textContent = semester;

    document.getElementById("hasilAngkatan").textContent = angkatan;

    document.getElementById("hasilEmail").textContent = email;

    document.getElementById("avatar").textContent =
        nama.charAt(0).toUpperCase();


    // ===============================
    // SCORE
    // ===============================

    document.getElementById("rataRata").textContent =
        rataRata.toFixed(2);

    document.getElementById("grade").textContent =
        grade;

    document.getElementById("emoji").textContent =
        emoji;

    document.getElementById("mutu").textContent =
        mutu.toFixed(1);

    document.getElementById("predikat").textContent =
        predikat;


    // ===============================
    // STATUS
    // ===============================

    const statusElement =
        document.getElementById("status");

    statusElement.textContent = status;

    statusElement.classList.toggle(
        "failed",
        status === "TIDAK LULUS"
    );


    // ===============================
    // TABEL NILAI
    // ===============================

    let tabel = `
        <table class="grade-table">

            <thead>
                <tr>
                    <th>#</th>
                    <th>Mata Kuliah</th>
                    <th>Nilai Akhir</th>
                    <th>Grade</th>
                </tr>
            </thead>

            <tbody>
    `;


    daftarNilai.forEach((item, index) => {

        const nilaiGrade =
            getGrade(item.nilai);

        tabel += `
            <tr>
                <td>${index + 1}</td>

                <td>
                    <strong>${item.nama}</strong>
                </td>

                <td>
                    ${item.nilai.toFixed(2)}
                </td>

                <td>
                    <span class="grade-pill">
                        ${nilaiGrade}
                    </span>
                </td>
            </tr>
        `;

    });


    tabel += `
            </tbody>
        </table>
    `;

    document.getElementById("tabelNilai").innerHTML =
        tabel;


    // ===============================
    // ANALISIS
    // ===============================

    document.getElementById("terbaik").textContent =
        `${terbaik.nama} (${terbaik.nilai.toFixed(2)})`;

    document.getElementById("terburuk").textContent =
        `${terburuk.nama} (${terburuk.nilai.toFixed(2)})`;


    // ===============================
    // PREDIKSI KELULUSAN
    // ===============================

    let prediksi;

    if (rataRata >= 85) {

        prediksi = "Cumlaude";

    } else if (rataRata >= 75) {

        prediksi = "Lulus Tepat Waktu";

    } else {

        prediksi = "Perlu Peningkatan";

    }

    document.getElementById("prediksi").textContent =
        prediksi;


    // ===============================
    // BEASISWA
    // ===============================

    let beasiswa;

    if (rataRata >= 90) {

        beasiswa = "Layak Mendapatkan Beasiswa";

    } else {

        beasiswa = "Belum Memenuhi Syarat";

    }

    document.getElementById("beasiswa").textContent =
        beasiswa;


    // ===============================
    // ANALISIS AKADEMIK
    // ===============================

    let analisis;

    if (rataRata >= 90) {

        analisis = "Performa Akademik Sangat Baik";

    } else if (rataRata >= 80) {

        analisis = "Performa Akademik Baik";

    } else if (rataRata >= 70) {

        analisis = "Performa Akademik Cukup";

    } else {

        analisis =
            "Perlu Meningkatkan Kemampuan Belajar";

    }

    document.getElementById("analisisAkademik").textContent =
        analisis;


    // ===============================
    // PROGRESS BAR
    // ===============================

    document.getElementById("progressValue").textContent =
        rataRata.toFixed(2) + "%";

    setTimeout(() => {

        document.getElementById("progressFill").style.width =
            Math.min(rataRata, 100) + "%";

    }, 100);


    // ===============================
    // ACHIEVEMENT
    // ===============================

    let achievement;

    if (rataRata >= 95) {

        achievement = "👑 Raja Kampus";

    } else if (rataRata >= 90) {

        achievement = "🔥 Mahasiswa Elite";

    } else if (rataRata >= 85) {

        achievement = "🚀 Rising Star";

    } else if (rataRata >= 80) {

        achievement = "⭐ Mahasiswa Berprestasi";

    } else {

        achievement = "📚 Pejuang Nilai";

    }

    document.getElementById("achievement").textContent =
        achievement;


    // ===============================
    // TARGET IPK
    // ===============================

    const targetTitle =
        document.getElementById("targetTitle");

    const targetText =
        document.getElementById("targetText");


    if (mutu >= targetIpk) {

        targetTitle.textContent =
            "🎉 Target IPK Tercapai!";

        targetText.textContent =
            `IPK mutu ${mutu.toFixed(2)} berhasil mencapai target ${targetIpk.toFixed(2)}.`;

    } else {

        targetTitle.textContent =
            "⚠️ Target IPK Belum Tercapai";

        targetText.textContent =
            `IPK mutu ${mutu.toFixed(2)} masih di bawah target ${targetIpk.toFixed(2)}.`;

    }


    // ===============================
    // GELAR RANDOM
    // ===============================

    const gelar = [

        "Master Algoritma",
        "Dewa Coding",
        "Sultan Semester",
        "Pemburu Nilai A",
        "Pejuang Deadline",
        "Raja Debugging",
        "Ksatria Informatika"

    ];

    const gelarRandom =
        gelar[Math.floor(Math.random() * gelar.length)];

    document.getElementById("gelar").textContent =
        gelarRandom;


    // ===============================
    // MOTIVASI
    // ===============================

    let motivasi;

    if (grade === "A") {

        motivasi =
            "🔥 Menyala Bosss! Pertahankan prestasimu.";

    } else if (grade === "B") {

        motivasi =
            "👍 Bagus! Sedikit lagi menuju nilai A2Q    .";

    } else if (grade === "C") {

        motivasi =
            "📚 Tingkatkan konsistensi belajar.";

    } else if (grade === "D") {

        motivasi =
            "😅 Masih bisa diperbaiki, jangan menyerah.";

    } else {

        motivasi =
            "💪 Gagal hari ini bukan berarti gagal selamanya.";

    }

    document.getElementById("motivasi").textContent =
        motivasi;


    // ===============================
    // TAMPILKAN HASIL
    // ===============================

    const hasil =
        document.getElementById("hasil");

    hasil.classList.remove("hidden");

    hasil.scrollIntoView({
        behavior: "smooth"
    });


    // Simpan data untuk tombol download
    window.dataHasil = {
        nama,
        nim,
        universitas,
        prodi,
        rataRata,
        grade,
        status,
        mutu,
        predikat,
        terbaik: terbaik.nama,
        terburuk: terburuk.nama
    };

}


// ===============================
// GRADE
// ===============================

function getGrade(nilai) {

    if (nilai >= 90) return "A";

    if (nilai >= 80) return "B";

    if (nilai >= 70) return "C";

    if (nilai >= 60) return "D";

    return "E";
}


// ===============================
// SIMPAN HASIL TXT
// ===============================

function simpanHasil() {

    if (!window.dataHasil) {
        alert("Silakan hitung nilai terlebih dahulu.");
        return;
    }


    const data = window.dataHasil;


    const isi = `
KARTU HASIL STUDI MAHASISWA
====================================

Universitas     : ${data.universitas}
Nama            : ${data.nama}
NIM             : ${data.nim}
Program Studi   : ${data.prodi}

Rata-rata       : ${data.rataRata.toFixed(2)}
Grade           : ${data.grade}
Mutu            : ${data.mutu.toFixed(1)}
Predikat        : ${data.predikat}
Status          : ${data.status}

Mata Kuliah Terbaik  : ${data.terbaik}
Mata Kuliah Terburuk : ${data.terburuk}

====================================
Sistem Penilaian Mahasiswa
`;


    const blob =
        new Blob([isi], {
            type: "text/plain;charset=utf-8"
        });


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");

    link.href = url;

    link.download =
        "hasil_mahasiswa.txt";

    link.click();


    URL.revokeObjectURL(url);

}