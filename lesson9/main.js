// window.alert("Hello world");

// window.confirm("Do you want to continue?");

// window.prompt("Please enter your name!")
//window.location.href = "https://www.sitepoint.com/javascript/"

//Location, Location, Location
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.port);
console.log(window.location.pathname);
console.log(window.location.search);
console.log(window.location.hash);
console.log(window.location.origin);
console.log(window.location.toString);

//Controlling Windows
//console.log(window.open("https://www.sitepoint.com/javascript/"));
console.log(window.resizeTo(600, 400));

//The Document Object
document.write("<h1>My name is Danladi</h1>");

//Cookies
document.cookie = "name = Danladi";
document.cookie = "city = FCT";
document.cookie = "name = Dagwan"
document.cookie = "surname = Pan'an"

//Reading Cookies
//console.log(document.cookie);

const cookies = document.cookie.split("; ");
for(crumb of cookies) {
    const [key, value] = crumb.split("=");
    console.table(`The value of ${key} is ${value}`);
}

//setting date for cookies
const expireDate = new Date();
const tomorrow = expireDate.getTime() + 1000 * 60 * 60 * 24;
expireDate.setDate(tomorrow);

//onsole.log(document.cookie = `name = Dagwan Pan'an Danladi; expires = ${ expireDate.toUTCString()}`);

//Timing Functions
// window.setTimeout(() => alert("Time's UP!"), 3000);
// window.clearTimeout(5);

const person = {
    name: "Superman",
    introduce() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

setTimeout(person.introduce, 50);

//Animation



