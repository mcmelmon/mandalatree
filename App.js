import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text,TextInput, View } from 'react-native';

export default function App() {
  const [star, setStar] = useState('');
  const [stars, setStars] = useState([]);

  const handleStarText = (name) => {
    setStar(name);
  }

  const handleAddStar = () => {
    if (!stars.map(e => e.value).includes(star)) {
      setStars(currentStars => [...currentStars, { key: stars.length, value: star }]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.enterStar}>
        <TextInput 
          style={styles.input}
          placeholder="Star"
          onChangeText={handleStarText}
          value={star}
          />
        <Button 
          title = "Add"
          style={styles.btn}
          onPress={handleAddStar} />
      </View>

      <FlatList
        data = {stars}
        renderItem = {itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btn: {
    flex: 1
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    margin: 20
  },
  enterStar: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20
  },
  input: {
    flex: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  listItem: {
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  }
});
