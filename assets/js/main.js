// Start event on nav element
let lis = document.querySelectorAll("nav .items li");
let myInfoDivs = document.querySelectorAll("nav .items li .info");
let icons = document.querySelectorAll("nav .items li .fa");

lis.forEach((li) => {
  li.addEventListener("click", () => {
    myInfoDivs.forEach((div) => {
      if (li.id === div.id) {
        div.classList.toggle("active");
      } else {
        div.classList.remove("active");
      }
      icons.forEach((icon) => {
        if (li.id === icon.id) {
          icon.classList.toggle("rotate");
        } else {
          icon.classList.remove("rotate");
        }
      });
    });
  });
});
// End event on nav element


// click on bars to show (nav,close icon) and hide bars
let bars = document.querySelector("nav .fa-solid");
let divItems = document.querySelector("nav .items");

bars.addEventListener("click", () => {
  divItems.classList.add("show");
  bars.style.display = "none";
});

// click close to remove show class and show bars
let closeBtn = document.querySelector(".fa-circle-xmark");
closeBtn.addEventListener("click", () => {
  divItems.classList.remove("show");
  bars.style.display = "contents";
});

//filtering
let myLisToFilter = document.querySelectorAll(".category li");
let myCards = document.querySelectorAll(".cards .card");

myLisToFilter.forEach((element) => {
  element.addEventListener("click", removeAddActive);
  element.addEventListener("click", manageCards);
});

//delete active class from all li then add active class to the clicked li
function removeAddActive() {
  myLisToFilter.forEach((element) => {
    element.classList.remove("active");
  });
  this.classList.add("active");
}

// first hide all the cards then add the related cards
function manageCards() {
  myCards.forEach((card) => {
    card.style.display = "none";
  });
  let cards = document.querySelectorAll(this.dataset.cat);
  cards.forEach((element) => {
    element.style.display = "flex";
  });
}
