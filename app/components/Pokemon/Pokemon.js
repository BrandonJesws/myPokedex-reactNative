import React from 'react'
import { View, Text, Image, Button, StyleSheet } from 'react-native'

const Pokemon = ({id, name, sprite, onPress}) => {
    return (
        <View style={styles.content}>
            <View style={{flex: 1}}>
                <Text style={{color: "#000", textAlign: "left",  fontWeight: "bold", fontSize: 20}}>#{id} </Text>
                <Text style={{color: "#000", textAlign: "center",  fontWeight: "bold"}}>{name}</Text>
            </View>
            <View style= {{flex: 4}}>
                <Image source={sprite} style={{ height:'100%', width: '25%'}} />
            </View>
            <Button
                title = "Details"
                onPress = {onPress}
                color = "#2169a1"
                />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        width: "95%",
        height: 120,
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 8,
        backgroundColor: "#5e9dce"
    }
  });

export default Pokemon