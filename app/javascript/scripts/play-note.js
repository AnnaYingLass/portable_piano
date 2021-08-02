const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u','i', 'o', 'p', 'z', 'x', 'c', 'v', 'b']
const BLACK_KEYS = ['2', '3', '5', '6', '7','9', '0', 's', 'd', 'f']

// listens to the 'click' or 'keydown' and triggers the playNote function fot it
 const playNotes = () => {
  // keys are all the 24 keys (selected class = 'key')
  const keys = document.querySelectorAll('.key')
  // whiteKeys are all the 14 whitekeys, similarly for black
  const whiteKeys = document.querySelectorAll('.key.white')
  const blackKeys = document.querySelectorAll('.key.black')

  // for each one fo the 24 keys, add event listener of type 'click'
  // and then triggers the playNote function on that key
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

// play the selected key with 300 ms
// and see if we are in an 'autosuggesting mode' using "window.location.pathname"
const playNote = (key) => {
  // prints something like: 'this key is pressed: C3'
  console.log('this key is pressed:', key.dataset.note)
  // noteAudio connects to the audio file stored in assets
  // e.g. <audio id="C3" src="<%= audio_url 'audios/1-C3.m4a'%>" type="audio/mpeg"></audio>

  // console.log(noteAudio, "deallocate")
  // if (noteAudio !== undefined) { noteAduio.remove() }
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  setTimeout(() => {  key.classList.remove('active'); }, 300);

  // now see if the pathname has something there
  console.log(window.location.pathname)
  if (window.location.pathname == '/major_triad') {
    fetchMajorTriad(key.dataset.number);
  } else if (window.location.pathname == '/tritone') {
    fetchTritone(key.dataset.number);
  }

}

const fetchMajorTriad = (number) => {
  console.log(number)
  // goes to  harmonies#construct_major_chord using this fetch method
  const url = '/harmonies/construct_major_triad'
  // my params[:number] gets triggered

  fetch(`${url}?number=${number}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

        data.forEach(note => {
        // console.log(note.name)
          // if (note !== undefined) { note.remove() }
          const audio = document.getElementById(note.name)
          audio.currentTime = 0
          audio.play()
          const key = document.querySelector(`[data-number="${note.number}"]`)
          key.classList.add('active')
          setTimeout(() => { key.classList.remove('active'); }, 300)
        });

    })
}

const fetchTritone = (number) => {
  console.log(number)
  // goes to  harmonies#construct_major_chord using this fetch method
  const url = '/harmonies/construct_tritone'
  // my params[:number] gets triggered
  fetch(`${url}?number=${number}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);

        data.forEach(note => {
        // console.log(note.name)
          const audio = document.getElementById(note.name)
          audio.currentTime = 0
          audio.play()
          const key = document.querySelector(`[data-number="${note.number}"]`)
          key.classList.add('active')
          setTimeout(() => { key.classList.remove('active'); }, 300)
        });
    })
}


export { playNotes }
