// console.log("hi this is chord")


// //fetchChord will be used in playChord
// const fetchChord = (number) => {
//   console.log(number)
//   // goes to  harmonies#construct_major_chord using this fetch method
//   const url = '/harmonies/construct_major_triad'
//   // my params[:number] gets triggered
//   fetch(`${url}?number=${number}`)
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data);
//     })
// }


// const playChord = () => {
//   //select all 24 keys again
//   const keys = document.querySelectorAll('.key')
//   // listens to click, and then calls fetchChord for that note (using number)
//   if (keys.length) {
//     keys.forEach(key => {
//       key.addEventListener('click', () => fetchChord(key.dataset.number))
//     })
//   }
// }

// export { playChord }
