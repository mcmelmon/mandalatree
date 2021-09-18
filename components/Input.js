import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

const Input = ({visible, onAddElement, onCancel}) => {
    const [element, setElement] = useState('');

    const handleElementText = (element) => {
        setElement(element);
    }

    const handleAddElement = () => {
        if (element !== 'undefined' && element.length !== 0) {
            onAddElement(element);
            setElement('');
        }
    }

    const handleCancel = () => {
        setElement('');
        onCancel();
    }

    return (
        <Modal visible={visible}>
            <View style={styles.entryBlock} animationType="slide">
                <TextInput 
                    style={styles.input}
                    placeholder="Element"
                    onChangeText={handleElementText}
                    value={element}
                />
                <View style={styles.actions}>
                    <Button 
                        title = "Add"
                        style={styles.btn}
                        onPress={handleAddElement}
                    />
                    <Button 
                        title = "Cancel"
                        style={styles.btn}
                        onPress={handleCancel}
                    />
                </View>
            </View>
        </Modal>
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
    entryBlock: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      },
      input: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        marginBottom: 20,
        width: '75%'
      }
})

export default Input