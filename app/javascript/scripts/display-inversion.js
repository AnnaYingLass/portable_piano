// display inversion
const displayInversion = () => {

  if (window.location.pathname == '/major_triad' || '/minor_triad' || '/diminished_triad' || '/augmented_triad') {

  const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u','i', 'o', 'p', 'z', 'x', 'c', 'v', 'b']
  const BLACK_KEYS = ['2', '3', '5', '6', '7','9', '0', 's', 'd', 'f']

  const display = document.querySelector('.display-inversion')
  const keys = document.querySelectorAll('.key')
  const whiteKeys = document.querySelectorAll('.key.white')
  const blackKeys = document.querySelectorAll('.key.black')
  // add event listener of type 'click' for each one fo the 24 keys
  // and then triggers the playNote function on that key


    if (keys.length) {
      keys.forEach(key => {
        key.addEventListener('click', ( ) => {
          console.log("display inversion NOW:", display);
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
        })

      })
    }
  }

  // if (window.location.pathname == '/dominant_7th_chord') {
  //   if (keys.length) {
  //     keys.forEach(key => {
  //       key.addEventListener('click', ( ) => {
  //         display.insertAdjacentHTML('beforeend', '<div class="position">root position</div>');
  //         setTimeout(()=> {
  //           display.insertAdjacentHTML('beforeend', '<div class="position">1st inversion</div>');
  //         }, 1000);
  //       })

  //     })
  //   }
  // }





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
