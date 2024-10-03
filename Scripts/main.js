const searchBar = document.getElementById('search-bar');

searchBar.addEventListener('input', function() {
    const filter = searchBar.value.toLowerCase();
    const pokemonList = document.querySelectorAll('.pokemon-list li');

    pokemonList.forEach(function(pokemon) {
        const pokemonName = pokemon.textContent.toLowerCase();
        if (pokemonName.includes(filter)) {
            pokemon.style.display = '';
        } else {
            pokemon.style.display = 'none';
        }
    });
});

document.querySelectorAll('.box-gen').forEach(function(box) {
    box.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});
