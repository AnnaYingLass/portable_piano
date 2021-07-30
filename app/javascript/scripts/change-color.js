// 1. add event listsner on the button, hover
// 2. select the background(<body>?) using query selector
// 3. in the event listener, change the background-color of the element selected in step 2 to black

const setColorBlack = (body) => {
  console.log(body);
  body.classList.add("background-black");
}

const removeColorBlack = (body) => {
  console.log(body);
  body.classList.remove("background-black");
}


const setColorPink = (body) => {
  console.log(body);
  body.classList.add("background-pink");
}

const removeColorPink = (body) => {
  console.log(body);
  body.classList.remove("background-pink");
}



const changeColor = () => {
  const body = document.querySelector("body")
  const btn_triad = document.querySelector("#major_triad");
  const btn_tritone = document.querySelector("#tritone");

  btn_triad.addEventListener("mouseover", () => setColorPink(body));
  btn_triad.addEventListener("mouseleave", () => removeColorPink(body));
  btn_tritone.addEventListener("mouseover", () => setColorBlack(body));
  btn_tritone.addEventListener("mouseleave", () => removeColorBlack(body));

};








export { changeColor }

