function ubahHuruf(kata) {
  // you can only write your code here!
  
  var alfabet = 'abcdefghijklmnopqrstuvwxyz';
  var hasil = [];
  var indexAlfabet;
  
  for (let i = 0; i < kata.length; i++) {
    indexAlfabet = alfabet.indexOf(kata[i]) + 1;
    hasil.push(alfabet[indexAlfabet]);
  }
  
  return hasil.join('');
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu