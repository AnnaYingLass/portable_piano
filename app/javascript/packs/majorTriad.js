console.log("hi this is chord")

const fetchChord = (number) => {
  console.log(number)
  const url = '/harmonies/construct_major_triad'
  fetch(`${url}?number=${number}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
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
