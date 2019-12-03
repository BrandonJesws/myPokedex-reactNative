import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListFlat from 'champions/app/components/ListFlat';
import { useDispatch, useSelector } from "react-redux";
import { setMessage } from 'champions/app/Actions/DataAppActions';
import axios from 'axios';

const urlAPI = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';

export default function WelcomeScreen(props) {
  //Redux
  const dispatch = useDispatch();

  const { navigation } = props;
  const [pokemons, setPokemons] = useState(null)
  //Redux
  const message = useSelector(state => state.dataApp.message);
  // Redux
  setTimeout(()=>{
    dispatch(setMessage("Segundo Estado"));
  }, 1000)

  useEffect(() => {
    axios.get(urlAPI).then(result => {
    // console.log(result.data.results);
    const pokemons = result.data.results.map((pokemon) => {
      const urlSplited = pokemon.url.split("/");
      const id = urlSplited[urlSplited.length - 2];
      const sprite = {uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`};
      const newDataPokemon = {...pokemon, name: pokemon.name + message};
      return {...newDataPokemon, id, sprite }
      })
    setPokemons(pokemons)
    })
  }, [message])

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
