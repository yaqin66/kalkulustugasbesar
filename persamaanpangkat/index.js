function inputNumber(inputId) {
    document.getElementById(inputId).addEventListener('input', function (event) {
        let inputSymbol = event.target.value;
        // Keep only digits
        inputSymbol = inputSymbol.replace(/[^0-9-x^]/g, '');
        event.target.value = inputSymbol;
    });
}

// Panggil fungsi untuk menerapkan pembatasan pada input tertentu
inputNumber('inputa');
inputNumber('inputb');
inputNumber('inputc');
// inputNumber('inputd');

function clearInput() {
    // Menghapus nilai input
    document.getElementById('inputa').value = '';
    document.getElementById('inputb').value = '';
    document.getElementById('inputc').value = '';
    document.getElementById('prosesPengerjaan').innerHTML = '';
}

function inputSimbola(simbolId) {
    document.getElementById(simbolId).addEventListener('input', function (event) {
        if (event.data === 'X' || event.data === 'x') {
            event.target.value += 'x^2';
        }
    });
}

inputSimbola('inputa');


function selesaikanPersamaanKuadrat() {
    let a = parseFloat(document.getElementById('inputa').value);
    let b = parseFloat(document.getElementById('inputb').value);
    // const a = document.getElementById('inputa').value;
    // const b = document.getElementById('inputb').value;
    const c = document.getElementById('inputc').value;

    // Menghitung diskriminan
    let diskriminan = b * b - 4 * a * c;

    // Inisialisasi string untuk menyimpan proses pengerjaan
    let prosesPengerjaan = "";

    if (a === '' && b === '' && c === '') {
    prosesPengerjaan += "semua kosong";
    console.log("semua kosong cuk")
    // } else if (c === '') {
    //     // Persamaan memiliki satu akar
    //     let x = -b / (2 * a);
    //     prosesPengerjaan += "Diskriminan nol. <br> Akar kembar: <br>";
    //     prosesPengerjaan += "x = - (b) / (2 * a) <br>"
    //     prosesPengerjaan += "x = -(" + b + ") / (2 * " + a + ") <br>";
    //     prosesPengerjaan += "x = " + x;
    //     document.getElementById('prosesPengerjaan').innerHTML = prosesPengerjaan;
    //     console.log("Persamaan kuadrat memiliki satu akar: x = " + x);
    } else if (a <= 0){
        prosesPengerjaan += "A gaboleh dibawah Nol";
        document.getElementById('prosesPengerjaan').innerHTML = prosesPengerjaan;
    } else if (diskriminan > 0) {
        // Persamaan memiliki dua akar berbeda
        let x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
        let x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);
        console.log("Persamaan kuadrat memiliki dua akar berbeda: x1 = " + x1 + ", x2 = " + x2);
        prosesPengerjaan += "Akar-akar berbeda: <br>";
        prosesPengerjaan += "(-b ± √b^2 - 4.b.c) / (2 * a) <br>"
        prosesPengerjaan += "Mencari X1: <br>"
        prosesPengerjaan += "x1 = (- (" + b + ") + √" + b + "^2" + " - 4." + a + "." + c + ") / (2 * " + a + ") <br>";
        prosesPengerjaan += "x1 = (- (" + b + ") + √" + diskriminan + ") / (2 * " + a + ") <br>";
        prosesPengerjaan += `x1 = ${(-b + Math.sqrt(diskriminan))}` + "/" + `${(2 * a)}` + "<br>";
        prosesPengerjaan += "x1 = " + x1 + "<br>";
        prosesPengerjaan += "Mencari X2: <br>"
        prosesPengerjaan += "x2 = (- (" + b + ") - √" + b + "^2" + " - 4." + a + "." + c + ") / (2 * " + a + ") <br>";
        prosesPengerjaan += "x2 = (- (" + b + ") - √" + diskriminan + ") / (2 * " + a + ") <br>";
        prosesPengerjaan += `x2 = ${(-b - Math.sqrt(diskriminan))}` + "/" + `${(2 * a)}` + "<br>";
        prosesPengerjaan += "x2 = " + x2 + "";
        document.getElementById('prosesPengerjaan').innerHTML = prosesPengerjaan;
    }else {
        // Persamaan tidak memiliki akar real
        prosesPengerjaan += "Diskriminan negatif. Persamaan tidak memiliki akar real.";
        document.getElementById('prosesPengerjaan').innerHTML = prosesPengerjaan;
        console.log("Persamaan kuadrat tidak memiliki akar real");
    }

    console.log(a + " a");
    console.log(b + " b");
    console.log(c + " c");
    console.log(diskriminan + " diskrimnan");
}