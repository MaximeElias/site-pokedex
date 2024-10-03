<<<<<<< HEAD
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
=======
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
>>>>>>> 6d9a422cd732d1412e30154628f8d14ad95e3cde
