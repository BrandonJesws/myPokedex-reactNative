import React from 'react'
import Pokemon from '../Pokemon';

import { View, Text, FlatList, Image } from 'react-native'

const ListFlat = ({data, navigation}) => {
    // console.log(navigation);
    return (
        <View style={{flex: 1}}>
            <View>
                <FlatList 
                    data = {data}
                    renderItem = {({ item }) => <Pokemon onPress={() => navigation.navigate('DetailPokemonScreen', { 
                        id: item.id,
                        name: item.name, 
                        sprite: item.sprite
                    })} id={item.id} name={item.name} sprite={item.sprite}/>}
                    keyExtractor={item => item.name}
                    // // onScrollEndDrag={() => console.log("end")}
                    // onEndReachedThreshold={1}
                    // legacyImplementation={false}
                    // onEndReached={({ distanceFromEnd }) => {
                    //     console.log('on end reached ', distanceFromEnd)
                    //   }}
                />
            </View>
        </View>
    );
}

export default ListFlat
