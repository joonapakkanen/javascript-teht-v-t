
function getJokes() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(function (response) {
            //.then, palauttaa tässä Promisen (lupauksen), jota käytetään seuraavassa then-funktiossa. 
            return response.json();
        })
        .then(function (result) {
            //Jos lupaus onnistuu (eli lupaus on täytetty), tämä toiminto suoritetaan
            if (result.message) {
                document.getElementById("account-data").innerHTML += "<br>" + "<i>" + result.message + "</i>";
            } else {
                // show data in DIV
                document.getElementById("account-data").innerHTML += "<br>" + "<i>" + result.name + "</i>";
                document.getElementById("account-data").innerHTML += "<br>" + "<i>" + result.company + "</i>";
            }
        })
        .catch(function (error) {
            //Jos lupaus epäonnistuu (eli lupaus on hylätty), tämä toiminto suoritetaan
            console.log(error);
        });
}