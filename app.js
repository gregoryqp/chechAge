let yearOfBirthInput = document.querySelector("#yearOfBirth");
let monthOfBirthInput = document.querySelector("#monthOfBirth");
let dayOfBirthInput = document.querySelector("#dayOfBirth");

let yearsOutput = document.querySelector("#yearsOutput");
let monthsOutput = document.querySelector("#monthsOutput");
let daysOutput = document.querySelector("#daysOutput");

let checkButton = document.querySelector(".checkAgeButton");

let todayDate = new Date();
let dateOfBirth = new Date();

function pobierzRok() {
  dateOfBirth.setFullYear(yearOfBirthInput.value);
  dateOfBirth.setMonth(monthOfBirthInput.value);
  dateOfBirth.setDate(dayOfBirthInput.value);

  if (
    yearOfBirthInput.value == 0 ||
    monthOfBirthInput.value == 0 ||
    dayOfBirthInput.value == 0
  ) {
    console.log("pusto");
  } else {
    second = Math.abs(todayDate - dateOfBirth) / 1000;
    days = parseInt(todayDate - dateOfBirth) / 1000 / 60 / 60 / 24;
    years = parseInt(days / 365);
    months = parseInt((days % 365) / 30);
    remainingDays = parseInt((days % 365) % 30);

    yearsOutput.innerHTML = years;
    monthsOutput.innerHTML = months;
    daysOutput.innerHTML = remainingDays;

    yearOfBirthInput.value = null;
    monthOfBirthInput.value = null;
    dayOfBirthInput.value = null;
  }
}

checkButton.addEventListener("click", pobierzRok);
