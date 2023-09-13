let up = [
  "https://dl.dropbox.com/s/0t56aebizjhtad2/Haut7.png?dl=0",
  "https://dl.dropbox.com/s/qne19caygtbkuud/Haut2.png?dl=0",
  "https://dl.dropbox.com/s/6u3x4dh2sazp3jf/Haut6.png?dl=0",
  "https://dl.dropbox.com/s/9v5qbfnnesox7el/Haut3.png?dl=0",
  "https://dl.dropbox.com/s/014jwnaclvdm04c/Haut4.png?dl=0",
  "https://dl.dropbox.com/s/gxo4suwymuhx5pl/Haut1.png?dl=0",
  "https://dl.dropbox.com/s/7lkp4zvg8a71iuz/Haut5.png?dl=0",
];

let down = [
  "https://dl.dropbox.com/s/dzvauapsgtmz7au/Bas3.png?dl=0",
  "https://dl.dropbox.com/s/a2mma6xqomoj54i/Bas5.png?dl=0",
  "https://dl.dropbox.com/s/7pqdf0ajylrqxg7/Bas2.png?dl=0",
  "https://dl.dropbox.com/s/ramhtm7ocimy93i/Bas1.png?dl=0",
  "https://dl.dropbox.com/s/86f2gunvzelgu9u/Bas7.png?dl=0",
  "https://dl.dropbox.com/s/q2e62s5crxmapsy/Bas4.png?dl=0",
  "https://dl.dropbox.com/s/91ncfch5hb5x0nt/Bas6.png?dl=0",
];

const Up1 = up[5];
const Up2 = up[1];
const Up3 = up[3];
const Up4 = up[4];

const Down1 = down[3];
const Down2 = down[2];
const Down3 = down[0];
const Down4 = down[5];

let num1 = -1;
let num2 = -1;

//bonne sil

function displayedsil1() {
  if (Up1 == up[num1] && Down1 == down[num2]) {
    document.getElementById("model1").style.filter = "brightness(30%)";
  } else if (Up2 == up[num1] && Down2 == down[num2]) {
    document.getElementById("model1").style.filter = "brightness(30%)";
  } else if (Up3 == up[num1] && Down3 == down[num2]) {
    document.getElementById("model1").style.filter = "brightness(30%)";
  } else if (Up4 == up[num1] && Down4 == down[num2]) {
    document.getElementById("model1").style.filter = "brightness(30%)";
  } else {
    document.getElementById("model1").style.filter = "brightness(100%)";
  }
}

//bouton Haut

function Next1() {
  let Slider1 = document.getElementById("Slider1");

  num1++;

  if (num1 >= up.length) {
    num1 = 0;
  }

  Slider1.src = up[num1];
}

function Prev1() {
  let Slider1 = document.getElementById("Slider1");

  num1--;

  if (num1 < 0) {
    num1 = up.length - 1;
  }

  Slider1.src = up[num1];
}

// bouton down

function next1() {
  let slider1 = document.getElementById("slider1");

  num2++;

  if (num2 >= down.length) {
    num2 = 0;
  }

  slider1.src = down[num2];
}

function prev1() {
  let slider1 = document.getElementById("slider1");

  num2--;

  if (num2 < 0) {
    num2 = down.length - 1;
  }

  slider1.src = down[num2];
}

//sil 2

let num3 = -1;
let num4 = -1;

function displayedsil2() {
  if (Up1 == up[num3] && Down1 == down[num4]) {
    document.getElementById("model2").style.filter = "brightness(30%)";
  } else if (Up2 == up[num3] && Down2 == down[num4]) {
    document.getElementById("model2").style.filter = "brightness(30%)";
  } else if (Up3 == up[num3] && Down3 == down[num4]) {
    document.getElementById("model2").style.filter = "brightness(30%)";
  } else if (Up4 == up[num3] && Down4 == down[num4]) {
    document.getElementById("model2").style.filter = "brightness(30%)";
  } else {
    document.getElementById("model2").style.filter = "brightness(100%)";
  }
}

//bouton Haut

function Next2() {
  let Slider2 = document.getElementById("Slider2");

  num3++;

  if (num3 >= up.length) {
    num3 = 0;
  }

  Slider2.src = up[num3];
}

function Prev2() {
  let Slider2 = document.getElementById("Slider2");

  num3--;

  if (num3 < 0) {
    num3 = up.length - 1;
  }

  Slider2.src = up[num3];
}

// bouton down

function next2() {
  let slider2 = document.getElementById("slider2");

  num4++;

  if (num4 >= down.length) {
    num4 = 0;
  }

  slider2.src = down[num4];
}

function prev2() {
  let slider2 = document.getElementById("slider2");

  num4--;

  if (num4 < 0) {
    num4 = down.length - 1;
  }

  slider2.src = down[num4];
}

//sil3

let num5 = -1;
let num6 = -1;

