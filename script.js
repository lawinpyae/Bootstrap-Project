// navbar waypoint script
var waypoint = new Waypoint({
  element: document.getElementById("services"),
  handler: function (direction) {
    if (direction === "down") {
      document.querySelector(".navbar").classList.add("nav-controller");
      document.querySelector(".navbar").classList.add("animate__backInDown");
      document.querySelector(".navbar").classList.add("shadow-zinc-300");
    } else {
      document.querySelector(".navbar").classList.remove("nav-controller");
      document.querySelector(".navbar").classList.remove("animate__backInDown");
      document.querySelector(".navbar").classList.remove("shadow");
      document.querySelector(".navbar").classList.remove("shadow-zinc-300");
    }
  },
  offset: "5%",
});

//  Footer icon waypoint script
var waypoint = new Waypoint({
  element: document.getElementById("pricing"),
  handler: function (direction) {
    if (direction === "down") {
      document.querySelector(".footer-icon").classList.add("footer-icon-show");
      document.querySelector(".footer-icon").classList.add("animate__fadeInUp");
    } else {
      document
        .querySelector(".footer-icon")
        .classList.remove("footer-icon-show");
      document
        .querySelector(".footer-icon")
        .classList.remove("animate__fadeInUp");
    }
  },
  offset: "5%",
});

// my script
let changeThem = document.querySelector("#changeThem");
let navbarThem = document.querySelector(".navbar");

let card = document.querySelectorAll(".card");

// loading..
let load = document.querySelector(".load");

window.addEventListener("load", () => {
  load.style.display = "none";
});

let changeThemDark = () => {
  document.documentElement.setAttribute("data-them", "dark");
  localStorage.setItem("data-them", "dark");

  navbarThem.classList.add("navbarThem");
  navbarThem.classList.remove("bg-body-tertiary");

  navbarThem.classList.remove("shadow-lg");
  navbarThem.classList.add("border-bottom");
  navbarThem.classList.add("pdf-border-zinc-800");

  // card shadow removing....
  for (let i = 0; i < card.length; i++) {
    card[i].classList.remove("shadow-lg");
    card[i].classList.remove("shadow");
    card[i].classList.remove("border-0");
    card[i].classList.add("pdf-border-zinc-700");
  }

  // Twitter icon white....
  document.querySelector(".twitter-1").classList.remove("text-black");
  document.querySelector(".twitter-1").classList.add("text-white");

  document.querySelector(".twitter-2").classList.remove("text-black");
  document.querySelector(".twitter-2").classList.add("text-white");

  document.querySelector(".twitter-3").classList.remove("text-black");
  document.querySelector(".twitter-3").classList.add("text-white");

  document.querySelector(".twitter-4").classList.remove("text-black");
  document.querySelector(".twitter-4").classList.add("text-white");
};

let changeThemLight = () => {
  document.documentElement.setAttribute("data-them", "light");
  localStorage.setItem("data-them", "light");

  navbarThem.classList.remove("navbarThem");
  navbarThem.classList.add("bg-body-tertiary");
  navbarThem.classList.add("shadow-lg");
  navbarThem.classList.remove("border-bottom");
  navbarThem.classList.remove("pdf-border-zinc-800");

  // card shadow removing....
  for (let i = 0; i < card.length; i++) {
    card[i].classList.add("shadow-lg");
    card[i].classList.add("shadow");
    card[i].classList.add("border");
    card[i].classList.remove("pdf-border-zinc-700");
  }

  // Twitter icon white....
  document.querySelector(".twitter-1").classList.add("text-black");
  document.querySelector(".twitter-1").classList.remove("text-white");

  document.querySelector(".twitter-2").classList.add("text-black");
  document.querySelector(".twitter-2").classList.remove("text-white");

  document.querySelector(".twitter-3").classList.add("text-black");
  document.querySelector(".twitter-3").classList.remove("text-white");

  document.querySelector(".twitter-4").classList.add("text-black");
  document.querySelector(".twitter-4").classList.remove("text-white");
};

changeThem.addEventListener("change", () => {
  if (localStorage.getItem("data-them") === "dark") {
    changeThemLight();
  } else changeThemDark();
});

if (localStorage.getItem("data-them") === "dark") {
  changeThemDark();
  changeThem.setAttribute("checked", "checked");
} else changeThemLight();

// navbar hidden
let container = document.querySelector(".nav-container");
let div1 = document.querySelector(".div1");
let div2 = document.querySelector(".div2");
let div3 = document.querySelector(".div3");

container.addEventListener("click", () => {
  div1.classList.toggle("div1-hidden");
  div2.classList.toggle("div2-hidden");
  div3.classList.toggle("div3-hidden");
});

// Scrollreveal framework script
ScrollReveal({
  origin: "bottom",
  distance: "300px",
  duration: 2000,
}).reveal(".headline", {
  interval: 200,
  reset: true,
  scale: 0.8,
  viewFactor: 0.2,
});
