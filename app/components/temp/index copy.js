import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListFlat from 'champions/app/components/ListFlat';
import Pokemon from 'champions/app/components/Pokemon';
import { getUnavailabilityReason } from 'expo/build/AR';
import axios from 'axios';

const pokemon= [
  {
    id: '25',
    name: "Pikachu1",
    number: 25,
    sprite: {uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}
  },
  {
    id: '26',
    name: "Pikachu2",
    number: 25,
    sprite: {uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'}
  },
  {
    id: '27',
    name: "Pikachu3",
    number: 25,
    sprite: {uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png'}
  },
  {
    id: '28',
    name: "Pikachu4",
    number: 25,
    sprite: {uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png'}
  },
  {
    id: '29',
    name: "Pikachu5",
    number: 25,
    sprite: {uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png'}
  },
  {
    id: '30',
    name: "Pikachu6",
    number: 25,
    sprite: {uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png'}
  },
  {
    id: '31',
    name: "Pikachu7",
    number: 25,
    sprite: {uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png'}
  }

];

let pokemons = [];

const urlAPI = 'https://pokeapi.co/api/v2/pokemon';

export default function Ind() {
    
// getPokemon = ({id, name, sprites}) => {
//   const number = id;
//   const sprite = {uri: sprites.front_default }
//   const pokemon = {
//     id,
//     number,
//     name,
//     sprite
//   }
//   return pokemon;
// }

// getPokemons= (urls)=> {
//   urls.forEach((url)=>{
//     fetch(url)
//     .then(data => data.json())
//     .then(data => {
//       const pokemon = this.getPokemon(data);
//       console.log(pokemon)
//       pokemons.push(pokemon);
//     })
//   })
//   setDataPokemons(pokemons);
// }

// getArrayUrls = (data)=>{
//   setNextPage(data.next);
//   setPreviousPage(data.previous);
//   const urls = data.results.map(({url}) => url);
//   return urls;
// }

// useEffect(() => {
//   fetch(urlAPI)
//   .then(data => data.json())
//   .then(data => {
//     const urls = getArrayUrls(data);
//     this.getPokemons(urls);
//   })
//   .catch(console.log);

// }, []);

  return (
      <View style={styles.container}>
        {/*console.log(dataPokemons)*/}
        <View>
          <Text>Menu</Text> 
        </View>
             {/* {<ListFlat data={ dataPokemons }/>}  */}
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25
  },
  sprite: {
    flex:1,

  }
});
