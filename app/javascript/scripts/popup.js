
const popUp = () => {
  if (window.location.pathname == '/major_triad' || window.location.pathname == '/minor_triad'
  || window.location.pathname == '/diminished_triad' || window.location.pathname == '/augmented_triad'
  || window.location.pathname == '/tritone' || window.location.pathname == '/dominant_7th_chord')
   {
    const open = document.getElementById('open');
    const videobox = document.getElementById('videobox');
    const close = document.getElementById('close');
    // console.log(open);
    // console.log(videobox);
    // console.log(close);

    open.addEventListener('click', () => {
      videobox.classList.add('show');
      //console.log("open clicked");
    });

    close.addEventListener('click', () => {
      videobox.classList.remove('show');
      //console.log("close clicked")
    })

  }
}


export { popUp }
