const body = document.body;

const searchWrapper = document.createElement("div");
searchWrapper.id = "search-wrapper";
body.append(searchWrapper);

const searchBar = document.createElement("div");
searchBar.id = "search-bar";

const searchLabel = document.createElement("label");
searchLabel.id = "search-label";
searchLabel.for = "search-input";
searchLabel.innerText = "Search?";
searchBar.append(searchLabel);

const searchInput = document.createElement("input");
searchInput.type = "search"; //type
searchInput.id = "search-input";
searchInput.placeholder ="...";
searchBar.append(searchInput);

const searchButton = document.createElement("button");
searchButton.id= "search-button";
searchButton.innerText = "Search"
searchBar.append(searchButton);

searchWrapper.append(searchBar);

const cardList = document.createElement("div");
cardList.id = "card-list";
searchWrapper.append(cardList);


const dataList = [];

const data = {
     data: 0,
     name: "hanne",
    age: 21,
     element: null
}

function createDataCards(){
     dataList.push(data);
     dataList.push(data);
     dataList.push(data);

     dataList.forEach(data => {
          const card = document.createElement("div");
          card.classList.add("card");
          card.classList.add("hide");
          data.element = card;

          const header = document.createElement("h2");
          const text = document.createElement("p");
          header.innerText = data.name;
          text.innerText = "age: " + data.age;

          card.append(header);
          card.append(text);
          cardList.append(card);
          console.log("card succesfully created");

     });
}

createDataCards();

searchInput.addEventListener("input", (e) => {
     const userInput = e.target.value; //get userinput
     console.log (userInput);

     dataList.forEach(data => {
          const isVisible = data.name.includes(userInput) || data.age.toString().includes(userInput); //check userinput against name and age.
          data.element.classList.toggle("hide", !isVisible); //toggle hide class. If isVisible, hide class is removed.
     });
     //we may want to convert userInput, data.name, and data.age to lowercase using .toLowerCase()
     //to avoid case sensitivity.
});

//adding fetched data to arraylist.
/*
let ticket = []

fetch(url)
.then (response => response.json())
.then (data => {
     ticket = data.map(ticket => {
          DOM card stuff
          return {showing: ticket.showing, phoneNumber: ticket.phoneNumber, element: card}
     });
 */

