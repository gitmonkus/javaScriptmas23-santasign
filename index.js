// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.
const dance = document.querySelector('.animateMe')
const dancing = document.querySelector('.animate')
const danced = document.querySelector('.animated')

const audio = new Audio('audio.mp3')
document.getElementById('santa').addEventListener('click', function() {
  dance.style.animation = 'move 2s 22 ease-in-out'
  dancing.style.animation = 'move 1.5s 30 ease-in-out'
  danced.style.animation = 'move 1s 45 ease-in-out'
  audio.volume = .4
  audio.play()
  
})


const textInput = document.getElementById('text-input')
const sign = document.getElementById('sign')

textInput.addEventListener('keyup', function() {
  let text = textInput.value
  if (event.keyCode == 13 && text)  {
    sign.textContent = text
    textInput.value = ''
} 
  
})

