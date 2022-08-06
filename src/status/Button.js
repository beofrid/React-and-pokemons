import React from 'react';


function Button () {
    // function reload() {
    //     window.location.reload(true)
    // }




    return(
        <button onClick={()=>window.location.reload(true)}>Random Pokemons</button>    )
}




export default Button;