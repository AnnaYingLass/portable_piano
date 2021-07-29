console.log("hi this is chord")

const fetchChord = (note) => {
  const url = 'http://localhost:3000/harmonies/triad'
  fetch(`${url}?note=${note}`)
}











const playChord = () => {
  const keys = document.querySelectorAll('.key')
  if (keys.length) {
    keys.forEach(key => {
      key.addEventListener('click', () => console.log(key.dataset.note))
    })
  }
}

playChord();
