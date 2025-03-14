let kommuneList = [];
let regionList = [];


fetch("https://api.dataforsyningen.dk/kommuner")
    .then(response => {
        if (response.ok) {
            console.log("json()ing kommuner");
            return response.json(); //json() triggers new promise(.then)
        } else {
            console.log("fetch kommuner not succesful");
        }
    }).then(data => {
    console.log(data);
    //defining kommuneobjekt.
    kommuneList = data.map((kommune) => {

        const kommuneCard = document.createElement("div");

        return {
            kode: kommune.kode,
            navn: kommune.navn,
            regionskode: kommune.regionskode,
            regionNavn: kommune.region.navn,
            element: kommuneCard
        };//end of kommune object.
    });//end of map kommunelist

    createKommuneCards();
}).catch(error => console.log("fejl i kommuner: " + error));

//get regions. Not used yet.
/*
fetch("https://api.dataforsyningen.dk/regioner")
    .then(response => {
        console.log("json()ing regioner.");
        return response.json();
    })
    .then(data => {
        console.log(data)
        data.forEach((dataElement) => {
            regioner.push(dataElement);
        });
        console.log("regioner: " + regioner);
    })
    .catch(error => console.log("fejl i regioner: " + error));
*/

