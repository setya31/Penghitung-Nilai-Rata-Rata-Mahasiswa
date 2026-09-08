import random

# =========================
# INPUT IDENTITAS
# =========================
print("=" * 50)
print("     SISTEM PENILAIAN MAHASISWA")
print("=" * 50)

nama = input("Nama Mahasiswa : ")
nim = input("NIM            : ")
prodi = input("Program Studi  : ")
kelas = input("Kelas          : ")
semester = int(input("Semester       : "))
angkatan = int(input("Angkatan       : "))
email = input("Email          : ")
target_ipk = float(input("Target IPK     : "))

# =========================
# INPUT MATA KULIAH
# =========================
jumlah_mk = int(input("\nJumlah Mata Kuliah : "))

nilai_mk = {}
total_nilai = 0

for i in range(jumlah_mk):
    print(f"\nMata Kuliah Ke-{i+1}")

    nama_mk = input("Nama Mata Kuliah : ")

    tugas = float(input("Nilai Tugas      : "))
    uts = float(input("Nilai UTS        : "))
    uas = float(input("Nilai UAS        : "))
    kehadiran = float(input("Kehadiran (%)    : "))

    nilai_akhir = (
        tugas * 0.30 +
        uts * 0.30 +
        uas * 0.35 +
        kehadiran * 0.05
    )

    nilai_mk[nama_mk] = nilai_akhir
    total_nilai += nilai_akhir

# =========================
# PERHITUNGAN
# =========================
rata_rata = total_nilai / jumlah_mk

if rata_rata >= 90:
    grade = "A"
    mutu = 4.0
elif rata_rata >= 80:
    grade = "B"
    mutu = 3.0
elif rata_rata >= 70:
    grade = "C"
    mutu = 2.0
elif rata_rata >= 60:
    grade = "D"
    mutu = 1.0
else:
    grade = "E"
    mutu = 0.0

status = "LULUS" if rata_rata >= 75 else "TIDAK LULUS"

terbaik = max(nilai_mk, key=nilai_mk.get)
terburuk = min(nilai_mk, key=nilai_mk.get)

# =========================
# ANALISIS
# =========================
if rata_rata >= 90:
    predikat = "Sangat Memuaskan"
    emoji = "🏆"
elif rata_rata >= 80:
    predikat = "Memuaskan"
    emoji = "🥇"
elif rata_rata >= 70:
    predikat = "Cukup"
    emoji = "😊"
elif rata_rata >= 60:
    predikat = "Kurang"
    emoji = "😕"
else:
    predikat = "Sangat Kurang"
    emoji = "😭"

# =========================
# OUTPUT DATA
# =========================
print("\n")
print("=" * 60)
print("            KARTU HASIL STUDI MAHASISWA")
print("=" * 60)

print(f"Nama             : {nama}")
print(f"NIM              : {nim}")
print(f"Program Studi    : {prodi}")
print(f"Kelas            : {kelas}")
print(f"Semester         : {semester}")
print(f"Angkatan         : {angkatan}")
print(f"Email            : {email}")

print("-" * 60)

for mk, nilai in nilai_mk.items():
    print(f"{mk:<30} : {nilai:.2f}")

print("-" * 60)

print(f"Rata-rata Nilai  : {rata_rata:.2f}")
print(f"Grade            : {grade} {emoji}")
print(f"Predikat         : {predikat}")
print(f"Mutu             : {mutu}")
print(f"Status           : {status}")

print("-" * 60)

print(f"Mata Kuliah Terbaik  : {terbaik}")
print(f"Mata Kuliah Terburuk : {terburuk}")

# =========================
# PREDIKSI KELULUSAN
# =========================
print("\n🎓 Prediksi Kelulusan")

if rata_rata >= 85:
    print("Cumlaude")
elif rata_rata >= 75:
    print("Lulus Tepat Waktu")
else:
    print("Perlu Peningkatan")

# =========================
# STATUS BEASISWA
# =========================
print("\n💰 Status Beasiswa")

if rata_rata >= 90:
    print("Layak Mendapatkan Beasiswa Prestasi")
else:
    print("Belum Memenuhi Syarat Beasiswa")

# =========================
# ANALISIS AKADEMIK
# =========================
print("\n📊 Analisis Akademik")

if rata_rata >= 90:
    print("Performa Akademik Sangat Baik")
elif rata_rata >= 80:
    print("Performa Akademik Baik")
elif rata_rata >= 70:
    print("Performa Akademik Cukup")
else:
    print("Perlu Meningkatkan Kemampuan Belajar")

# =========================
# PROGRESS BAR
# =========================
print("\n📈 Progress Nilai")

bar = int(rata_rata // 2)

print("[" + "█" * bar + "-" * (50 - bar) + "]")
print(f"{rata_rata:.2f}%")

# =========================
# ACHIEVEMENT
# =========================
print("\n🏅 Achievement")

if rata_rata >= 95:
    print("👑 Raja Kampus")
elif rata_rata >= 90:
    print("🔥 Mahasiswa Elite")
elif rata_rata >= 85:
    print("🚀 Rising Star")
elif rata_rata >= 80:
    print("⭐ Mahasiswa Berprestasi")
else:
    print("📚 Pejuang Nilai")

# =========================
# CEK TARGET IPK
# =========================
print("\n🎯 Evaluasi Target")

if mutu >= target_ipk:
    print("Selamat! Target IPK tercapai.")
else:
    print("Target IPK belum tercapai.")

# =========================
# GELAR UNIK
# =========================
gelar = [
    "Master Algoritma",
    "Dewa Coding",
    "Sultan Semester",
    "Pemburu Nilai A",
    "Pejuang Deadline",
    "Raja Debugging",
    "Ksatria Informatika"
]

print("\n🎖️ Gelar Mahasiswa")
print(random.choice(gelar))

# =========================
# PESAN MOTIVASI
# =========================
print("\n💬 Pesan Motivasi")

if grade == "A":
    print("🔥 Menyala Bosss! Pertahankan prestasimu.")
elif grade == "B":
    print("👍 Bagus! Sedikit lagi menuju nilai A.")
elif grade == "C":
    print("📚 Tingkatkan konsistensi belajar.")
elif grade == "D":
    print("😅 Masih bisa diperbaiki, jangan menyerah.")
else:
    print("💪 Gagal hari ini bukan berarti gagal selamanya.")

# =========================
# SIMPAN KE FILE
# =========================
with open("hasil_mahasiswa.txt", "w", encoding="utf-8") as file:
    file.write("KARTU HASIL STUDI MAHASISWA\n")
    file.write(f"Nama : {nama}\n")
    file.write(f"NIM : {nim}\n")
    file.write(f"Program Studi : {prodi}\n")
    file.write(f"Rata-rata : {rata_rata:.2f}\n")
    file.write(f"Grade : {grade}\n")
    file.write(f"Status : {status}\n")

print("\n💾 Data berhasil disimpan ke file 'hasil_mahasiswa.txt'")
print("=" * 60)