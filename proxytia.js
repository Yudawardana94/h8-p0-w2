var name = 'koko'
var role = 'wizard'

if( name === 'yuda' && role === ''){
  console.log("Hi yuda, choose your role to play a game")
} else if( name === 'yuda' && role === 'warrior'){
  console.log('"welcome to proxytia world, yuda"\n' + '"hallo warior yuda, you can attack with your weapon"')
} else if( name === 'rinda' && role === 'priest'){
  console.log('"welcome to proxytia world, rinda"\n' + '"hallo priest rinda, you will helpyour wounded friends"')
} else if( name === 'koko' && role === 'wizard'){
  console.log('"welcome to proxytia world, koko"\n' + '"hallo wizard koko, make a miracle that help your victory"')
} else{
  console.log('"Name must be filled"')
}