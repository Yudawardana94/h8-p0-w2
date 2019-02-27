//  Looping Challenge

// 1. Melakukan looping menggunakan while 

var initiate = 0

console.log('LOOPING PERTAMA')
while (initiate < 20) {
   var initiate = initiate + 2
    console.log(initiate + ' - i love coding');
}

var init = 20

console.log('LOOPING KEDUA')
while (init >= 0) {
    console.log(init + ' - i will become fullstack developer');init = init - 2
}


// 2. Melakukan looping menggunakan for


console.log('LOOPING PERTAMA')
for(plus = 1 ; plus <= 20 ; plus++)
    console.log(plus + ' - i love coding')

console.log('LOOPING KEDUA')
for(min = 20 ; min >= 0 ; min--)
    console.log(min + " - i will become fullstack developer")


// 3. Angka ganjil dan genap


    //first repetition
for(ch3 = 1 ; ch3 <= 100 ; ch3 ++)
   if (ch3 % 2 === 0){
     console.log (ch3 + ' GENAP')
} else {
     console.log(ch3 + ' GANJIL')
}

    //second repetition with increase of 2
for(ch3 = 1 ; ch3 <= 100 ; ch3 +=2)
   if (ch3 % 3 === 0){
     console.log (ch3 + ' kelipatan 3')
} else {
     console.log(ch3 + ' ')
}

    //third repetition with increase of 5
for(ch3 = 1 ; ch3 <= 100 ; ch3 +=5)
    if (ch3 % 6 === 0){
     console.log (ch3 + ' kelipatan 6')
} else {
     console.log(ch3 + ' ')
}
 
    //fourth repetition wit incrase of 9
for(ch3 = 1 ; ch3 <= 100 ; ch3 +=9)
    if (ch3 % 10 === 0){
        console.log (ch3 + ' kelipatan 10')
 } else {
     console.log(ch3 + ' ')
 }
 