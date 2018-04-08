class Pokemon {
    constructor(name, hp, attack, defense) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = []
    }
    addAbility(ability) {}
}

class KeeeVale {
    constructor() {
        this.pokemon = []
    }
    all() {
        return this.pokemon
    }
    add(pokemon) {
        this.pokemon.push(pokemon)
    }
}

let keeevale = new Keeevale()

axios.get("https://pokeapi.co/api/v2/pokemon/banette/")
    .then((response) => {
        let data = response.data
        let pokeName = document.getElementById("banette")
        let hp = document.getElementById("banHP")
        let attack = document.getElementById("banAttack")
        let defense = document.getElementById("banDefense")

        let banette = new Pokemon(
            data.name,
            data.stats[5].base_stat,
            data.stats[4].base_stat,
            data.stats[3].base_stat,
        )
        data.abilities.forEach((item) => {
            banette.addAbility(item.ability.name)
            abilities.innerHTML += item.ability.name + ","

            keevale.add(banette)
            pokeName.innerHTML = banette.pokeName
            hp.innerHTML = banette.banAttack
            defense.innerHTML = banette.banDefense

            console.log(banette);
        }).catch((error) => {
            console.log(error)
        })
    })


/*creates the "container" class
class Pokemons {
  constructor() {
    this.all=[]
}
//defines add method
add(pokemon) {
  this.all.push(pokemon)
  }
}
class Pokemon {
  constructor(name, hp, attack, defense){
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defense = defense
  }
}
let pokemons = new Pokemons()
let "yourclassname" = document.getElementById("i.e., main")
//ajax call w/axios to get name
axios.get("https://pokemonapi.co/api/v2/pokemon/354/")
  .then((response) => {
    let {name, hp, attack, defense} = response.data
    let name = getStat(stats, "name")
    let hp = getStat(stats, "hp")
    let attack = getStat(stats, "attack")
    let defense = getStat(stats, "defense")
    let Banette = new Pokemon (
      data.name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
    )
    let pokemon = new Pokemon(name, hp, attack, defense)
    pokemons.add(pokemon)
    let "yourmethodofadding" = document.createElement("ul")
    "yourclassname".className = "info"
    "yourmethodofadding".appendChild("yourclassname")
    let ul = document.createElement("ul")
    ul.appendChild(li)
    let h2 = document.createElement("h2")
    ul.appendChild(h2)
for (let data in pokemon){
 if (data == name) {
   h2.innerHTML = `${pokemon[data]}`
 } else {
   let list = document.createElement("li")
   ul.appendChild(list)
   list.innerHTML = `${data}: ${pokemon[data]}`
 }
}
}) .catch((error) =>{
  console.log(error)
})
*/