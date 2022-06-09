///////////////////// hides and shows the dropdown /////////////////////

const countryDropdownSwitch = document.querySelector(".country-select-switch")
    // dropdown toggle

const countryDropDownMenu = document.querySelector("#country-dropdown")
    // actual dropdown

countryDropdownSwitch.addEventListener("click", () => {

    countryDropDownMenu.classList.toggle("active")
})




///////////////////// shows flag of each countries /////////////////////

let country = document.querySelectorAll(".country");
// li class="country"

const flag = document.querySelectorAll(".flag")
    // img class="flag"

flag.forEach(flag => {
        let countryVal = flag.parentNode.getAttribute("value").toLowerCase();
        /* To get the value of country, we have to use parentNode as it is
        the parent element of flag */

        flag.src = "./static/flags/".concat(countryVal, '.svg');
    })
    /* Since all flags are named after their 2 character country code,
     we will use concat to join the current value of countryVal and join it with .svg
     
     ex:
     
     countryVal = ph
     .concat(countryVal, '.svg') === ph.svg
     
     flag.src = ./static/flags/ph.svg
     */




///////////////////// simulates select actions /////////////////////

const selectedCountry = document.getElementById("selected-country");
// displays the country that you had select

const inputCountry = document.getElementById("country-input");
// input with type hidden used to pass value to your backend server (I use flask).

let countryName = document.querySelectorAll(".country-name");
// text content in each list which are the actual country names

countryName.forEach(country => {
    country.parentNode.addEventListener('click', () => {
        countryDropDownMenu.classList.remove("active");
        selectedCountry.textContent = country.textContent;
        inputCountry.value = country.textContent;
        inputCountry.setAttribute("value", country.textContent);
    })
})

/* While looping through each country name
   
   add an event listener (click) to the parent element
   when the parent is clicked,
       hide the dropdown
       change the text content of the dropdown toggle to the content of the list item
       change the value and the value attribute of the input with type "hidden" to the content of the list item
   */




///////////////////// Simulates autocomplete /////////////////////

const countrySearch = document.querySelector("#country-search");

countrySearch.addEventListener("input", () => {
    countryName.forEach(country => {
        text = country.textContent.toLowerCase();
        search = countrySearch.value.toLowerCase();
        found = text.indexOf(search);

        if (found != -1) {
            country.parentNode.style.display = "grid";
        } else {
            country.parentNode.style.display = "none";
        }
    })
});

/* Add event listener (oninput) to the search input element
         While looping through each country name
         set text to the name of the country in lowercase (Using console will log all country names)
         set search to the user input in lowercase
         set found to use indexOf to find the index of search value in country names

         if the value of found is not equal to negative one, set display to grid
             else display none.

         ex: search = 'ph'
             found = the indexOf() countries where "ph" occured in.

             found in index 19
                all countries that are -1 will have a display of none.
         */