const body = document.body;

const searchWrapper = document.createElement("div");
searchWrapper.id = "search-wrapper";
body.append(searchWrapper);

const searchBar = document.createElement("div");
searchBar.id = "search-bar";

const searchLabel = document.createElement("label");
searchLabel.id = "search-label";
searchLabel.for = "search-input";
//searchLabel.innerText = "Search?";
searchBar.append(searchLabel);

const searchInput = document.createElement("input");
searchInput.type = "search"; //type
searchInput.id = "search-input";
searchInput.placeholder ="Søg kommuner...";
searchBar.append(searchInput);

const searchButton = document.createElement("button");
searchButton.id= "search-button";
searchButton.innerText = "Search"
//searchBar.append(searchButton);

searchWrapper.append(searchBar);

const cardList = document.createElement("div");
cardList.id = "card-list";
searchWrapper.append(cardList);

//kommuneList.length < 1 ? createKommuneCards() : console.log("ingen kommuner");

function createKommuneCards(){
     kommuneList.forEach(kommune => {
          //create div, add classes.
          const card = document.createElement("div");
          card.classList.add("card");
          card.id = "kommune-card-" + kommune.kode;
          kommune.element = card; //add card to kommune card.

          const header = document.createElement("h2");
          const text = document.createElement("p");
          header.innerText = kommune.navn;
          text.innerText = "kode: " + kommune.kode
          + "\nregion: " + kommune.regionNavn;

          card.append(header);
          card.append(text);
          cardList.append(card);
          //console.log("card succesfully created");

     });
}

searchInput.addEventListener("input", (e) => {
     const userInput = e.target.value.toLowerCase(); //get userinput in lowercase.
     //console.log (userInput);

     kommuneList.forEach(kommune => {
          const isVisible = kommune.navn.toLowerCase().includes(userInput) ||
              kommune.kode.toLowerCase().includes(userInput); //check userinput against name and age.
          kommune.element.classList.toggle("hide", !isVisible); //toggle hide class. If isVisible, hide class is removed.
     });
});
