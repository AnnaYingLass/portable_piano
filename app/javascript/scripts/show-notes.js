const showNotes = () => {


  const showNotes = document.querySelector('.show-notes')
  const keys = document.querySelectorAll('.key')


    if (keys.length) {
      keys.forEach(key => {
        key.addEventListener('click', ( ) => {
            showNotes.insertAdjacentHTML('beforeend', `<div class="inan">${key.dataset.note}</div>`);
            // querySelectorAll('Inan')
            //setTimeout(function, 3000)
            // thing.remove();
        })


      })
    }
  }


export { displayInversion }
