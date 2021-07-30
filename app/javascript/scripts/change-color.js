// 1. add event listsner on the button, hover
// 2. select the background(<body>?) using query selector
// 3. in the event listener, change the background-color of the element selected in step 2 to black

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
  const body = document.querySelector("body")
  const btn_triad = document.querySelector("#major_triad");
  const btn_tritone = document.querySelector("#tritone");

  btn_triad.addEventListener("mouseover", () => setColorPink(body));
  btn_triad.addEventListener("mouseleave", () => removeColorPink(body));
  btn_tritone.addEventListener("mouseover", () => setColorBlack(body));
  btn_tritone.addEventListener("mouseleave", () => removeColorBlack(body));

  // const btn_1 = document.querySelector("#btn-1");
  // const btn_2 = document.querySelector("#btn-2");
  // const btn_3 = document.querySelector("#btn-3");
  // const btn_4 = document.querySelector("#btn-4");
  // const btn_5 = document.querySelector("#btn-5");
  // const btn_6 = document.querySelector("#btn-6");
  // const btn_7 = document.querySelector("#btn-7");
  // const btn_8 = document.querySelector("#btn-8");
  // const btn_9 = document.querySelector("#btn-9");
  // const btn_10 = document.querySelector("#btn-10");

  // btn_1.addEventListener("mouseover", () => setColor1(body));
  // btn_1.addEventListener("mouseleave", () => removeColor1(body));
  // btn_2.addEventListener("mouseover", () => setColor2(body));
  // btn_2.addEventListener("mouseleave", () => removeColor2(body));
  // btn_3.addEventListener("mouseover", () => setColor3(body));
  // btn_3.addEventListener("mouseleave", () => removeColor3(body));
  // btn_4.addEventListener("mouseover", () => setColor4(body));
  // btn_4.addEventListener("mouseleave", () => removeColor4(body));
  // btn_5.addEventListener("mouseover", () => setColor5(body));
  // btn_5.addEventListener("mouseleave", () => removeColor5(body));
  // btn_6.addEventListener("mouseover", () => setColor6(body));
  // btn_6.addEventListener("mouseleave", () => removeColor6(body));
  // btn_7.addEventListener("mouseover", () => setColor7(body));
  // btn_7.addEventListener("mouseleave", () => removeColor7(body));
  // btn_8.addEventListener("mouseover", () => setColor8(body));
  // btn_8.addEventListener("mouseleave", () => removeColor8(body));
};


export { changeColor }

