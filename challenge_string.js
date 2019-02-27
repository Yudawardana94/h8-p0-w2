string challenge

//1. Let`s form a sentence

var word = 'Javascript'
var second = 'is'
var third = 'awesome'
var fourth = 'and'
var fifth = 'I'
var sixth = 'love'
var seventh = 'it'

console.log(word+' '+second+' '+third+' '+fourth+' '+fifth+' '+sixth+' '+seventh+'.')

//2. Index Accesing -1 by 1

var word = 'wow javascript is so cool'
var firstWord = word[0]+word[1]+word[2]
var secondWord = word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13]
var thirdWord = word[15]+word[16]
var fourthWord = word[18]+word[19]
var fifthWord = word[21]+word[22]+word[23]+word[24]

console.log('First word: '+firstWord)
console.log('Second word: '+secondWord)
console.log('Thirdword: '+thirdWord)
console.log('Fourth word: '+fourthWord)
console.log('Fifth word: '+fifthWord)

//3. Breaking Sentence (Again) Using SubsString

var word = 'wow javascript is so cool'
var firstWord = word.substring(0,3)
var secondWord = word.substring(4,14)
var thirdWord = word.substring(15,17)
var fourthWord = word.substring(18,20)
var fifthWord = word.substring(21,22)

console.log('First word: '+firstWord)
console.log('Second word: '+secondWord)
console.log('Thirdword: '+thirdWord)
console.log('Fourth word: '+fourthWord)
console.log('Fifth word: '+fifthWord)

//4. Breaking Sentence (yet Again) and Count Each Length

var word = 'wow javascript is so cool'
var firstWord = word.substring(0,3)
var secondWord = word.substring(4,14)
var thirdWord = word.substring(15,17)
var fourthWord = word.substring(18,20)
var fifthWord = word.substring(21,22)

var firstWordLength = firstWord.length
var secondWordLength = secondWord.length
var thirdWordLength = thirdWord.length
var fourthWordLength = fourthWord.length
var fifthWordLength = fifthWord.length

console.log('First word: '+firstWord+', with length: '+firstWordLength)
console.log('Second word: '+secondWord+', with length: '+secondWordLength)
console.log('Thirdword: '+thirdWord+', with length: '+thirdWordLength)
console.log('Fourth word: '+fourthWord+', with length: '+fourthWordLength)
console.log('Fifth word: '+fifthWord+', with length: '+fifthWordLength)