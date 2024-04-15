const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  const guide = document.querySelector("#guide");

  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    result.innerHTML = `"Please give valid height and weight" ${height}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    result.innerHTML = `<span>${bmi} </span>`;
  }
  
  if (result < 19) {
    guide.innerHTMl = "Under Weight";
  } else if (result > 24.9) {
    guide.innerHTML = "Normal Weight";
  } else {
    guide.innerHTML = "Over Weight please controle your weight";
  }
});
