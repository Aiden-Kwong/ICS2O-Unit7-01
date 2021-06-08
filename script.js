let guess = 0
let randomNumber = 0

document.getElementById('start-btn').addEventListener('click', playGame)

function playGame () {
  randomNumber = (Math.random() * 6) + 1
  randomNumber = Math.floor(randomNumber)
  guess = document.getElementById('input').value
  guess = parseInt(guess)

  // This console log is for backend purposes to ensure that the values are working properly.
  console.log(randomNumber)
  console.log(guess)
  console.log('---')
  
  if (guess === randomNumber) {
    document.getElementById('result').innerHTML = 'Your guess was correct!'
  // Apologies, this program just doesn't feel right without an else statement as well.
  } else {
    document.getElementById('result').innerHTML = `Your guess was incorrect, the number was ${randomNumber}.` 
  }
}
