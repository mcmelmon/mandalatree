import React, { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

import Card from './Card'

const Input = ({acceptBtn, onAccept, onCancel, placeholder}) => {
    const [text, setText] = useState('');

    const handleAccept = () => {
        if (text !== 'undefined' && text.length !== 0) {
            onAccept(text);
            setText('');
        }
    }

    const handleInputText = (text) => {
        setText(text);
    }

    const handleCancel = () => {
        setText('');
        onCancel();
    }

    return (
        <View style={styles.block}>
            <Card style={styles.input}>
                <TextInput 
                    style={styles.input}
                    placeholder={placeholder}
                    onChangeText={handleInputText}
                    value={text}
                />
            </Card>
            <View style={styles.actions}>
                <Button 
                    title = {acceptBtn}
                    style={styles.btn}
                    onPress={handleAccept}
                />
                <Button 
                    title = "Cancel"
                    style={styles.btn}
                    onPress={handleCancel}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    actions: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        width: '50%'
    },
    btn: {
        flex: 1
    },
    block: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      },
    input: {
        backgroundColor: 'white',
        fontSize: 24,
        marginBottom: 20,
        padding: 20,
        width: '75%'
      }
})

export default Input