

// --------- Adds <li> items to the DOM ----------

const myList = document.getElementById('myList');
// new list item

let newListItem = document.createElement('li');
newListItem.innerHTML = `<a href="#section1">Section1</a>
<a href="#section2">Section2</a>
<a href="#section3">Section3</a>`;

myList.appendChild(newListItem);


// ------------responsive Navigation on smaller screens -----------

const navbarSwitch = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('#myList');
const navbarLinks = document.querySelectorAll('.navbar__menu a');

navbarSwitch.addEventListener("click", navbarSwitchClick);

function navbarSwitchClick() {
    navbarSwitch.classList.toggle("open-navbar-toggler");
    navbarMenu.classList.toggle("open");
}

navbarLinks.forEach(elem => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick() {
    smoothScroll(event);
    if(navbarMenu.classList.contains("open")){ // closed navbar on smaller screens
        navbarSwitch.click();
    }
}

// script to create smooth scrolling  for navigation

// *********** window.scrollInToView()**************
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")==="#" ? "body" : event.currentTarget.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}





























