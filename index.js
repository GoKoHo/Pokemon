const kantoPokemon = [
    { id: 1, name: "Bulbasaur", image: "1.png" },
    { id: 2, name: "Ivysaur", image: "2.png" },
    { id: 3, name: "Venusaur", image: "3.png" },
    { id: 4, name: "Charmander", image: "4.png" },
    { id: 5, name: "Charmeleon", image: "5.png" },
    { id: 6, name: "Charizard", image: "6.png" },
    { id: 7, name: "Squirtle", image: "7.png" },
    { id: 8, name: "Wartortle", image: "8.png" },
    { id: 9, name: "Blastoise", image: "9.png" },
    { id: 10, name: "Caterpie", image: "10.png" },
    { id: 11, name: "Metapod", image: "11.png" },
    { id: 12, name: "Butterfree", image: "12.png" },
    { id: 13, name: "Weedle", image: "13.png" },
    { id: 14, name: "Kakuna", image: "14.png" },
    { id: 15, name: "Beedrill", image: "15.png" },
    { id: 16, name: "Pidgey", image: "16.png" },
    { id: 17, name: "Pidgeotto", image: "17.png" },
    { id: 18, name: "Pidgeot", image: "18.png" },
    { id: 19, name: "Rattata", image: "19.png" },
    { id: 20, name: "Raticate", image: "20.png" },
    { id: 21, name: "Spearow", image: "21.png" },
    { id: 22, name: "Fearow", image: "22.png" },
    { id: 23, name: "Ekans", image: "23.png" },
    { id: 24, name: "Arbok", image: "24.png" },
    { id: 25, name: "Pikachu", image: "25.png" },
    { id: 26, name: "Raichu", image: "26.png" },
    { id: 27, name: "Sandshrew", image: "27.png" },
    { id: 28, name: "Sandslash", image: "28.png" },
    { id: 29, name: "Nidoran♀", image: "29.png" },
    { id: 30, name: "Nidorina", image: "30.png" },
    { id: 31, name: "Nidoqueen", image: "31.png" },
    { id: 32, name: "Nidoran♂", image: "32.png" },
    { id: 33, name: "Nidorino", image: "33.png" },
    { id: 34, name: "Nidoking", image: "34.png" },
    { id: 35, name: "Clefairy", image: "35.png" },
    { id: 36, name: "Clefable", image: "36.png" },
    { id: 37, name: "Vulpix", image: "37.png" },
    { id: 38, name: "Ninetales", image: "38.png" },
    { id: 39, name: "Jigglypuff", image: "39.png" },
    { id: 40, name: "Wigglytuff", image: "40.png" },
    { id: 41, name: "Zubat", image: "41.png" },
    { id: 42, name: "Golbat", image: "42.png" },
    { id: 43, name: "Oddish", image: "43.png" },
    { id: 44, name: "Gloom", image: "44.png" },
    { id: 45, name: "Vileplume", image: "45.png" },
    { id: 46, name: "Paras", image: "46.png" },
    { id: 47, name: "Parasect", image: "47.png" },
    { id: 48, name: "Venonat", image: "48.png" },
    { id: 49, name: "Venomoth", image: "49.png" },
    { id: 50, name: "Diglett", image: "50.png" },
    { id: 51, name: "Dugtrio", image: "51.png" },
    { id: 52, name: "Meowth", image: "52.png" },
    { id: 53, name: "Persian", image: "53.png" },
    { id: 54, name: "Psyduck", image: "54.png" },
    { id: 55, name: "Golduck", image: "55.png" },
    { id: 56, name: "Mankey", image: "56.png" },
    { id: 57, name: "Primeape", image: "57.png" },
    { id: 58, name: "Growlithe", image: "58.png" },
    { id: 59, name: "Arcanine", image: "59.png" },
    { id: 60, name: "Poliwag", image: "60.png" },
    { id: 61, name: "Poliwhirl", image: "61.png" },
    { id: 62, name: "Poliwrath", image: "62.png" },
    { id: 63, name: "Abra", image: "63.png" },
    { id: 64, name: "Kadabra", image: "64.png" },
    { id: 65, name: "Alakazam", image: "65.png" },
    { id: 66, name: "Machop", image: "66.png" },
    { id: 67, name: "Machoke", image: "67.png" },
    { id: 68, name: "Machamp", image: "68.png" },
    { id: 69, name: "Bellsprout", image: "69.png" },
    { id: 70, name: "Weepinbell", image: "70.png" },
    { id: 71, name: "Victreebel", image: "71.png" },
    { id: 72, name: "Tentacool", image: "72.png" },
    { id: 73, name: "Tentacruel", image: "73.png" },
    { id: 74, name: "Geodude", image: "74.png" },
    { id: 75, name: "Graveler", image: "75.png" },
    { id: 76, name: "Golem", image: "76.png" },
    { id: 77, name: "Ponyta", image: "77.png" },
    { id: 78, name: "Rapidash", image: "78.png" },
    { id: 79, name: "Slowpoke", image: "79.png" },
    { id: 80, name: "Slowbro", image: "80.png" },
    { id: 81, name: "Magnemite", image: "81.png" },
    { id: 82, name: "Magneton", image: "82.png" },
    { id: 83, name: "Farfetch'd", image: "83.png" },
    { id: 84, name: "Doduo", image: "84.png" },
    { id: 85, name: "Dodrio", image: "85.png" },
    { id: 86, name: "Seel", image: "86.png" },
    { id: 87, name: "Dewgong", image: "87.png" },
    { id: 88, name: "Grimer", image: "88.png" },
    { id: 89, name: "Muk", image: "89.png" },
    { id: 90, name: "Shellder", image: "90.png" },
    { id: 91, name: "Cloyster", image: "91.png" },
    { id: 92, name: "Gastly", image: "92.png" },
    { id: 93, name: "Haunter", image: "93.png" },
    { id: 94, name: "Gengar", image: "94.png" },
    { id: 95, name: "Onix", image: "95.png" },
    { id: 96, name: "Drowzee", image: "96.png" },
    { id: 97, name: "Hypno", image: "97.png" },
    { id: 98, name: "Krabby", image: "98.png" },
    { id: 99, name: "Kingler", image: "99.png" },
    { id: 100, name: "Voltorb", image: "100.png" },
    { id: 101, name: "Electrode", image: "101.png" },
    { id: 102, name: "Exeggcute", image: "102.png" },
    { id: 103, name: "Exeggutor", image: "103.png" },
    { id: 104, name: "Cubone", image: "104.png" },
    { id: 105, name: "Marowak", image: "105.png" },
    { id: 106, name: "Hitmonlee", image: "106.png" },
    { id: 107, name: "Hitmonchan", image: "107.png" },
    { id: 108, name: "Lickitung", image: "108.png" },
    { id: 109, name: "Koffing", image: "109.png" },
    { id: 110, name: "Weezing", image: "110.png" },
    { id: 111, name: "Rhyhorn", image: "111.png" },
    { id: 112, name: "Rhydon", image: "112.png" },
    { id: 113, name: "Chansey", image: "113.png" },
    { id: 114, name: "Tangela", image: "114.png" },
    { id: 115, name: "Kangaskhan", image: "115.png" },
    { id: 116, name: "Horsea", image: "116.png" },
    { id: 117, name: "Seadra", image: "117.png" },
    { id: 118, name: "Goldeen", image: "118.png" },
    { id: 119, name: "Seaking", image: "119.png" },
    { id: 120, name: "Staryu", image: "120.png" },
    { id: 121, name: "Starmie", image: "121.png" },
    { id: 122, name: "Mr. Mime", image: "122.png" },
    { id: 123, name: "Scyther", image: "123.png" },
    { id: 124, name: "Jynx", image: "124.png" },
    { id: 125, name: "Electabuzz", image: "125.png" },
    { id: 126, name: "Magmar", image: "126.png" },
    { id: 127, name: "Pinsir", image: "127.png" },
    { id: 128, name: "Tauros", image: "128.png" },
    { id: 129, name: "Magikarp", image: "129.png" },
    { id: 130, name: "Gyarados", image: "130.png" },
    { id: 131, name: "Lapras", image: "131.png" },
    { id: 132, name: "Ditto", image: "132.png" },
    { id: 133, name: "Eevee", image: "133.png" },
    { id: 134, name: "Vaporeon", image: "134.png" },
    { id: 135, name: "Jolteon", image: "135.png" },
    { id: 136, name: "Flareon", image: "136.png" },
    { id: 137, name: "Porygon", image: "137.png" },
    { id: 138, name: "Omanyte", image: "138.png" },
    { id: 139, name: "Omastar", image: "139.png" },
    { id: 140, name: "Kabuto", image: "140.png" },
    { id: 141, name: "Kabutops", image: "141.png" },
    { id: 142, name: "Aerodactyl", image: "142.png" },
    { id: 143, name: "Snorlax", image: "143.png" },
    { id: 144, name: "Articuno", image: "144.png" },
    { id: 145, name: "Zapdos", image: "145.png" },
    { id: 146, name: "Moltres", image: "146.png" },
    { id: 147, name: "Dratini", image: "147.png" },
    { id: 148, name: "Dragonair", image: "148.png" },
    { id: 149, name: "Dragonite", image: "149.png" },
    { id: 150, name: "Mewtwo", image: "150.png" },
    { id: 151, name: "Mew", image: "151.png" }
];

