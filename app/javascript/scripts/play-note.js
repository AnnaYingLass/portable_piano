const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u','i', 'o', 'p', 'z', 'x', 'c', 'v', 'b']
const BLACK_KEYS = ['2', '3', '5', '6', '7','9', '0', 's', 'd', 'f']

const playNotes = () => {
  const keys = document.querySelectorAll('.key')
  const whiteKeys = document.querySelectorAll('.key.white')
  const blackKeys = document.querySelectorAll('.key.black')

  if (keys.length) {
    keys.forEach(key => {
      key.addEventListener('click', () => playNote(key))
    })
  }

  if(whiteKeys.length && blackKeys.length) {
    document.addEventListener('keydown', e => {
      if (e.repeat) return
      const key = e.key
      const whiteKeyIndex = WHITE_KEYS.indexOf(key)
      const blackKeyIndex = BLACK_KEYS.indexOf(key)

      if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
      if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
    })
  }

} 

const playNote = (key) => {
  // console.log(key.dataset)
  console.log('this key is pressed:', key.dataset.note)
  // getData(key.dataset.note)
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  setTimeout(() => {  key.classList.remove('active'); }, 300);
}

// const getData = (note) => {
//   console.log(`****************** ${note}`);
//   if (note == 'C3') {
//     console.log(`My first seed: ${@first.name}`);
//   } else {
//     console.log("deosnt work");
//   }
// }


export { playNotes }