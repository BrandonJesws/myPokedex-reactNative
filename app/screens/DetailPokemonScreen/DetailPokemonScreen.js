import React, {useState, useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import axios from 'axios';

const DetailPokemonScreen = ({navigation}) => {
    const name = navigation.getParam('name');
    const id = navigation.getParam('id');
    const sprite = navigation.getParam('sprite');

    const [pokemonData, setPokemonData] = useState({});

    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    useEffect(() => {
        axios.get(url).then(({data}) => {
                const pokemonDetail = {
                    ability: data.abilities[0].ability.name,
                    type: data.types[0].type.name,
                    speed: data.stats[0].base_stat,
                    specialDefense: data.stats[1].base_stat,
                    specialAttack: data.stats[2].base_stat,
                    defense: data.stats[3].base_stat,
                    attack: data.stats[4].base_stat,
                    hp: data.stats[5].base_stat
                }
                setPokemonData(pokemonDetail);
               
        })
    }, []);

    return (
        <View style={styles.content}>
            <View style={{flex: 1}}>
                <Text style={{color: "#000", textAlign: "left",  fontWeight: "bold", fontSize: 25}}>#{id}  {name}</Text>
            </View>
            <View style={{flex: 4}}>
                <Image source={sprite} style={{height: 150, width: 150 }}></Image>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.info}>Type: {pokemonData.type}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.info}>Ability: {pokemonData.ability}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={{color: "#fa6125", textAlign: "left",  fontWeight: "bold", fontSize: 20}}>STATS:</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.info}>Speed: {pokemonData.speed}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.info}>Special Defense: {pokemonData.specialDefense}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.info}>Special Attack: {pokemonData.specialAttack}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.info}>Defense: {pokemonData.defense}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.info}>Attack: {pokemonData.attack}</Text>
            </View>
            <View style={{flex: 1}}>
                <Text style={styles.info}>HP: {pokemonData.hp}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: "95%",
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 8,
        backgroundColor: "#5e9dce"
    },
    info: {
        color: "#0c4d46", 
        textAlign: "left",  
        fontWeight: "bold", 
        fontSize: 15
    }
  });

export default DetailPokemonScreen