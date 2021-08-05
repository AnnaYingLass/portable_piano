// display inversion
const themeCompose = () => {

  if (window.location.pathname == '/compose') {
    const start_btn = document.getElementById('start-save')
    start_btn.addEventListener('click', () => startToStore());

    // const start_btn = document.getElementById('theme-done')
    // start_btn.addEventListener('click', () => console.log("I am done!!!!", startToStore()));

  }



}


const startToStore = () => {
    //only works with 'click', no 'keydown'
  console.log("Start to store!")
  const keys = document.querySelectorAll('.key')
  const div = document.querySelector('.my-record')
  let my_theme = [];
  if (keys.length) {
    keys.forEach(key => {
      key.addEventListener('click', ( ) => {
        div.insertAdjacentHTML('beforeend', `<div>${key.dataset.note}</div>`)
        my_theme.push(key.dataset.note);
        console.log("my_theme:", my_theme);
      });
    })
  }
  return my_theme;
}


export { themeCompose }
