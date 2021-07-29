console.log("hi this is chord")

const fetchChord = (number) => {
  // console.log(number)
  const url = '/harmonies/construct_major_triad'
  fetch(`${url}?number=${number}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      // data.forEach(note => console.log(note));
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


const playChord = () => {
  const keys = document.querySelectorAll('.key')
  if (keys.length) {
    keys.forEach(key => {
      key.addEventListener('click', () => fetchChord(key.dataset.number))
    })
  }
}

playChord();


