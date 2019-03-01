// Bandingkan Angka

function bandingkanAngka(angka1 , angka2){
    if(angka2 > angka1){
        return true
    }
    else if(angka2 < angka1){
        return false
    }
    else{
        return -1
    }
}

console.log(bandingkanAngka(5,8)) // it must be true
console.log(bandingkanAngka(5,3)) // it must be false
console.log(bandingkanAngka(4,4)) // it must be -1
console.log(bandingkanAngka(3,3)) // it must be -1
console.log(bandingkanAngka(17,2)) // it must be false






// if angka2 greater than angka1 return the function to true // true
// if angka2 less than angka1 return the function to false // false
// if angka2 equals to angka1 return function to -1