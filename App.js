import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet } from 'react-native';

import Canvas from './components/Canvas'
import Header from './components/Header'
import Signs from './constants/signs'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header title='Mandala Tree' />
      <Canvas />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 20
  }
});
