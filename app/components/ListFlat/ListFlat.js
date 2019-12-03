import React from 'react'
import Pokemon from '../Pokemon';
import { View, Text, FlatList, Image } from 'react-native'
import { useDispatch } from "react-redux";
import { setPokemon } from 'champions/app/Actions/DataAppActions';

const ListFlat = ({data, navigation}) => {
     //Redux
     const dispatch = useDispatch();

    return (
        <View style={{flex: 1}}>
            <View>
                <FlatList 
                    data = {data}
                    renderItem = {({ item }) => <Pokemon onPress={() => {
                        dispatch(setPokemon(item.id));
                        navigation.navigate('DetailPokemonScreen', { 
                            name: item.name
                    })}} id={item.id} name={item.name} sprite={item.sprite}/>}
                    keyExtractor={item => item.name}
                />
            </View>
        </View>
    );
}
export default ListFlat