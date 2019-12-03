import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducers from './app/Reducers'
import Ind from 'champions/app/components/temp'
import MainNavigation from './app/Router';

let store = createStore(appReducers);

export default function App() {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MainNavigation/>
        {/* <Ind /> */}
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25
  }
});