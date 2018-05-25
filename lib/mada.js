class MasterMada {
  constructor() {
    this.all = [];
  }

  add(pokemon) {
    this.all.push(pokemon);
  }
  get(pokemon) {
    for (let i = 0; i < this.all.length; i++) {
      if (name === this.all[i].name) {
        return this.all[i];
      }
    }
  }
}

class PokemonMada {
  constructor(hp, attack, defense, abilities) {
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

let doctor = new MasterMada();
// let pokemon = new Pokemon()

//Pokemon #354 "Banette"
axios
  .get('https://pokeapi.co/api/v2/pokemon/354/')
  .then(response => {
    let ul = document.querySelector('#banetteDiv');

    let pokeData = response.data;
    let hp = document.createElement('li');
    let attack = document.createElement('li');
    let defense = document.createElement('li');
    let abilities = document.createElement('li');

    let banette = new PokemonMada(
      pokeData.stats[5].base_stat,
      pokeData.stats[4].base_stat,
      pokeData.stats[3].base_stat,
      pokeData.abilities[0].ability.name + ', ' + pokeData.abilities[1].ability.name,
    );
    console.log(banette);

    doctor.add(banette);

    pokeData.innerHTML = banette.data;

    hp.innerHTML = 'HP: ' + banette.hp;
    attack.innerHTML = 'ATTACK: ' + banette.attack;
    defense.innerHTML = 'DEFENSE: ' + banette.defense;
    abilities.innerHTML = 'ABILITIES: ' + banette.abilities;

    ul.appendChild(hp);
    ul.appendChild(attack);
    ul.appendChild(defense);
    ul.appendChild(abilities);
  })
  .catch(error => {
    console.log(error);
  });

//Pokemon #562 "Yamask"
axios
  .get('https://pokeapi.co/api/v2/pokemon/562/')
  .then(response => {
    let ul = document.querySelector('#yamaskDiv');

    let pokeData = response.data;
    let hp = document.createElement('li');
    let attack = document.createElement('li');
    let defense = document.createElement('li');
    let abilities = document.createElement('li');

    let yamask = new PokemonMada(
      pokeData.stats[5].base_stat,
      pokeData.stats[4].base_stat,
      pokeData.stats[3].base_stat,
      pokeData.abilities[0].ability.name,
    );
    console.log(yamask);

    doctor.add(yamask);

    pokeData.innerHTML = yamask.data;

    hp.innerHTML = 'HP: ' + yamask.hp;
    attack.innerHTML = 'ATTACK: ' + yamask.attack;
    defense.innerHTML = 'DEFENSE: ' + yamask.defense;
    abilities.innerHTML = 'ABILITIES: ' + yamask.abilities;

    ul.appendChild(hp);
    ul.appendChild(attack);
    ul.appendChild(defense);
    ul.appendChild(abilities);
  })
  .catch(error => {
    console.log(error);
  });
//Pokemon #711 "Gourgeist"
axios
  .get('https://pokeapi.co/api/v2/pokemon/711/')
  .then(response => {
    let ul = document.querySelector('#gourgeistDiv');

    let pokeData = response.data;
    let hp = document.createElement('li');
    let attack = document.createElement('li');
    let defense = document.createElement('li');
    let abilities = document.createElement('li');

    let gourgeist = new PokemonMada(
      pokeData.stats[5].base_stat,
      pokeData.stats[4].base_stat,
      pokeData.stats[3].base_stat,
      pokeData.abilities[0].ability.name + ', ' + pokeData.abilities[1].ability.name,
    );
    console.log(gourgeist);

    doctor.add(gourgeist);

    pokeData.innerHTML = gourgeist.data;

    hp.innerHTML = 'HP: ' + gourgeist.hp;
    attack.innerHTML = 'ATTACK: ' + gourgeist.attack;
    defense.innerHTML = 'DEFENSE: ' + gourgeist.defense;
    abilities.innerHTML = 'ABILITIES: ' + gourgeist.abilities;

    ul.appendChild(hp);
    ul.appendChild(attack);
    ul.appendChild(defense);
    ul.appendChild(abilities);
  })
  .catch(error => {
    console.log(error);
  });

console.log(doctor.all);
