"use strict";
//Fonksiyonlar 
//! 1. Fonksiyonu void olarak tanimlama
function toplam(a, b) {
    console.log(a + b);
    return;
}
toplam(34, 56);
//! 2. Istege bagli parametreler
// Bazi parametlerede istege bagli olmasi icin ? kullanilir.
// optional manasindadir.
function selamla(msj, name, lastname) {
    console.log(`${name}`);
}
selamla("Merhaba", "Omer");
