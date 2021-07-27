const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

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
  console.log('this key is pressed:', key.dataset.note)
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  setTimeout(() => {  key.classList.remove('active'); }, 300);
}

export { playNotes }