import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const Input = ({onAddStar}) => {
    const [star, setStar] = useState('');

    const handleStarText = (name) => {
        setStar(name);
    }

    return (
        <View style={styles.entryBlock}>
            <TextInput 
            style={styles.input}
            placeholder="Star"
            onChangeText={handleStarText}
            value={star}
            />
            <Button 
            title = "Add"
            style={styles.btn}
            onPress={() => onAddStar(star)} />
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        flex: 1
    },
    entryBlock: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20
      },
      input: {
        flex: 1,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
      }
})

export default Input