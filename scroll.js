// setting up nav slider

const menuButton = document.querySelector("#menu-Button");
const links = document.querySelector("#links");
const flowLinks = document.querySelector("#flow-links");
const flowMenu = document.querySelector("#flow-menu");

flowLinks.innerHTML = links.innerHTML;

menuButton.addEventListener("click", function () {
  flowSlide();
});

// dynamic date for footer

const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

// sticky elements

const topHeader = document.querySelector(".top-header");
const topSign = document.querySelector(".top-sign");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 250) {
    topSign.classList.remove("hidden");
  } else {
    topSign.classList.add("hidden");
  }
  if (window.pageYOffset > 80) {
    topHeader.classList.add("fixed");
    topHeader.classList.add("bg-gray-900");
  } else {
    topHeader.classList.remove("fixed");
    topHeader.classList.remove("bg-gray-900");
  }
});

//
// smooth scrolling
//

// sliding nav hiding after clicking

const flowButtons = flowLinks.querySelectorAll("ul>li");
flowButtons.forEach((flowButton) => {
  flowButton.addEventListener("click", function () {
    flowSlide();
  });
});

// fixed-nav solution

const menus = document.querySelectorAll(".menu");
menus.forEach((menu) => {
  let buttons = menu.querySelectorAll("ul>li>a");
  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const id = e.currentTarget.getAttribute("href");
      const element = document.querySelector(id);
      const navHeight = topHeader.getBoundingClientRect().height;

      const sliderHeight =
        flowMenu.parentElement.getBoundingClientRect().height;
      let position = 0;
      if (!flowMenu.parentElement.classList.contains("hidden")) {
        position = element.offsetTop - navHeight + sliderHeight;
      } else {
        position = element.offsetTop - navHeight;
      }

      console.log(sliderHeight);
      console.log(position);
      console.log(navHeight);

      window.scrollTo({
        left: 0,
        top: position,
      });
    });
  });
});

//

//

//

//

// flow slide function

function flowSlide() {
  flowMenu.classList.toggle("-translate-y-full");
  flowMenu.classList.toggle("translate-y-0");
  flowMenu.parentNode.classList.toggle("h-0");
  flowMenu.parentNode.classList.toggle("h-full");
}
