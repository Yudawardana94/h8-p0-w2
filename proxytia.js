var name = 'nina'
var role = 'priest'

if( name && role === ''){
  console.log("Hi " + name + ", choose your role to play a game")
} else if( name && role === 'warrior'){
  console.log('"welcome to proxytia world, ' + name +'"\n' + '"hallo warrior '+ name + ', you can attack with your weapon"')
} else if( name && role === 'priest'){
  console.log('"welcome to proxytia world, ' + name +'"\n' + '"hallo priest '+ name + ', you will help your wounded friends"')
} else if( name && role === 'wizard'){
  console.log('"welcome to proxytia world, ' + name +'"\n' + '"hallo wizard '+ name + ', make a miracle that help your victory"')
} else{
  console.log('"Name must be filled"')
}