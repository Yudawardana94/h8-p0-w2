//Function Challenge

// Tugas 1
function shoutOut (){
    console.log('"Hello World!"')
}
shoutOut()
console.log("---------------------------------")
function katakan(){
    return '"Hello World!"'
}

console.log (katakan());

console.log("---------------------------------")

// Tugas 2
  
function calculateMutyply( num1 , num2){
    return num1 * num2 ;
}
var num1 = 5
var num2 = 6
var hasilperkalian = calculateMutyply(num1,num2)
console.log(hasilperkalian)
console.log("---------------------------------")

//tugas 3 

function processSentence( name , age , address , hobby ){
    return 'Nama saya '+name+', umur saya '+age+' tahun'+', alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+'!'
}

var name = 'Agus'
var age = '30'
var address = 'jln. Malioboro, Yogyakarta'
var hobby = 'Gaming'
// var fullSentence = processSentence(name, age , address , hobby)

console.log(processSentence( name , age , address , hobby ))