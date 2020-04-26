'use strict';

//Get method path to dog facts. Response object quantity is set to 10
const dogDataUrl = "https://cat-fact.herokuapp.com/facts/random?animal_type=dog&amount=10";
//Get method path to cat fact. Response object quantity is set to 10
const catDataUrl = "https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=10";

let listOfFacts = document.querySelector('.listOfFacts'),
    btnGenerate = document.querySelector('#generate'),
    btnBack = document.querySelector('#back');

document.addEventListener('DOMContentLoaded', function () {
    btnBack.disabled = true;
});

//Main app rest GET method
function get_data_from_url(url) {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send(null);
    return request.responseText;
};

let dogFactsObj = JSON.parse(get_data_from_url(dogDataUrl));
let catFactsObj = JSON.parse(get_data_from_url(catDataUrl));

//Facts page initialization
const renderPage = (animalArr) => {
    animalArr.forEach((item, i) => {
        let li = document.createElement('li');
        li == i;
        li.textContent = item.text;
        listOfFacts.appendChild(li);
    });
}

renderPage(catFactsObj);

//New facts insertion to actual DOM document
const onClick = (facts) => {
    Array.from(document.getElementsByTagName('li')).forEach(function (item, i) {
        item.textContent = facts[i].text;
    })
};

btnGenerate.addEventListener('click', function () {
    onClick(dogFactsObj)
    btnBack.disabled = false;
});

btnBack.addEventListener('click', function () {
    onClick(catFactsObj)
    btnBack.disabled = true;
});
