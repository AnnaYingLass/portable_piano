

const popUp = () => {
  if (window.location.pathname == '/major_triad') {
    const open = document.getElementById('open');
    const videobox = document.getElementById('videobox');
    const close = document.getElementById('close');
    //console.log(open);
    //console.log(videobox);
    //console.log(close);

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
