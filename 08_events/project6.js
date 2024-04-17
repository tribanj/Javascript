//generate a random colors

const randomColors = function () {
  const hex = "0123456789ABCDF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChabginColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColors();
  }
};
const stopChabginColor = function () {
  clearInterval(intervalId);
  intervalId = null;
  alert("background changing stopped");
};

document.querySelector("#start").addEventListener("click", startChabginColor);

document.querySelector("#stop").addEventListener("click", stopChabginColor);
