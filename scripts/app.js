// -------Select Element
let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");
let phoneError =document.getElementById('phone-error');
let phoneInput=document.querySelector('.phoneInput');
let emailError =document.getElementById('email-error');
let emailInput=document.querySelector('.emailInput');


// -------------------------------validate phone number and email with RegEx

// validate phone number
function validatePhoneNumber(number) {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(number);
}
phoneInput.addEventListener('keydown',()=>{
  let phone = phoneInput.value;
  if (!validatePhoneNumber(phone)) {
      phoneError.classList.remove('hidden');
  } else {
      phoneError.classList.add('hidden');
  }
});

// validate Email
function validateEmail(email) {
  let regex =  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  return regex.test(email);
}
emailInput.addEventListener('keydown',()=>{
  let email = emailInput.value;
  if (!validateEmail(email)) {
      emailError.classList.remove('hidden');
  } else {
      emailError.classList.add('hidden');
  }
});




// -------------------------------with selete a country ,show cities of that country 
// -------My Data
let countriesData = [
    {Country:"Iran", Cities:["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"]},
    {Country:"Turkey", Cities:["Istanbul", "Ezmir", "Ankara", "Antaliya"]},
    {Country:"US", Cities:["Los Angles", "San Diego", "Chicago"]},
];

// -------function for find Country Object from Input and display in city select box (with Object destructuring) ----------------

const getCountry= countryInput =>{
  let mainCountry=countriesData.find(countryobj=>countryobj.Country==countryInput )
  return mainCountry
}
countrySelectBox.addEventListener("change",()=>{
  if (countrySelectBox.value === "Please Select") {
    citySelect.innerHTML = "";
    citySelect.innerHTML += "<option>Select City</option>";
  } else {
    let {Cities}=getCountry(countrySelectBox.value);
    // console.log(Cities);
    citySelect.innerHTML = "";
    Cities.forEach((city)=> {
        citySelect.innerHTML +=` <option> ${city} </option>`;
    });
  }
});