function displayedsil3() {
  if (Up1 == up[num5] && Down1 == down[num6]) {
    document.getElementById("model3").style.filter = "brightness(30%)";
  } else if (Up2 == up[num5] && Down2 == down[num6]) {
    document.getElementById("model3").style.filter = "brightness(30%)";
  } else if (Up3 == up[num5] && Down3 == down[num6]) {
    document.getElementById("model3").style.filter = "brightness(30%)";
  } else if (Up4 == up[num5] && Down4 == down[num6]) {
    document.getElementById("model3").style.filter = "brightness(30%)";
  } else {
    document.getElementById("model3").style.filter = "brightness(100%)";
  }
}

//bouton Haut 3

function Next3() {
  let Slider3 = document.getElementById("Slider3");

  num5++;

  if (num5 >= up.length) {
    num5 = 0;
  }

  Slider3.src = up[num5];
}

function Prev3() {
  let Slider3 = document.getElementById("Slider3");

  num5--;

  if (num5 < 0) {
    num5 = up.length - 1;
  }

  Slider3.src = up[num5];
}

// bouton down 3

function next3() {
  let slider3 = document.getElementById("slider3");

  num6++;

  if (num6 >= down.length) {
    num6 = 0;
  }

  slider3.src = down[num6];
}

function prev3() {
  let slider3 = document.getElementById("slider3");

  num6--;

  if (num6 < 0) {
    num6 = down.length - 1;
  }

  slider3.src = down[num6];
}

//sil 4

let num7 = -1;
let num8 = -1;

function displayedsil4() {
  if (Up1 == up[num7] && Down1 == down[num8]) {
    document.getElementById("model4").style.filter = "brightness(30%)";
  } else if (Up2 == up[num7] && Down2 == down[num8]) {
    document.getElementById("model4").style.filter = "brightness(30%)";
  } else if (Up3 == up[num7] && Down3 == down[num8]) {
    document.getElementById("model4").style.filter = "brightness(30%)";
  } else if (Up4 == up[num7] && Down4 == down[num8]) {
    document.getElementById("model4").style.filter = "brightness(30%)";
  } else {
    document.getElementById("model4").style.filter = "brightness(100%)";
  }
}

//bouton Haut 1

function Next4() {
  let Slider4 = document.getElementById("Slider4");

  num7++;

  if (num7 >= up.length) {
    num7 = 0;
  }

  Slider4.src = up[num7];
}

function Prev4() {
  let Slider4 = document.getElementById("Slider4");

  num7--;

  if (num7 < 0) {
    num7 = up.length - 1;
  }

  Slider4.src = up[num7];
}

// bouton down 1

function next4() {
  let slider4 = document.getElementById("slider4");

  num8++;

  if (num8 >= down.length) {
    num8 = 0;
  }

  slider4.src = down[num8];
}

function prev4() {
  let slider4 = document.getElementById("slider4");

  num8--;

  if (num8 < 0) {
    num8 = down.length - 1;
  }

  slider4.src = down[num8];
}

//Récompense

