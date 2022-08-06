import React, { Component } from 'react';
import instance from "../services/Api";
import Random from './Random'



class Name extends Component {

    state = {
        pokemonName: "",
        pokemonType: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        specialAttack: "",
        specialDefense: "",
        speed: "",
    }
    async componentDidMount(){
        

        const response = await instance.get(`${Random()}`)
        // const response = await instance.get(`${Random()}`)
        // console.log(Random())
        // console.log(response.data)
        this.setState({pokemonName: response.data.name})
        this.setState({pokemonType: response.data.types[0].type.name})
        this.setState({image: response.data.sprites.front_default})
        this.setState({hp: response.data.stats[0].base_stat})
        this.setState({attack: response.data.stats[1].base_stat})
        this.setState({defense: response.data.stats[2].base_stat})
        this.setState({specialAttack: response.data.stats[3].base_stat})
        this.setState({specialDefense: response.data.stats[4].base_stat})
        this.setState({speed: response.data.stats[5].base_stat})
        // console.log(this.state.pokemon)
    }

    render(){
        function firstLetter(string) {
            const upperCase = string.charAt(0).toUpperCase() + string.slice(1);
            return upperCase;
        }

        const { pokemonName }= this.state
        const firstLetterName = firstLetter(pokemonName)
        const { pokemonType }= this.state
        const firstLetterType = firstLetter(pokemonType)
        const { image }= this.state
        const { hp }= this.state

        const { attack }= this.state
        const { specialAttack }= this.state
        const { specialDefense }= this.state
        const { speed }= this.state
        
        return(
            <div className='master'>
                <h2> {firstLetterName} </h2>
                <p className='type'> {firstLetterType} </p>
                <img src={image} alt="icons" className='img' />
                <div className="status">
                    <div className="lines"> <div className="statusName">Health:</div> <div className="statusNumber">{ hp }</div> </div>
                    <div className="lines"> <div className="statusName">Attack:</div> <div className="statusNumber">{ attack }</div> </div>
                    <div className="lines"> <div className="statusName">Special Attack:</div> <div className="statusNumber">{ specialAttack } </div> </div>
                    <div className="lines"> <div className="statusName">Special Attack:</div> <div className="statusNumber">{ specialDefense } </div> </div>
                    <div className="lines"> <div className="statusName">Speed:</div> <div className="statusNumber">{ speed }</div> </div>
                </div>

            </div>
        )


    }



}

export default Name;