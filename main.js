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

// let mainDiv = document.querySelector("#pokemon-row")

const pokemonIds = ["018", "026", "037", "134", "120", "190"];

let mainDiv = document.querySelector("#main")

let gymName = document.querySelector("#gym-name")
let masterMasha = document.querySelector("#master-masha")
let leftCorner = document.querySelector("#left-corner")
let boxRing = document.querySelector("#box-ring")
let rightCorner = document.querySelector("right-corner")
let masterMada = document.querySelector("#master-mada")
let infoDiv = document.querySelector("#info")

let leftPoke = document.querySelector("#leftr-corner-poke")
let rightPoke = document.querySelector("#right-corner-poke")

let btnF = document.querySelector("#btn-fight")
let btnC = document.querySelector("#btn-clean")

let fightDiv = document.querySelector("#fight")

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
                ringPoke.src = pic
                if (pic.includes("18") || pic.includes("26") || pic.includes("37")) {
                    leftPoke.innerHTML = ""
                    leftPoke.appendChild(ringPoke)
                } else {
                    rightPoke.innerHTML = ""
                    rightPoke.appendChild(ringPoke)
                }
            })



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

btnF.addEventListener("click", (event) => {
    leftPoke.innerHTML = ""
    rightPoke.innerHTML = ""
    fightDiv.style.display = "block"
        // fightDiv.style.display === "block"
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