function win() {
  //1234/1243/1324/1342/1432/1423
  if (
    Up1 == up[num1] &&
    Down1 == down[num2] &&
    Up2 == up[num3] &&
    Down2 == down[num4] &&
    Up3 == up[num5] &&
    Down3 == down[num6] &&
    Up4 == up[num7] &&
    Down4 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up1 == up[num1] &&
    Down1 == down[num2] &&
    Up2 == up[num3] &&
    Down2 == down[num4] &&
    Up4 == up[num5] &&
    Down4 == down[num6] &&
    Up3 == up[num7] &&
    Down3 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up1 == up[num1] &&
    Down1 == down[num2] &&
    Up3 == up[num3] &&
    Down3 == down[num4] &&
    Up2 == up[num5] &&
    Down2 == down[num6] &&
    Up4 == up[num7] &&
    Down4 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up1 == up[num1] &&
    Down1 == down[num2] &&
    Up3 == up[num3] &&
    Down3 == down[num4] &&
    Up4 == up[num5] &&
    Down4 == down[num6] &&
    Up2 == up[num7] &&
    Down2 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up1 == up[num1] &&
    Down1 == down[num2] &&
    Up4 == up[num3] &&
    Down4 == down[num4] &&
    Up3 == up[num5] &&
    Down3 == down[num6] &&
    Up2 == up[num7] &&
    Down2 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up1 == up[num1] &&
    Down1 == down[num2] &&
    Up4 == up[num3] &&
    Down4 == down[num4] &&
    Up2 == up[num5] &&
    Down2 == down[num6] &&
    Up3 == up[num7] &&
    Down3 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  }
  // 2341/2314/2413/2431/2134/2143
  else if (
    Up2 == up[num1] &&
    Down2 == down[num2] &&
    Up3 == up[num3] &&
    Down3 == down[num4] &&
    Up4 == up[num5] &&
    Down4 == down[num6] &&
    Up1 == up[num7] &&
    Down1 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up2 == up[num1] &&
    Down2 == down[num2] &&
    Up3 == up[num3] &&
    Down3 == down[num4] &&
    Up1 == up[num5] &&
    Down1 == down[num6] &&
    Up4 == up[num7] &&
    Down4 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up2 == up[num1] &&
    Down2 == down[num2] &&
    Up4 == up[num3] &&
    Down4 == down[num4] &&
    Up1 == up[num5] &&
    Down1 == down[num6] &&
    Up3 == up[num7] &&
    Down3 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up2 == up[num1] &&
    Down2 == down[num2] &&
    Up4 == up[num3] &&
    Down4 == down[num4] &&
    Up3 == up[num5] &&
    Down3 == down[num6] &&
    Up1 == up[num7] &&
    Down1 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up2 == up[num1] &&
    Down2 == down[num2] &&
    Up1 == up[num3] &&
    Down1 == down[num4] &&
    Up3 == up[num5] &&
    Down3 == down[num6] &&
    Up4 == up[num7] &&
    Down4 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up2 == up[num1] &&
    Down2 == down[num2] &&
    Up1 == up[num3] &&
    Down1 == down[num4] &&
    Up4 == up[num5] &&
    Down4 == down[num6] &&
    Up3 == up[num7] &&
    Down3 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  }
  //3214/3241/3124/3142/3412/3421
  else if (
    Up3 == up[num1] &&
    Down3 == down[num2] &&
    Up2 == up[num3] &&
    Down2 == down[num4] &&
    Up1 == up[num5] &&
    Down1 == down[num6] &&
    Up4 == up[num7] &&
    Down4 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up3 == up[num1] &&
    Down3 == down[num2] &&
    Up2 == up[num3] &&
    Down2 == down[num4] &&
    Up4 == up[num5] &&
    Down4 == down[num6] &&
    Up1 == up[num7] &&
    Down1 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up3 == up[num1] &&
    Down3 == down[num2] &&
    Up1 == up[num3] &&
    Down1 == down[num4] &&
    Up2 == up[num5] &&
    Down2 == down[num6] &&
    Up4 == up[num7] &&
    Down4 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up3 == up[num1] &&
    Down3 == down[num2] &&
    Up1 == up[num3] &&
    Down1 == down[num4] &&
    Up4 == up[num5] &&
    Down4 == down[num6] &&
    Up2 == up[num7] &&
    Down2 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up3 == up[num1] &&
    Down3 == down[num2] &&
    Up4 == up[num3] &&
    Down4 == down[num4] &&
    Up1 == up[num5] &&
    Down1 == down[num6] &&
    Up2 == up[num7] &&
    Down2 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up3 == up[num1] &&
    Down3 == down[num2] &&
    Up4 == up[num3] &&
    Down4 == down[num4] &&
    Up2 == up[num5] &&
    Down2 == down[num6] &&
    Up1 == up[num7] &&
    Down1 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  }
  //4213/4231/4123/4132/4312/4321
  else if (
    Up4 == up[num1] &&
    Down4 == down[num2] &&
    Up2 == up[num3] &&
    Down2 == down[num4] &&
    Up1 == up[num5] &&
    Down1 == down[num6] &&
    Up3 == up[num7] &&
    Down3 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up4 == up[num1] &&
    Down4 == down[num2] &&
    Up2 == up[num3] &&
    Down2 == down[num4] &&
    Up3 == up[num5] &&
    Down3 == down[num6] &&
    Up1 == up[num7] &&
    Down1 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up4 == up[num1] &&
    Down4 == down[num2] &&
    Up1 == up[num3] &&
    Down1 == down[num4] &&
    Up2 == up[num5] &&
    Down2 == down[num6] &&
    Up3 == up[num7] &&
    Down3 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up4 == up[num1] &&
    Down4 == down[num2] &&
    Up1 == up[num3] &&
    Down1 == down[num4] &&
    Up3 == up[num5] &&
    Down3 == down[num6] &&
    Up2 == up[num7] &&
    Down2 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up4 == up[num1] &&
    Down4 == down[num2] &&
    Up3 == up[num3] &&
    Down3 == down[num4] &&
    Up1 == up[num5] &&
    Down1 == down[num6] &&
    Up2 == up[num7] &&
    Down2 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  } else if (
    Up4 == up[num1] &&
    Down4 == down[num2] &&
    Up3 == up[num3] &&
    Down3 == down[num4] &&
    Up2 == up[num5] &&
    Down2 == down[num6] &&
    Up1 == up[num7] &&
    Down1 == down[num8]
  ) {
    document.getElementById("reward").style.display = "block";
    document
      .getElementById("shoot")
      .scrollIntoView({ behavior: "smooth", block: "end" });
  }
}
