const btnContinue = document.querySelector(".button");
const time = document.getElementById("time");

if (typeof time !== "undefined" && time !== null) {
  time.onclick = function () {
    let selectedValue = [];
    for (let option of document.getElementById("time").options) {
      if (option.selected) {
        selectedValue.push(option.value);
      }
    }
    localStorage.setItem("TIME", selectedValue[0]);
  };
}

if (typeof time !== "undefined" && time !== null) {
  btnContinue.addEventListener("click", function () {
    window.location.href = "/details.html";
  });
}

console.log(localStorage.getItem("TIME"));

// DETAILS

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let number = document.getElementById("number");
let booking = document.querySelector(".bookingtext").textContent;

localStorage.setItem("firstName", firstName);
localStorage.setItem("lastName", lastName);
localStorage.setItem("email", email);
localStorage.setItem("number", number);

booking = booking.innerHTML = `Thank you for placing a booking with us ${
  firstName + lastName
} an email will be sent to
      ${email} for your booking ${selectedValue[0]}`;
