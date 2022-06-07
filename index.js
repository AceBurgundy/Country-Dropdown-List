const countryDropdownSwitch = document.querySelector(".country-select-switch")

countryDropdownSwitch.addEventListener("click", () => {
    const countryDropDownMenu = document.querySelector("#country-dropdown")

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

const countrySearch = document.querySelector("#country-search")

countrySearch.addEventListener("keyup", () => {
    console.log(countrySearch.value);
})