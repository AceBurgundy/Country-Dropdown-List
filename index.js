const countryDropdownSwitch = document.querySelector(".country-select-switch")
const countryDropDownMenu = document.querySelector("#country-dropdown")

countryDropdownSwitch.addEventListener("click", () => {

    countryDropDownMenu.classList.toggle("active")
})

let country = document.querySelectorAll(".country");
// li class="country"

const flag = document.querySelectorAll(".flag")
    // img class="flag"

for (var i = 0; i < country.length; i++) {
    let countryVal = country[i].getAttribute("value");

    flag[i].src = "./static/flags/".concat(countryVal, '.svg')
        //flag = img
        //flage[i].src is the same as <img class="flag" src=""
        //".static/flags/" current folder of flags
        //concat joins strings
        // inshort
        // <img class="flag" src=" "./static/flags/{ value of country }.png "
        // ex
        // <img class="flag" src=" "./static/flags/af.png"
}

const selectedCountry = document.getElementById("selected-country");
const inputCountry = document.getElementById("country-input");
let countryName = document.querySelectorAll(".country-name");

countryName.forEach(country => {
    country.parentNode.addEventListener('click', () => {
        countryDropDownMenu.classList.remove("active");
        selectedCountry.textContent = country.textContent;
        inputCountry.value = country.textContent;
        inputCountry.setAttribute("value", country.textContent);
    })
})