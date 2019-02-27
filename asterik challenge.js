// Asterik Challenge

// 1. Menyusun barisan bintang

for (row1 = 5; row1 > 0 ; row1--){
    console.log('*')
}

console.log('-----------------------------')
// 2. Menyusun baris bintang dengan Nested looping


var rows2 = 5;

for(var baru = 1; baru <= rows2; baru ++) {
  var s = "";
  for (var i = 1; i <= rows2; i ++) {
    s = s+ "* ";
  }
  console.log(s);
}
console.log('-----------------------------')

// 3. Menyusun baris tangga bintang dengan Nested looping
var row3 = '';

for ( var ini = 0; ini<5; ini++){
        row3 = row3 + '* '
        console.log(row3)
}
