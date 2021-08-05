// display inversion
var my_theme = [];

const themeCompose = () => {
  if (window.location.pathname == '/compose') {
    const start_btn = document.getElementById('start-save')
    start_btn.addEventListener('click', () => startToStore());

    const done_btn = document.getElementById('theme-done')
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

    });

  }

}


const startToStore = () => {
    //only works with 'click', no 'keydown'
  console.log("Start to store!")
  const keys = document.querySelectorAll('.key')
  const div = document.querySelector('.my-record')
  // lets you have global variable
  if (keys.length) {
    keys.forEach(key => {
      key.addEventListener('click', ( ) => {
        div.insertAdjacentHTML('beforeend', `<div>${key.dataset.note}</div>`)
        my_theme.push(key.dataset.note);
        console.log("my_theme old:", my_theme);
      });
    })
  }
}

export { themeCompose }
