import instance from "../services/Api";

function Random () {
    let arr = []
    for(let i = 1; i < 900; i++){
        arr.push(i)

    };

    let pokemonRandom = Math.floor(Math.random()*arr.length)
    return (pokemonRandom)
}

export default Random;