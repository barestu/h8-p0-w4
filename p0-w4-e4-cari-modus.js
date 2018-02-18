function cariModus(arr) {
  // you can only write your code here!
  let modus = 0;
  let terbanyak = 0;
  let jumlah = 0;
  
  arr.sort(function(value1, value2) { return value1 > value2 });
  
  for (let i = 0; i < arr.length; i++) {
    jumlah = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        jumlah++;
        if (jumlah > terbanyak) {
          terbanyak = jumlah;
          modus = i;
        }
      }
    }
  }
  
  if (terbanyak === 0 || terbanyak === arr.length - 1) {
    return -1;
  } else {
    return arr[modus];
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1