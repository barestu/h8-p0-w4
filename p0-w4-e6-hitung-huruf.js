function hitungHuruf(kata) {
  // you can only write your code here!
  
  var arrKalimat = kata.split(' ');
  var banding = 0, hasil = -1;
  
  //console.log(arrKalimat);
  
  for (let i = 0; i < arrKalimat.length; i++) {
    var arrKata = arrKalimat[i].split('');
    for (let j = 0; j < arrKata.length; j++) {
      for (let k = 0; k < arrKata.length; k++) {
        var jumlah = 0;
        if (j !== k && arrKata[j] === arrKata[k]) {
          jumlah++;
        }
        if (jumlah > banding) {
          banding = jumlah;
          hasil = arrKalimat[i];
        }
      }
    }
  }
  
  return hasil;
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate(???)
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau