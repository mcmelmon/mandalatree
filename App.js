import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet } from 'react-native';

import Element from './components/Element'
import Input from './components/Input'

export default function App() {
  const [stars, setStars] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const handleAddStar = (star) => {
    if (!stars.map(e => e.value).includes(star)) {
      setStars(currentStars => [...currentStars, { key: stars.length.toString(), value: star }]);
      toggleAddMode();
    }
  }

  const handleCancelAddStar = () => {
    setIsAddMode(false);
  }

  const handleDeleteStar = (key) => {
    setStars(currentStars => {
      return currentStars.filter((star) => star.key !== key);
    });
  }

  const toggleAddMode = () => {
    setIsAddMode(!isAddMode);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add Star" onPress={toggleAddMode} />
      <Input visible={isAddMode} onAddStar={handleAddStar} onCancel={handleCancelAddStar}
/>

      <FlatList
        data = {stars}
        renderItem = {itemData => <Element element={itemData.item} 
          onDelete={handleDeleteStar}
        /> }
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
