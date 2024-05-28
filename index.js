document.getElementById('input-simbol').addEventListener('input', function (event) {
    let inputSimbol = event.target.value;
    // Hilangkan semua karakter selain '+' dan '-'
    inputSimbol = inputSimbol.replace(/[^+-]/g, '');
    event.target.value = inputSimbol;
});

function inputNumber(inputId) {
    document.getElementById(inputId).addEventListener('input', function (event) {
        let inputSymbol = event.target.value;
        // Keep only digits
        inputSymbol = inputSymbol.replace(/[^0-9-]/g, '');
        event.target.value = inputSymbol;
    });
}

// Panggil fungsi untuk menerapkan pembatasan pada input tertentu
inputNumber('input-a');
inputNumber('input-b');
inputNumber('input-c');

// Menggunakan event listener untuk mendeteksi input keyboard
document.getElementById('input-a').addEventListener('input', function(event) {
    // Mengganti nilai input dengan "x" jika huruf "X" ditekan
    if (event.data === 'X' || event.data === 'x') {
        event.target.value += 'x';
    }
});

function clearInput() {
    // Menghapus nilai input
    document.getElementById('input-a').value = '';
    document.getElementById('input-b').value = '';
    document.getElementById('input-c').value = '';
    // document.getElementById('input-simbol').value = '';
    document.getElementById('steps').innerHTML = '';
}

function calculate() {
    const a = parseFloat(document.getElementById('input-a').value);
    let b = parseFloat(document.getElementById('input-b').value);
    let c = parseFloat(document.getElementById('input-c').value);
    const simbol = document.getElementById('input-simbol').value;
    let cValue;
    let simbolRight;

    // Hitung nilai cValue berdasarkan simbol pada sisi kiri
    if (simbol === '+') {
        cValue = c - b;
    } else if (simbol === '-') {
        cValue = c + b;
    }

    // Perpindahan Simbol
    if (simbol === '+') {
        simbolRight = '-';
    } else if (simbol === '-') {
        simbolRight = '+';
    }

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        if (a === 0) {
            document.getElementById('result').innerText = 'Coefficient a cannot be zero';
        } else {
            // Menampilkan langkah-langkah perhitungan
            let steps = '';
            steps += `Step 1: Tulis Soal kembali<br>`
            steps += `${a}x ${simbol} ${b} = ${c}<br>`;
            steps += `Step 2: Pindahkan ${Math.abs(b)} ke sisi kanan<br>`;
            steps += `${a}x = ${c} ${b < 0 ? simbol : simbolRight} ${Math.abs(b)}<br>`;
            steps += `Step 3: Hitung sisi kanan<br>`;
            steps += `${a}x = ${cValue}<br>`;
            steps += `Step 4: Bagikan dengan ${a} untuk sisi kanan<br>`;
            steps += `x = ${cValue} / ${a}<br>`;
            const result = cValue / a;
            steps += `Step 5: Hasilnya<br>`
            steps += `x = ${result}`;
            document.getElementById('steps').innerHTML = steps;

            // Menampilkan hasil perhitungan
            // document.getElementById('result').innerText = `x = ${result}`;
        }
    } else {
        document.getElementById('result').innerText = 'Please enter valid numbers';
    }
    //  // Menghitung diskriminan
    //  let diskriminan = b * b - 4 * a * c;

    //  // Inisialisasi string untuk menyimpan proses pengerjaan
    //  let prosesPengerjaan = "";
 
    //  if (c === '') {
    //      // Persamaan memiliki satu akar
    //      let x = -b / (2 * a);
    //      prosesPengerjaan += "Diskriminan nol. <br> Akar kembar: <br>";
    //      prosesPengerjaan += "x = - (b) / (2 * a) <br>"
    //      prosesPengerjaan += "x = -(" + b + ") / (2 * " + a + ") <br>";
    //      prosesPengerjaan += "x = " + x;
    //      document.getElementById('prosesPengerjaan').innerHTML = prosesPengerjaan;
    //      console.log("Persamaan kuadrat memiliki satu akar: x = " + x);
    //  } else if (a <= 0){
    //      prosesPengerjaan += "A tidak boleh <= 0";
    //      document.getElementById('prosesPengerjaan').innerHTML = prosesPengerjaan;
    //  } else if (diskriminan > 0) {
    //      // Persamaan memiliki dua akar berbeda
    //      let x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
    //      let x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
    //      console.log("Persamaan kuadrat memiliki dua akar berbeda: x1 = " + x1 + ", x2 = " + x2);
    //      prosesPengerjaan += "Akar-akar berbeda: <br>";
    //      prosesPengerjaan += "(-b ± √b^2 - 4.b.c) / (2 * a) <br>"
    //      prosesPengerjaan += "Mencari X1: <br>"
    //      prosesPengerjaan += "x1 = (- (" + b + ") + √" + b + "^2" + " - 4." + a + "." + c + ") / (2 * " + a + ") <br>";
    //      prosesPengerjaan += "x1 = (- (" + b + ") + √" + diskriminan + ") / (2 * " + a + ") <br>";
    //      prosesPengerjaan += `x1 = ${(-b + Math.sqrt(diskriminan))}` + "/" + `${(2 * a)}` + "<br>";
    //      prosesPengerjaan += "x1 = " + x1 + "<br>";
    //      prosesPengerjaan += "Mencari X2: <br>"
    //      prosesPengerjaan += "x2 = (- (" + b + ") - √" + b + "^2" + " - 4." + a + "." + c + ") / (2 * " + a + ") <br>";
    //      prosesPengerjaan += "x2 = (- (" + b + ") - √" + diskriminan + ") / (2 * " + a + ") <br>";
    //      prosesPengerjaan += `x2 = ${(-b - Math.sqrt(diskriminan))}` + "/" + `${(2 * a)}` + "<br>";
    //      prosesPengerjaan += "x2 = " + x2 + "";
    //      document.getElementById('prosesPengerjaan').innerHTML = prosesPengerjaan;
    //  } else {
    //      // Persamaan tidak memiliki akar real
    //      prosesPengerjaan += "Diskriminan negatif. Persamaan tidak memiliki akar real.";
    //      document.getElementById('prosesPengerjaan').innerHTML = prosesPengerjaan;
    //      console.log("Persamaan kuadrat tidak memiliki akar real");
    //  }
     
     console.log (a)
     console.log (b)
     console.log (c)
     console.log (diskriminan)
}
