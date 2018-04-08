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

// class Master {
//     constructor() {
//         this.myPokemon = {}
//         this.name = ""
//         this.pokemonArray = []
//     }
// }

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

// let mainDiv = document.querySelector("#pokemon-row")

const pokemonIds = ["018", "026", "037", "134", "120", "190"];

// function fetchPokemon(id, master) {
//     axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//         .then((response) => {
//             let { name, stats, abilities, moves } = response.data

//             // Get abilities
//             abilities = getAbils(abilities)
//             moves = getMoves(moves)

//             // Get stats
//             let hp = getStat(stats, "hp")
//             let attack = getStat(stats, "attack")
//             let defense = getStat(stats, "special-defense")

//             // Get picture
//             let pic = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;

//             // Create pokemon
//             let pokemon = new Pokemon(name, hp, attack, defense, abilities, moves, pic)

//             master.add(pokemon)

//         }).catch((error) => {
//             console.log(error)
//         })
// }

let mainDiv = document.querySelector("#main")

let gymName = document.querySelector("#gym-name")
let masterMasha = document.querySelector("#master-masha")
let leftCorner = document.querySelector("#left-corner")
let boxRing = document.querySelector("#box-ring")
let rightCorner = document.querySelector("right-corner")
let masterMada = document.querySelector("#master-mada")
    // let picPokemon = document.querySelector("#pic-pokemon")

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

            // Create div for store pokemon

            // Create img
            let divImg = document.createElement("div")
            divImg.className = "box col l4"

            if (id === "018" || id === "026" || id === "037") {
                mashaPokemon.appendChild(divImg)
            } else {
                madaPokemon.appendChild(divImg)
            }

            let imgPoke = document.createElement("img")
            imgPoke.src = pic
            divImg.appendChild(imgPoke)

            // Create div for information about pokemon
            let divInfo = document.createElement("div")
            divInfo.className = "info"
                // divPoke.appendChild(divInfo)

            // Create list for pokemon's stat
            let ul = document.createElement("ul")
            ul.className = "description"
            divInfo.appendChild(ul)
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

            // let divBtn = document.createElement("div")
            // divBtn.className = 'div-btn'
            // divPoke.appendChild(divBtn)

            // let btnChoose = document.createElement("a")
            // btnChoose.className = "choose-btn waves-effect waves-light btn"
            // btnChoose.innerHTML = "CHOOSE"
            // divBtn.appendChild(btnChoose)

            // let audio = document.createElement("audio")
            // audio.src = `audio/${id}.ogx`

            // let audioVoice = document.createElement("audio")
            // audioVoice.src = `audio/voice-${id}.ogx`

            // divImg.addEventListener("click", (event) => {
            //     audioVoice.play()
            // })

            // btnChoose.addEventListener("click", (event) => {
            //     console.log(event)
            //     let boxes = document.querySelectorAll(".box")
            //     boxes.forEach((box) => {
            //         box.style.display = "none"
            //     })

            //     let activeBox = event.target.parentNode.parentNode;
            //     let isActive = activeBox.getAttribute("active");

            //     if (!isActive) {
            //         divInfo.style.display = "flex"
            //         imgPoke.style.width = "400px"
            //         divPoke.className = "box col s12 m12 l12 width-change"
            //         imgPoke.style.filter = "none"
            //         activeBox.style.display = "flex"
            //         btnChoose.innerHTML = "CLOSE"
            //         audio.play()
            //         activeBox.setAttribute("active", "true");
            //     } else {
            //         divInfo.style.display = "none";
            //         divPoke.className = "box col s12 m6 l4"
            //         btnChoose.innerHTML = "CHOOSE"
            //         imgPoke.style.width = "300px"
            //         imgPoke.style.filter = "grayscale(1)"
            //         audio.pause();
            //         audio.currentTime = 0;
            //         activeBox.setAttribute("active", "");
            //         boxes.forEach((box) => {
            //             box.style.display = "block"
            //         })
            //     }
            // })
            // callback(masterMasha)
            // console.log(pokemon)
        }).catch((error) => {
            console.log(error)
        })
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

// class Gym {
//     constructor() {
//         this.masters = []
//     }

//     add(master) {
//         this.masters.push(master)
//     }

//     all() {
//         return this.masters
//     }
// }

// let gym = new Gym()

// let keeevale = new Keeevale()


// let masterMasha = new MasterMasha()

// gym.add(masterMada)
// gym.add(masterMasha)
// console.log(gym.all())