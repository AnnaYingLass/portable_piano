//console.log("changeColor")
const changeSideBar = (color) => {
  const sideBar = document.querySelector(".scroll-part")
  if (color === "white"){
    sideBar.classList.add("text-white")
  } else {
    sideBar.classList.remove("text-white")
  }
}

const setColorMajor = (body) => {
  body.classList.add("background-major");
  changeSideBar('white');
}
const removeColorMajor = (body) => {
  body.classList.remove("background-major");
  changeSideBar('original');
}
const setColorMinor = (body) => {
  body.classList.add("background-minor");
  changeSideBar('white');
}
const removeColorMinor = (body) => {
  body.classList.remove("background-minor");
  changeSideBar('original');
}
const setColorPerfect = (body) => {
  body.classList.add("background-perfect");
  changeSideBar('white');
}
const removeColorPerfect = (body) => {
  body.classList.remove("background-perfect");
  changeSideBar('original');
}
const setColorTritone = (body) => {
  body.classList.add("background-tritone");
  changeSideBar('white');
}
const removeColorTritone = (body) => {
  body.classList.remove("background-tritone");
  changeSideBar('original');
}

const changeColor = () => {
  //console.log(`about to change color: ${window.location.pathname}`);
  if (window.location.pathname == '/'){
    const body = document.querySelector("body")
    const minor_2nd = document.querySelector("#minor_2nd");
    const major_2nd = document.querySelector("#major_2nd");
    const minor_3rd = document.querySelector("#minor_3rd");
    const major_3rd = document.querySelector("#major_3rd");
    const perfect_4th = document.querySelector("#perfect_4th");
    const augmented_4th = document.querySelector("#augmented_4th");
    const perfect_5th = document.querySelector("#perfect_5th");
    const minor_6th = document.querySelector("#minor_6th");
    const major_6th = document.querySelector("#major_6th");
    const minor_7th = document.querySelector("#minor_7th");
    const major_7th = document.querySelector("#major_7th");
    const perfect_8ve = document.querySelector("#perfect_8ve");
    const major_triad = document.querySelector("#major_triad");
    const minor_triad = document.querySelector("#minor_triad");
    const diminished_triad = document.querySelector("#diminished_triad");
    const augmented_triad = document.querySelector("#augmented_triad");
    const tritone = document.querySelector("#tritone");

    minor_2nd.addEventListener("mouseover", () => setColorTritone(body));
    minor_2nd.addEventListener("mouseleave", () => removeColorTritone(body));

    major_2nd.addEventListener("mouseover", () => setColorMajor(body));
    major_2nd.addEventListener("mouseleave", () => removeColorMajor(body));

    minor_3rd.addEventListener("mouseover", () => setColorMinor(body));
    minor_3rd.addEventListener("mouseleave", () => removeColorMinor(body));

    major_3rd.addEventListener("mouseover", () => setColorMajor(body));
    major_3rd.addEventListener("mouseleave", () => removeColorMajor(body));

    perfect_4th.addEventListener("mouseover", () => setColorPerfect(body));
    perfect_4th.addEventListener("mouseleave", () => removeColorPerfect(body));

    augmented_4th.addEventListener("mouseover", () => setColorTritone(body));
    augmented_4th.addEventListener("mouseleave", () => removeColorTritone(body));

    perfect_5th.addEventListener("mouseover", () => setColorPerfect(body));
    perfect_5th.addEventListener("mouseleave", () => removeColorPerfect(body));

    minor_6th.addEventListener("mouseover", () => setColorMinor(body));
    minor_6th.addEventListener("mouseleave", () => removeColorMinor(body));

    major_6th.addEventListener("mouseover", () => setColorMajor(body));
    major_6th.addEventListener("mouseleave", () => removeColorMajor(body));

    minor_7th.addEventListener("mouseover", () => setColorMinor(body));
    minor_7th.addEventListener("mouseleave", () => removeColorMinor(body));

    major_7th.addEventListener("mouseover", () => setColorMajor(body));
    major_7th.addEventListener("mouseleave", () => removeColorMajor(body));

    perfect_8ve.addEventListener("mouseover", () => setColorPerfect(body));
    perfect_8ve.addEventListener("mouseleave", () => removeColorPerfect(body));

    // chords below
    major_triad.addEventListener("mouseover", () => setColorMajor(body));
    major_triad.addEventListener("mouseleave", () => removeColorMajor(body));

    minor_triad.addEventListener("mouseover", () => setColorMinor(body));
    minor_triad.addEventListener("mouseleave", () => removeColorMinor(body));

    [diminished_triad, augmented_triad, tritone].forEach((chord)=> {
      chord.addEventListener("mouseover", () => setColorTritone(body));
      chord.addEventListener("mouseleave", () => removeColorTritone(body));
    });

    // tritone.addEventListener("mouseover", () => setColorTritone(body));
    // tritone.addEventListener("mouseleave", () => removeColorTritone(body));

  };
}

export { changeColor }

// var one = "#870A30",
//   two = "#FF5C4D",
//   three = "#000C66",
//   four = "#050A30";


// var bar = document.getElementsByClassName("vertical-bar");

// const changeColor = () => {
//   $(window).on("scroll touchmove", function() {
//    if ($(bar).scrollTop() >= $("#one").position().top) {
//    $('body').css('background', $("#one").attr("data-color"));
//    console.log("one")
//    };
//    if ($(bar).scrollTop() > $("#two").position().top) {
//    $('body').css('background', $("#two").attr("data-color"))
//    console.log("two")
//    };
//    if ($(bar).scrollTop() > $("#three").position().top) {

//    $('body').css('background', $("#three").attr("data-color"))
//    };
//    if ($(bar).scrollTop() > $("#four").position().top) {

//    $('body').css('background', $("#four").attr("data-color"))
//    };
//   });
// }


