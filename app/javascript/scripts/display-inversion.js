// display inversion
const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u','i', 'o', 'p', 'z', 'x', 'c', 'v', 'b']
const BLACK_KEYS = ['2', '3', '5', '6', '7','9', '0', 's', 'd', 'f']

const displayInversion = () => {

  if (window.location.pathname == '/major_triad' || '/minor_triad' || '/diminished_triad' || '/augmented_triad') {

    const keys = document.querySelectorAll('.key')
    const whiteKeys = document.querySelectorAll('.key.white')
    const blackKeys = document.querySelectorAll('.key.black')

    if (keys.length) {
      keys.forEach(key => {
        key.addEventListener('click', () => {
          cartoon();
        });
      })
    }

    if(whiteKeys.length && blackKeys.length) {
      document.addEventListener('keydown', (e) => {
        if (e.repeat) return
        const whiteKeyIndex = WHITE_KEYS.indexOf(e.key)
        const blackKeyIndex = BLACK_KEYS.indexOf(e.key)
        if (whiteKeyIndex > -1 || blackKeyIndex > -1) {
          cartoon();
        }
      });
    }

  }

}

const cartoon = () => {
  const display = document.querySelector('.display-inversion')
  console.log("display inversion now:", display);
  display.insertAdjacentHTML('beforeend', '<div class="position">root position</div>');
  setTimeout(()=> {
    display.insertAdjacentHTML('beforeend', '<div class="position">1st inversion</div>');
  }, 1000);
  setTimeout(()=> {
    display.insertAdjacentHTML('beforeend', '<div class="position">2nd inversion</div>');
  }, 2000);
  setTimeout(()=> {
    const divs = document.querySelectorAll('.position')
    divs.forEach((div)=> div.remove());
  }, 3000);
}


export { displayInversion }


  // if(whiteKeys.length && blackKeys.length) {
  //   document.addEventListener('keydown', (e) => {
  //     if (e.repeat) return
  //     const key = e.key
  //     const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  //     const blackKeyIndex = BLACK_KEYS.indexOf(key);
  //     if (whiteKeyIndex > -1) {
  //       console.log("Hi I am here WHITE", display)
  //       // playNote(whiteKeys[whiteKeyIndex]);
  //       // dispatchChord(whiteKeys[whiteKeyIndex].dataset.number);
  //     };
  //     if (blackKeyIndex > -1) {
  //       console.log("Hi I am here BLACK", display)
  //       // playNote(blackKeys[blackKeyIndex]);
  //       // dispatchChord(blackKeys[blackKeyIndex].dataset.number);
  //     };
  //   })
  // }
