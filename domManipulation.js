// SHOP WEB PAGE

const petList = document.querySelector("#pet-list");
let newPet = document.createElement("li");
newPet.textContent = "Guinea Pig";
petList.appendChild(newPet);
const divs = document.querySelectorAll("div");

//remove not a shop
const notAShop = document.getElementById("not-a-shop");
notAShop.remove();

// set up candy shop
const shops = document.getElementsByClassName("shop");
const candyShop = document.getElementById("candy-shop");
const candyHeader = document.createElement("h1");

candyHeader.textContent = "Candy Shop";
candyShop.appendChild(candyHeader);

const candyOls = document.createElement("ol");
candyShop.appendChild(candyOls);

// LOLIPOPS !

let candies = ["Lolipop", "Sour patch", "candy cranes", "chocolate bars"];

candies.map((candy) => {
  const candyList = document.createElement("li");
  candyList.textContent = candy;
  candyOls.appendChild(candyList);
});

const myFunction = () => {
  alert("LIKED!");
};

// CREATE COPYRIGHTS

divs.forEach((div) => {
  const copyrightElement = document.createElement("h2");
  copyrightElement.textContent = "© 2022 SEB";
  div.appendChild(copyrightElement);
});

// CREATE BUTTONS

const buttonCreator = () => {
  let counter = 0;
  while (counter < shops.length) {
    const button = document.createElement("button");
    button.addEventListener("click", myFunction);
    button.textContent = "Like This Shop";
    shops[counter].appendChild(button);
    counter++;
  }
};

buttonCreator();
