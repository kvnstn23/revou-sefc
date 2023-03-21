// Menyembunyikan bagian hasil saat form pertama kali dibuka
document.getElementById("hasil").style.display = "none";
document.getElementById("hasill").style.display = "none";
document.getElementById("hasilll").style.display = "none";

// Function untuk menghitung BMI
function hitungBMI() {
    // Menampilkan bagian hasil
    document.getElementById("hasil").style.display = "block";
    document.getElementById("hasilll").style.display = "block";
    
    // Jenis kelamin dan Usia tidak digunakan dalam rumus yang diberikan
    var jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    var usia = document.querySelector('input[name="usia"').value;
    
    // Mendapatkan value beratBadan dan tinggiBadan
    var beratBadan = document.querySelector('input[name="berat-badan"').value;
    var tinggiBadanCM = document.querySelector('input[name="tinggi-badan"').value;
    
    // Mengubah satuan tinggi badan menjadi meter sesuai rumus
    var tinggiBadan = tinggiBadanCM/100;

    //Menghitung BMI
    var hasil2 = beratBadan/(tinggiBadan*tinggiBadan);

    // Menyiapkan hasil output sesuai hasil BMI
    if(hasil2 < 18.5) {
        var hasil1 = "Kekurangan Berat Badan";
        var hasil3 = "Anda kekurangan berat badan";
        var hasil4 = "Hasil BMI < 18.5"
        var hasil5 = "Anda berada dalam kategori kekurangan berat badan.";
        var hasil6 = "Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.";
    } else if (hasil2 >= 18.5 && hasil2 <= 24.9) {
        var hasil1 = "Berat Badan Normal";
        var hasil3 = "Anda memiliki berat badan ideal";
        var hasil4 = "Hasil BMI diantara 18.5 dan 24.9"
        var hasil5 = "Anda berada dalam kategori berat badan yang normal.";
        var hasil6 = "Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.";
    } else if (hasil2 >= 25 && hasil2 <= 29.9) {
        var hasil1 = "Berat Badan Berlebih";
        var hasil3 = "Anda memiliki berat badan berlebih";
        var hasil4 = "Hasil BMI diantara 25 dan 29.9"
        var hasil5 = "Anda berada dalam kategori overweight atau berat badan berlebih.";
        var hasil6 = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br> Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
    } else {
        // Menampilkan elemen tambahan untuk obesitas
        document.getElementById("hasill").style.display = "block";
        
        var hasil1 = "Kegemukan";
        var hasil3 = "Anda memiliki berat badan obesitas";
        var hasil4 = "Hasil BMI lebih dari 30"
        var hasil5 = "Anda berada dalam kategori obesitas.";
        var hasil6 = "Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. <br> Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.";
        var hasil7 = "Beberapa penyakit yang berasal dari kegemukan <br> Diabetes <br> Hipertensi <br> Sakit Jantung <br> Osteoarthritis";
        
        // Menampilkan pada html hasil sesuai perhitungan
        document.getElementById("hasil7").innerHTML = hasil7;
    }

    // Menampilkan pada html hasil sesuai perhitungan
    document.getElementById("hasil1").innerHTML = hasil1;
    document.getElementById("hasil2").innerHTML = hasil2.toFixed(2);
    document.getElementById("hasil3").innerHTML = hasil3;
    document.getElementById("hasil4").innerHTML = hasil4;
    document.getElementById("hasil5").innerHTML = hasil5;
    document.getElementById("hasil6").innerHTML = hasil6;

    // Scroll menuju hasil (di bawah halaman)
    $("html, body").animate({ scrollTop: document.body.scrollHeight }, "slow");;
}
