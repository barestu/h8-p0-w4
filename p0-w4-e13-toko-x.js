function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  // you can only write your code here!
  let listPenjualan;
  
  if (shoppers.length === 0) {
    return shoppers;
  }
  
  listPenjualan = [{
    product: listBarang[0][0],
    shoppers: [],
    leftOver: listBarang[0][2],
    totalProfit: 0,
  }, {
    product: listBarang[1][0],
    shoppers: [],
    leftOver: listBarang[1][2],
    totalProfit: 0,
  }, {
    product: listBarang[2][0],
    shoppers: [],
    leftOver: listBarang[2][2],
    totalProfit: 0,
  }];
  
  for (let i = 0; i < shoppers.length; i++) {
    if (listPenjualan[0].product === shoppers[i].product && listPenjualan[0].leftOver >= shoppers[i].amount) {
      listPenjualan[0].shoppers.push(shoppers[i].name);
      listPenjualan[0].leftOver -= shoppers[i].amount;
      listPenjualan[0].totalProfit += listBarang[0][1] * shoppers[i].amount;
    } else if (listPenjualan[1].product === shoppers[i].product && listPenjualan[0].leftOver >= shoppers[i].amount) {
      listPenjualan[1].shoppers.push(shoppers[i].name);
      listPenjualan[1].leftOver -= shoppers[i].amount;
      listPenjualan[1].totalProfit += listBarang[1][1] * shoppers[i].amount;
    } else if (listPenjualan[0].product === shoppers[i].product && listPenjualan[0].leftOver >= shoppers[i].amount) {
      listPenjualan[2].shoppers.push(shoppers[i].name);
      listPenjualan[2].leftOver -= shoppers[i].amount;
      listPenjualan[2].totalProfit += listBarang[2][1] * shoppers[i].amount;
    }
  }
  
  return listPenjualan;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
console.log('');
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
console.log('');
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
console.log('');
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]