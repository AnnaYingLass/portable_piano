// display inversion
var my_theme = [];

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

    const done_btn = document.getElementById('theme-done')
    done_btn.addEventListener('click', () => {
      console.log({my_theme});

      fetch('/compose', {
        method: "POST",
         headers: {
          // 'Accept': 'application/json',
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
}

const reset = () => {
  console.log("regretting!")
  console.log("old:", my_theme)
  my_theme = [];
  console.log("after_restart:", my_theme)
};


export { themeCompose }
