// var deButton = document.querySelector(".menu");
// var deNavigatie = document.querySelector("nav");

// deButton.onclick = toggleMenu;

// function toggleMenu() {  
//   var deNav = document.querySelector("nav ul");
//   deNav.classList.toggle("toonmenu");
//   deNavigatie.classList.toggle("navcolor");
//   console.log("clicked");
// }


// window.onkeydown = handleKeydown;

// function handleKeydown(event) {
//   if (event.key == "Escape") {
//     var deNav = document.querySelector("nav ul");
//     deNavigatie.classList.toggle("navcolor");
//     deNav.classList.remove("toonmenu");
//   }
// }

// var deButton = document.querySelector(".menu");
// var deNavigatie = document.querySelector("nav");

// deButton.onclick = toggleMenu;

// function toggleMenu() {
//     var deNav = document.querySelector("nav ul li");
//     deNav.classList.toggle("liAppear");
//     // deNavigatie.classList.toggle("navcolor");
//     deNavigatie.classList.toggle("toonmenu");
// }

// window.onkeydown = handleKeydown;

// function handleKeydown(event) {
//     if (event.key == "Escape") {
//         var deNav = document.querySelector("nav ul li");
//         deNav.classList.remove("liAppear");
//         // deNavigatie.classList.remove("navcolor");
//         deNavigatie.classList.remove("toonmenu");

//     }
// }

var deButton = document.querySelector(".menu");
var deNavigatie = document.querySelector("nav");

deButton.onclick = toggleMenu;

function toggleMenu() {
    var deItems = document.querySelectorAll("nav ul li");
    deNavigatie.classList.toggle("toonmenu");

    if (deNavigatie.classList.contains("toonmenu")) {
        deItems.forEach(function(item) {
            item.classList.add("liAppear");
        });
    } else {
        deItems.forEach(function(item) {
            item.classList.remove("liAppear");
        });
    }
}

window.onkeydown = handleKeydown;

function handleKeydown(event) {
    if (event.key == "Escape") {
        var deItems = document.querySelectorAll("nav ul li");
        deNavigatie.classList.remove("toonmenu");
        deItems.forEach(function(item) {
            item.classList.remove("liAppear");
        });
    }
}