import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Ind from 'champions/app/components/temp'
import MainNavigation from './app/Router';

export default function App() {

  return (
      <View style={styles.container}>
        <MainNavigation/>
        {/* <Ind /> */}
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25
  }
});