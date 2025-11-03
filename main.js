// DEKLARASI VARIABEL DAN TIPE DATA
// Gunakan let dan const
const appName = "Electrical Engineering Score Analyzer";
let version = 1.0;
const author = "Banar";
// Cetak ke konsol
console.log(`Aplikasi: ${appName} v${version} oleh ${author}`);

// Mencoba mengubah nilai const (akan error)
// appName = "New App Name"; // ❌ TypeError: Assignment to constant variable.
// author = "New Author";     // ❌ TypeError: Assignment to constant variable.

// Mengubah nilai let (berhasil)
version = 2.0; // ✅ Berhasil
console.log(`Version updated: ${version}`);

// Uncomment baris di bawah untuk melihat error
// appName = "Test";

// BUAT FUNGSI DAN ARROW FUNCTION
function greet(name) {
 return `\nHalo, ${name}!`;
}
const sayHello = (name) => `Selamat datang, ${name}!\n`;
// Cetak hasil fungsi
console.log(greet("Rina"));
console.log(sayHello("Doni"));

// BUAT ARRAY DAN OBJEK
// Buat data mahasiswa
const students = [
 { name: "Rina", score: 88, advisor: { name: "Dr. Ahmad", email: "ahmad@univ.ac.id" } },
 { name: "Doni", score: 72 },
 { name: "Ayu", score: 95, advisor: { name: "Dr. Siti" } },
 { name: "Bima", score: 67 },
 { name: "Lala", score: 82, advisor: { name: "Dr. Budi", email: "budi@univ.ac.id" } },
];
// Cetak nama mahasiswa
for (const s of students) {
 console.log(s.name);
}

// DESTRUCTURING & SPREAD OPERATOR
// Ambil nilai dari objek dengan destructuring
const { name, score } = students[0];
console.log(`\nMahasiswa pertama: ${name} (${score})`);
// Spread tambah data baru
const newStudents = [...students, { name: "Eka", score: 90 }];
console.log(newStudents);

// ARRAY METHODS
// Filter mahasiswa lulus
const passed = students.filter(s => s.score >= 80);
console.log("\nMahasiswa lulus:", passed);
// Map untuk ubah format data
const names = students.map(s => s.name.toUpperCase());
console.log(names);
// Reduce untuk menghitung rata-rata
const avg = students.reduce((acc, s) => acc + s.score, 0) / students.length;
console.log("Rata-rata nilai:", avg.toFixed(2));

// FUNGSI UTILITY
// Buat fungsi modular
const getAverage = arr => arr.reduce((sum, s) => sum + s.score, 0) / arr.length;
const getPassed = arr => arr.filter(s => s.score >= 80);

// BONUS POIN 3: Destructuring di Fungsi
const getTopStudent = ([first, ...rest]) => {
 return rest.reduce((best, s) => s.score > best.score ? s : best, first);
};

// BONUS POINT 1: Fungsi Peringkat (tanpa mengubah array asli)
const rankStudents = (arr) => {
 return [...arr].sort((a, b) => b.score - a.score);
};

// BONUS POINT 2: Fungsi Konversi Nilai ke Huruf
const toLetter = (score) => {
 if (score >= 85) return "A";
 if (score >= 70) return "B";
 if (score >= 60) return "C";
 if (score >= 50) return "D";
 return "E";
};

// Cetak hasil
console.log("\nNilai rata-rata:", getAverage(students));
console.log("Lulus:", getPassed(students).map(s => s.name).join(", "));
console.log("Mahasiswa terbaik:", getTopStudent(students).name);

// BONUS POINT 1: Cetak 3 Besar
console.log("\n=== TOP 3 MAHASISWA ===");
const top3 = rankStudents(students).slice(0, 3);
top3.forEach((student, index) => {
 console.log(`${index + 1}. ${student.name} - ${student.score}`);
});

// BONUS POINT 2: Tambahkan Nilai Huruf ke Setiap Mahasiswa
console.log("\n=== NILAI HURUF MAHASISWA ===");
const studentsWithGrade = students.map(s => ({
 ...s,
 grade: toLetter(s.score)
}));
studentsWithGrade.forEach(s => {
 console.log(`${s.name}: ${s.score} (${s.grade})`);
});

// BONUS POINT 4: Optional Chaining & Nullish Coalescing
console.log("\n=== EMAIL DOSEN PEMBIMBING ===");
students.forEach(student => {
 const email = student.advisor?.email ?? "Belum ada pembimbing";
 const advisorName = student.advisor?.name ?? "Tidak ada";
 console.log(`${student.name} - Pembimbing: ${advisorName} - Email: ${email}`);
});

// TEMPLATE LITERAL DAN OUTPUT RAPI
// Buat ringkasan
const avgScore = getAverage(students).toFixed(2);
const topStudent = getTopStudent(students);
console.log(`\nRingkasan Nilai
Rata-rata: ${avgScore}
Terbaik: ${topStudent.name} (${topStudent.score})
Jumlah Lulus: ${getPassed(students).length}/${students.length}`);