document.forms.hero.heroName.focus();
hero.realName = form.realName.value;

const form = document.forms["hero"];
form.addEventListener("Submit", makeHero, false);

function makeHero() {
    // prevent the form from being submitted
    const hero = {};
    // create an empty object
    hero.name = form.heroName.value;
    // create a name property based on the input field's value
    alert(JSON.stringify(hero));
    // convert object to JSON string and display in alert dialog
       hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            here.powers.push(form.powers[i].value);
        }
    
    }
    hero.category = form.category.value;
    hero.city = form.city.value;
    form.city.options[form.city.selectedIndex].text;
    form.city.option[0].text;
    hero.origin = form.origin.value;
}

form.addEventListener("submit", validate, false);
form.hereName.addEventListener('keyup', disableSubmit, false);

function validate(event) {
    const firstLetter = form.hereName.value[0];
    if  (firstLetter.toUpperCase() === "X") {
        event.preventDefault();
        alert("Your name is not allowed to start with X!");
    }
}
const label = form.querySelector("label");
const error = document.getElementById("div");
error.classList.add("error");
error.textContent = "! Your name is not allowed to start with X.";

function validateInline() {
    const hereName = this.value.toUpperCase();
    if (hereName.startsWith("X")) {
        error.style.display = "block";
    }else {
        error.style.display = "none";
    }
}

function disableSubmit(event) {
    if (event.target.value === "") {
        document.getElementById("submit").disabled = true;
    }else {
        document.getElementById("submit").disable = false;
    }
}

