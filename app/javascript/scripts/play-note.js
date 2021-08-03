const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u','i', 'o', 'p', 'z', 'x', 'c', 'v', 'b']
const BLACK_KEYS = ['2', '3', '5', '6', '7','9', '0', 's', 'd', 'f']

// listens to the 'click' or 'keydown', then triggers the playNote function fot it, then dispatch chord if needed
 const playNotes = () => {
  // keys are all the 24 keys (selected class = 'key')
  const keys = document.querySelectorAll('.key')
  const whiteKeys = document.querySelectorAll('.key.white')
  const blackKeys = document.querySelectorAll('.key.black')

  // add event listener of type 'click' for each one fo the 24 keys
  // and then triggers the playNote function on that key
  if (keys.length) {
    keys.forEach(key => {
      key.addEventListener('click', ( ) => {
        playNote(key);
        dispatchChord(key.dataset.number);
      })
    })
  }
  // add event listener of type 'keydown' for each one fo the 24 keys
  // and then triggers the playNote function on that key
  if(whiteKeys.length && blackKeys.length) {
    document.addEventListener('keydown', (e) => {
      if (e.repeat) return
      const key = e.key
      const whiteKeyIndex = WHITE_KEYS.indexOf(key)
      const blackKeyIndex = BLACK_KEYS.indexOf(key);
      if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex]);
        dispatchChord(whiteKeys[whiteKeyIndex].dataset.number);
      };
      if (blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex]);
        dispatchChord(blackKeys[blackKeyIndex].dataset.number);
      };
    })
  }

};

// play the selected key(s)
// and see if we are in an 'autosuggesting mode' using "window.location.pathname"
const playNote = (key) => {
  // console.log("key:", key)
  // console.log("key.dataset", key.dataset);
  // prints something like: 'this key is pressed: C3'
  console.log('this key is pressed:', key.dataset.note);
  const noteAudio = document.getElementById(key.dataset.note);
  // prints something like: <audio id="C3" src="http://localhost:3000/assets/audios/1-C3-35aa070….m4a" type="audio/mpeg"></audio>
  console.log("noteAudio:", noteAudio);
  // current Time = 0 sets the 'restart' to the beginnning (t = 0s) of the file
  // so if I press a key repeatedly very fast, I don't have to wait until the end of the file, but now starts again from beginning, like a normal piano
  noteAudio.currentTime = 0
  console.log(noteAudio);
  noteAudio.play();
  key.classList.add('active');
  // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
  // so we are removing the highlighting after 300ms = 0.3s, otherwise it never gets removed
  setTimeout(() => { key.classList.remove('active') }, 300);
}

const dispatchChord = (number) => {
  console.log(window.location.pathname)
  let path = window.location.pathname;
  // e,g, number is 1 if C3, but this number is a string!
  const root = Number.parseInt(number);
  switch(path){
    case '/major_triad': playChord(majorTriad(root)); break;
    case '/minor_triad': playChord(minorTriad(root)); break;
    case '/diminished_triad': playChord(diminishedTriad(root)); break;
    case '/augmented_triad': playChord(augmentedTriad(root)); break;
    case '/tritone': playChord(tritone(root)); break;
  }
}

const playChord = (array) => {
  array.forEach(number => {
    // this number is in the data-number attribute of div "key"
    const key = document.querySelector(`[data-number="${number}"]`);
    playNote(key);
  })
}

const majorTriad = (root) =>  [root, root+4, root+7];
const minorTriad = (root) =>  [root, root+3, root+7];
const diminishedTriad = (root) =>  [root, root+4, root+6];
const augmentedTriad = (root) => [root, root+4, root+8];
const tritone = (root) => [root, root+6];



export { playNotes }

const firstInversion = (chord) => {
  return [];
}


// const fetchMajorTriad = (number) => {
//   console.log(number)
//   // goes to  harmonies#construct_major_chord using this fetch method
//   const url = '/harmonies/construct_major_triad'
//   // my params[:number] gets triggered
//   fetch(`${url}?number=${number}`)
//     .then(response => response.json())
//     .then((data) => {
//       // data is the json represtaation of @results (the array I returned by controller)
//       console.log("data: ",data);

//         data.forEach(note => {
//           const audio = document.getElementById(note.name)
//           audio.currentTime = 0
//           audio.play()
//           const key = document.querySelector(`[data-number="${note.number}"]`)
//           key.classList.add('active')
//           setTimeout(() => { key.classList.remove('active'); }, 300)
//         });

//     })
// }


