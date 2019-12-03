import React from 'react';
// import {createSwitchNavigator} from 'react-navigation'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScreen from "champions/app/screens/WelcomeScreen";
import DetailPokemonScreen from "champions/app/screens/DetailPokemonScreen";

// const Welcome = createStackNavigator({
//     Home: {
//         screen: WelcomeScreen
//     }
// });

const MainNavigation = createStackNavigator({
    MainNavigationStack:{
       screen: WelcomeScreen,
       navigationOptions: {
        title: 'Pokedex App',
        headerStyle: {
          backgroundColor: '#BBDBF3',
          height: 40
        },
        headerTitleStyle: {
            fontWeight: 'bold'
          }
      },
    },
    DetailPokemonScreen:{
        screen: DetailPokemonScreen,
    }
    
});
export default createAppContainer(MainNavigation);