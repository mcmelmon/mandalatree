import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

const Input = ({visible, onAddStar, onCancel}) => {
    const [star, setStar] = useState('');

    const handleStarText = (name) => {
        setStar(name);
    }

    const handleAddStar = () => {
        onAddStar(star);
        setStar('');
    }

    const handleCancel = () => {
        setStar('');
        onCancel();
    }

    return (
        <Modal visible={visible}>
            <View style={styles.entryBlock} animationType="slide">
                <TextInput 
                    style={styles.input}
                    placeholder="Star"
                    onChangeText={handleStarText}
                    value={star}
                />
                <View style={styles.actions}>
                    <Button 
                        title = "Add"
                        style={styles.btn}
                        onPress={handleAddStar}
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
        marginTop: 15
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