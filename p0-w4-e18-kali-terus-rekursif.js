function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var strAngka = String(angka).split('');
  var hasilKali = 1;
  
  if (angka < 10){
    return angka;
  } else if (angka === 0) {
    return 0;
  } else {
    for (let i = 0; i < strAngka.length; i++) {
      hasilKali = Number(strAngka[i]) * hasilKali;
    }
    angka = hasilKali;
  }
  
  return kaliTerusRekursif(angka);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6