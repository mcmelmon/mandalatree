import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';

import Element from './components/Element'
import Input from './components/Input'

export default function App() {
  const [stars, setStars] = useState([]);

  const handleAddStar = (star) => {
    if (!stars.map(e => e.value).includes(star)) {
      setStars(currentStars => [...currentStars, { key: stars.length.toString(), value: star }]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input onAddStar = {handleAddStar}/>

      <FlatList
        data = {stars}
        renderItem = {itemData => <Element title={itemData.item.value} /> }
      />
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
