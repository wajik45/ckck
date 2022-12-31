// Variable
const container = document.querySelector('.container'),
layer = document.querySelector('.layer'),
    // Kotak Awal
kotakAwal = document.querySelector('.kotak-awal'),
    // txt
txtWedding = document.querySelector('.txt-wedding'),
txtRyevoNadia = document.querySelector('.txt-ryevo-nadia'),
txtRyevo = document.querySelector('.txt-ryevo'),
txtNadia = document.querySelector('.txt-nadia'),
txtHari = document.querySelector('.txt-hari'),
txtTanggal = document.querySelector('.txt-tanggal'),
txtYth = document.querySelector('.txt-yth'),
txtNama = document.querySelector('.txt-nama'),
txtKata = document.querySelector('.txt-kata'),
    // kembang
kembang = document.querySelector('.kembang');
    // tombol
tombolBuka = document.querySelector('.tombol-buka');

// Array
const txtAwal = [
    txtWedding,
    txtRyevoNadia,
    txtRyevo,
    txtNadia,
    txtHari,
    txtTanggal,
    txtYth,
    txtNama,
    txtKata
];

// Function
function mKotakAwal() {
    kotakAwal.classList.toggle('tr-skala-satu');
    kotakAwal.classList.toggle('rgba-bg-item-tr');

    kembang.classList.toggle('rotasi-360');
    setTimeout( _ => {
        txtRyevo.classList.toggle('xy-nol');
        txtNadia.classList.toggle('xy-nol');
        txtAwal.forEach((s) => {
            s.classList.toggle('rgba-color-putih');
        });
        setTimeout( _ => {
            tombolBuka.classList.toggle('rgba-color-putih');
            tombolBuka.classList.toggle('tr-skala-satu');
        }, 4000);
    }, 500);
}

window.addEventListener('load', _ => {
    setTimeout( _ => {
        mKotakAwal();
        tombolBuka.onclick = _ => {
            mKotakAwal();
        }
    }, 1000);
});