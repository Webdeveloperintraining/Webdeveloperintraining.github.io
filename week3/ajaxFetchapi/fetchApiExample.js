// EXAMPLE 1
// we made a request for some specific information from a remote server

//const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
//const results = fetch(url);

/*
Just as was mentioned, fetch returns a Promise. 
By default Javascript will not wait for a Promise to finish
before it moves on to the next line. This can cause big problems 
if the next line needs the results of the Promise to do it's job. 
*/

//console.log(results);

// EXAMPLE 2

/*
Javascript would run the line with fetch. Results would get set to a Promise initially.
Then the execution would move immediately on to the line doStuff(results) 
The problem is that our function expects results to be the data NOT a Promise! 
It won't work. We need a way to delay the execution of doStuff(results) UNTIL fetch
finishes and the Promise resolves.
*/
/*
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const results = fetch(url);
doStuff(results);
*/

// EXAMPLE 3
/*
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
async function getPokemon(url) {
  const results = await fetch(url);
  doStuff(results);
}

getPokemon(url);
*/

//const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
  results = data;
  console.log("first: ", results);
   results.results.forEach((pokemon) => {
    const div = document.createElement('div');
    div.textContent = pokemon.name;
    document.querySelector('main').appendChild(div);
  });
}

getPokemon(url);
console.log("second: ", results);