let menuContainer = document.getElementById("menuContainer");
let menuIcon = document.getElementById("menuIcon");
let mobileMenu = document.getElementById("mobileMenu");

menuContainer.addEventListener("click", () => {
  if (menuIcon.getAttribute("data") == "close") {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
    menuIcon.setAttribute("data", "open");
    mobileMenu.classList.remove("hidden");
  } else {
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    menuIcon.setAttribute("data", "close");
    mobileMenu.classList.add("hidden");
  }
});
