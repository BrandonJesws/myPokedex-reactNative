import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListFlat from 'champions/app/components/ListFlat';
import { getUnavailabilityReason } from 'expo/build/AR';
import axios from 'axios';

const urlAPI = 'https://pokeapi.co/api/v2/pokemon';

export default function WelcomeScreen(props) {
    const { navigation } = props;
    const [pokemonData, setPokemonData] = useState({});
    const [pokemons, setPokemons] = useState(null)

    console.log(props.navigation)

    useEffect(() => {
        axios.get(urlAPI).then(result => {
            // console.log(result.data.results);
            const pokemons = result.data.results.map((pokemon) => {
                const urlSplited = pokemon.url.split("/");
                const id = urlSplited[urlSplited.length - 2];
                const sprite = {uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`};
                return {...pokemon, id, sprite }
            })
            setPokemons(pokemons)
        })
    }, [])

    return (
        <View style={styles.container}>
            {/* {console.log(pokemons)} */}
            <ListFlat data={ pokemons } navigation={navigation}/>
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
