/*
async function ask() {
    const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
    fetch(url)
    .then(function (response){
        return response.json();
    })
    .then(function (json){
        const prophetData = json.prophets;
        //console.log(prophetData);
        printProhets(prophetData)
    });
}
ask();
*/
/*
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
let results = null;
async function getProphets(url) {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    printProhets(data);
  }
}

function printProhets(data) {
      results = data;
      results.forEach((prophet) => {
      const h2= document.querySelector('h2');
      const p = document.querySelector('p');
      const p2 = document.querySelector('p');
      h2.textContent=`${prophet.name} ${prophet.lastname}`;
      p.textContent=`Birth date: ${prophet.birthdate}`;
      p2.textContent=`Birth Place: ${prophet.birthplace}`;
    //   document.querySelector('.card').appendChild(h2);
    //   document.querySelector('card').appendChild(p);
    //   document.querySelector('.card').appendChild(p2);
        // assumes you have a <main> element in your HTML document
    });
  }

    //console.log(prophetData);
    */
/*
function printData(data) {
    const prophetCard = document.getElementById('prophet-card');
    console.log(prophetCard.getElementsByTagName('p'));
    //const card = document.querySelector('.card');
    //console.log(data.lastname);
    /*prophetCard.childElement(0).textContent=`${data.name} ${data.lastname}`;
    prophetCard.childElement(1).textContent=`Birth date: ${data.birthdate}`;
    prophetCard.childElement(2).textContent=`Birth Place: ${data.birthplace}`;
    prophetCard.childElement(3).setAttribute('src', prophet.imageurl);
    prophetCard.setAttribute('alt',`${data.name} ${data.lastname}`);

    card.appendChild(prophetCard.card.childElement(0));
    card.appendChild(prophetCard.card.childElement(1));
    card.appendChild(prophetCard.card.childElement(2));
    card.appendChild(prophetCard.card.childElement(3));
    card.appendChild(prophetCard.card.childElement(4));
}  
*/  

const requestURL = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('.card');

fetch(requestURL)
.then(function (response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject)// temporary checking for valid response and data parsing
    const prophets=jsonObject["prophets"];
    prophets.forEach(displayProphets)
});

function displayProphets(prophet){
     // Create elements to add to the document
   let card=document.createElement("section");
   let heading=document.createElement("h2");
   let paragraph=document.createElement("p");
   let paragraph2=document.createElement("p");
   let portrait=document.createElement("img");

   // Change the textContent property of the h2 element to contain the prophet's full name
    heading.textContent=`${prophet.name} ${prophet.lastname}`;
    paragraph.textContent=`Date of Birth: ${prophet.birthdate}`;
    paragraph2.textContent=`Place of Birth: ${prophet.birthplace}`;

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th  Latter-day President`);
    portrait.setAttribute('loading','lazy');

    // Add/append the section(card) with the h2 element
    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(paragraph2);
    card.appendChild(portrait);
    

    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
}