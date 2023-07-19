const form = document.querySelector("form");
const bmi = result.value;
const clock= document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString(); 
}, 1000)




form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const guide = document.querySelector("#guide");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML`Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 1000)).toFixed(2);

    result.innerHTML = `<span>${bmi} </span>`;
  }

  const bmi = weight / ((height * height) / 10000).toFixed(2);
  if (parseInt(bmi) < 18) {
    result.innerHTML = `${bmi} you are under weight`;
  } else if (parseInt(bmi) > 24) {
    result.innerHTML = `${bmi} you are over weight`;
  } else if (parseInt(bmi) > 18 || parseInt(bmi) < 24) {
    result.innerHTML = `${bmi} you are in normal range`;
  }
});

//   console.log(height);
