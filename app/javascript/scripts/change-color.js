const setColorPink = (body) => {
  body.classList.add("background-pink");
}
const removeColorPink = (body) => {
  body.classList.remove("background-pink");
}
const setColorBlack = (body) => {
  body.classList.add("background-black");
}
const removeColorBlack = (body) => {
  body.classList.remove("background-black");
}

const changeColor = () => {
  //console.log(`about to change color: ${window.location.pathname}`);
  if (window.location.pathname == '/'){
    const body = document.querySelector("body")
    const btn_triad = document.querySelector("#major_triad");
    const btn_tritone = document.querySelector("#tritone");

    btn_triad.addEventListener("mouseover", () => setColorPink(body));
    btn_triad.addEventListener("mouseleave", () => removeColorPink(body));
    btn_tritone.addEventListener("mouseover", () => setColorBlack(body));
    btn_tritone.addEventListener("mouseleave", () => removeColorBlack(body));
  };
}



export { changeColor }
