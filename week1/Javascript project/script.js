async function getPokemonData() {
    //This variable selects a random number using math.floor and math.random
    let random=Math.floor(Math.random()*(898-1))+1;
    // We pull data from PokeAPI using fetch
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    //check to see if the fetch was successful
    if (response.ok) {
        const pokemonData = await response.json();
        pokemon(pokemonData);
    }
};

function pokemon(pokemon) {
    //This function creates a heading and image elements in the id= img-section 
    let section=document.querySelector("#img-section")
    let newImg=document.createElement("img");
    let heading=document.createElement("h2");
    newImg.setAttribute("src",pokemon.sprites.other.home.front_default);
    newImg.setAttribute("alt",pokemon.name);
    heading.textContent=pokemon.name;
    section.appendChild(heading);
    section.appendChild(newImg);
}
document.querySelector("#random").addEventListener("click",getPokemonData);

