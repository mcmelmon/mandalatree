import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'

import Card from './Card'
import Element from './Element'
import Reveal from './Reveal'

const Canvas = () => {
    const [elements, setElements] = useState([]);
    const [isGameMode, setIsGameMode] = useState(false);

    const handleAddElement = (element) => {
        if (!elements.map(e => e.value).includes(element)) {
          setElements(currentElements => [
              ...currentElements, 
              { key: elements.length.toString(), value: element }
            ]);
          toggleGameMode();
        }
      }
    
    const handleCancelAddElement = () => {
        setIsGameMode(false);
    }

    const handleDeleteElement = (key) => {
        setElements(currentElements => {
            return currentElements.filter((element) => element.key !== key);
        });
    }

    const toggleGameMode = () => {
        setIsGameMode(!isGameMode);
    }

    return (        
        <View style={styles.container}>
            <Button title="Add Element" onPress={toggleGameMode} />
            <Reveal visible={isGameMode} onAddElement={handleAddElement} onCancel={handleCancelAddElement} />

            <FlatList
                data = {elements}
                renderItem = {(itemData) =>
                    <Card>
                        <Element element={itemData.item} onDelete={handleDeleteElement}/>
                    </Card>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    }
})

export default Canvas