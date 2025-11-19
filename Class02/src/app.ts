//Fonksiyonlar 

//! 1. Fonksiyonu void olarak tanimlama...

function toplam(a:number, b:number):void{
  console.log(a+b);
  return
}

toplam(34,56);

//! 2. Istege bagli parametreler

// Bazi parametlerede istege bagli olmasi icin ? kullanilir.
// optional manasindadir..

function selamla(msj:string, name:string, lastname?:string):void{
  console.log(`${name}`)
}
selamla("Merhaba", "Omer");