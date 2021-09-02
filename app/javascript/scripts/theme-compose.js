var my_theme = [];
const WHITE_KEYS = ['q', 'w', 'e', 'r', 't', 'y', 'u','i', 'o', 'p', 'z', 'x', 'c', 'v', 'b']
const BLACK_KEYS = ['2', '3', '5', '6', '7','9', '0', 's', 'd', 'f']

const themeCompose = () => {
  if (window.location.pathname == '/compose') {

    const start_btn = document.getElementById('start-save')
    start_btn.addEventListener('click', () => startToStore());

    const restart_btn = document.getElementById('restart')
    restart_btn.addEventListener('click', () => {
      reset();
      const tmp_records = document.querySelectorAll('.about-to-store');
      tmp_records.forEach((tmp_record)=> tmp_record.remove());
    });

    const done_btn = document.getElementById('done')
    done_btn.addEventListener('click', () => {
      console.log({my_theme});

      fetch('/compose', {
        method: "POST",
         headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
         }, 
        body: JSON.stringify({ my_theme: my_theme })
      })
      .then(window.location.href = '/composing_mode')

    });

  }

}


const startToStore = () => {
    //only works with 'click', no 'keydown'
  const keys = document.querySelectorAll('.key')
  const whiteKeys = document.querySelectorAll('.key.white')
  const blackKeys = document.querySelectorAll('.key.black')

  const div = document.querySelector('.my-record')
  console.log("Start to store!")
  // lets you have global variable
  if (keys.length) {
    keys.forEach(key => {
      key.addEventListener('click', ( ) => {
        div.insertAdjacentHTML('beforeend', `<div class="about-to-store">${key.dataset.note}</div>`)
        my_theme.push(key.dataset.note);
      });
    })
  }

  if(whiteKeys.length && blackKeys.length) {
    document.addEventListener('keydown', (e) => {
      if (e.repeat) return
      const whiteKeyIndex = WHITE_KEYS.indexOf(e.key)
      const blackKeyIndex = BLACK_KEYS.indexOf(e.key)
      if (whiteKeyIndex > -1 || blackKeyIndex > -1) {
        const key = whiteKeys[whiteKeyIndex] || blackKeys[blackKeyIndex];
        div.insertAdjacentHTML('beforeend', `<div class="about-to-store">${key.dataset.note}</div>`)
        my_theme.push(key.dataset.note);
      }
    });
  }

}

const reset = () => {
  console.log("regretting!")
  console.log("old:", my_theme)
  my_theme = [];
  console.log("after_restart:", my_theme)
};


export { themeCompose }
