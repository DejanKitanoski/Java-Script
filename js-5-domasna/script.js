fetch(`https://pokeapi.co/api/v2/pokemon`)
.then (response => {
    return response.json();
})
.then(data =>{
    data.forEach(pokemon => {
        <div id="pokemon-ball">
            <p class="pokemon-name">${pokemon.name}</p>
            <img class="slika" src="${details.sprites.front_default}" alt="${pokemon.name}"></img>
        </div> 
    });
})
