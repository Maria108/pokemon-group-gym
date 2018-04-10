class Master {
    constructor() {
        this.pokemons = []
    }

    add(pokemon) {
        this.pokemons.push(pokemon)
    }

    all() {
        return this.pokemons
    }

}

class Pokemon {
    constructor(name, hp, attack, defense, abilities, moves, pic) {
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities
        this.pic = pic
        this.moves = moves
    }
}

let masha = new Master()
let mada = new Master()

const pokemonIds = ["018", "026", "037", "134", "120", "190"];

let infoDiv = document.querySelector("#info")
let leftPoke = document.querySelector("#left-corner")
let rightPoke = document.querySelector("#right-corner")
let btnF = document.querySelector("#btn-fight")
let btnC = document.querySelector("#btn-clean")
let fightDiv = document.querySelector("#fight")
let result = document.querySelector("#result")
let mashaPokemon = document.querySelector("#masha-pokemon")
let madaPokemon = document.querySelector("#mada-pokemon")

pokemonIds.forEach((id, idx) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => {
            let { name, stats, abilities, moves, sprites } = response.data

            // Get abilities
            abilities = getAbils(abilities)
            moves = getMoves(moves)

            // Get stats
            let hp = getStat(stats, "hp")
            let attack = getStat(stats, "attack")
            let defense = getStat(stats, "special-defense")
            let pic = sprites.front_default;

            // Create pokemon
            let pokemon = new Pokemon(name, hp, attack, defense, abilities, moves, pic)

            // Add pokemon to master
            if (id === "018" || id === "026" || id === "037") {
                masha.add(pokemon)
            } else {
                mada.add(pokemon)
            }

            // Create img
            let divImg = document.createElement("div")
            divImg.className = "box col l12"

            if (id === "018" || id === "026" || id === "037") {
                mashaPokemon.appendChild(divImg)
            } else {
                madaPokemon.appendChild(divImg)
            }

            let imgPoke = document.createElement("img")
            imgPoke.src = pic
            imgPoke.className = "poke-pic"
            divImg.appendChild(imgPoke)

            function showStats(pokemon) {
                let divStats = document.createElement("div")
                divStats.className = "poke-info"
                infoDiv.innerHTML = ""
                infoDiv.appendChild(divStats)

                // Create list for pokemon's stat
                let ul = document.createElement("ul")
                ul.className = "description"
                divStats.appendChild(ul)
                let h2 = document.createElement("h2")
                ul.appendChild(h2)

                for (const prop in pokemon) {
                    if (prop !== "pic") {
                        if (prop === "name") {
                            h2.innerHTML = `${pokemon[prop].toUpperCase()}`
                        } else {
                            let list = document.createElement("li")
                            ul.appendChild(list)
                            list.innerHTML = `${prop}: ${pokemon[prop]}`
                        }
                    }
                }
            }

            function hideStats() {
                infoDiv.innerHTML = ""
            }

            imgPoke.addEventListener("mouseover", (event) => {
                showStats(pokemon)
            })

            imgPoke.addEventListener("mouseleave", (event) => {
                hideStats()
            })

            imgPoke.addEventListener("click", (event) => {
                let ringPoke = document.createElement("img")
                ringPoke.className = "ring-poke"
                ringPoke.src = pic
                if (pic.includes("18") || pic.includes("26") || pic.includes("37")) {
                    leftPoke.innerHTML = ""
                    leftPoke.appendChild(ringPoke)
                } else {
                    rightPoke.innerHTML = ""
                    rightPoke.appendChild(ringPoke)
                }
            })

        }).catch((error) => {
            console.log(error)
        })
})

let box = document.createElement("audio")
box.src = "sound/ring.mp3"

let cheer = document.createElement("audio")
cheer.src = "sound/cheer.mp3"

btnF.addEventListener("click", (event) => {
    box.play()
    leftPoke.style.display = "none"
    rightPoke.style.display = "none"
    fightDiv.style.display = "block"
    setTimeout(() => {
        fightDiv.style.display = "none";
        randomWinner()
        leftPoke.style.display = "block"
        rightPoke.style.display = "block"
        cheer.play()
    }, 2500);
})

function randomWinner() {
    let arr = ["loser : winner", "winner : loser"]
    let num = Math.floor(Math.random() * (arr.length))
    result.innerHTML = arr[num]
}

btnC.addEventListener("click", (event) => {
    leftPoke.innerHTML = ""
    rightPoke.innerHTML = ""
    result.innerHTML = ""
})

function getStat(stats, name) {
    let stat = stats.find(el => el.stat.name === name)
    return stat.base_stat;
}

// Returns string of abilities
function getAbils(abils) {
    let abilities = []
    abils.forEach(el => abilities.push(el.ability.name))
    return abilities.join(", ")
}

function getMoves(move) {
    let moves = []
    move.forEach(el => moves.push(el.move.name))
    return moves.slice(0, 4).join(", ");
}