const pokemonList = document.getElementById('pokemonList');

kantoPokemon.forEach(pokemon => {
    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    idCell.textContent = pokemon.id;
    row.appendChild(idCell);

    const nameCell = document.createElement('td');
    nameCell.textContent = pokemon.name;
    row.appendChild(nameCell);

    // Thêm các ô (<td>) khác cho thông tin Pokémon vào đây
    // Ô Violet
    const violetCell = document.createElement('td');
    violetCell.classList.add('pokemon-cell'); // Thêm class để dễ dàng style

    // Container chứa hình ảnh và số lượng
    const pokemonContainer = document.createElement('div');
    pokemonContainer.classList.add('pokemon-container');

    // Hình ảnh Friend Ball
    const friendBallImg = document.createElement('img');
    friendBallImg.src = 'pokeball/friendball.png';
    friendBallImg.alt = 'Friend Ball';
    friendBallImg.classList.add('friend-ball');

    // Hình ảnh Pokémon
    const pokemonImg = document.createElement('img');
    pokemonImg.src = `pokemon/poke_icon_${pokemon.id.toString().padStart(4, '0')}_000_mf_n_00000000_f_n.png`;
    pokemonImg.alt = pokemon.name;
    pokemonImg.classList.add('pokemon-image');



    // Số lượng đã bắt
    const catchCount = document.createElement('span');
    catchCount.textContent = '2';
    catchCount.classList.add('catch-count');

    // Thêm các element vào container
    pokemonContainer.appendChild(pokemonImg);
    pokemonContainer.appendChild(friendBallImg);
    pokemonContainer.appendChild(catchCount);

    // Thêm container vào ô Violet
    violetCell.appendChild(pokemonContainer);
    row.appendChild(violetCell);

    // ... (Thêm các ô khác cho các game còn lại)
    pokemonList.appendChild(row);
});


