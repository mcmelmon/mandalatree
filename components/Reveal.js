import React from 'react'
import { Modal, StyleSheet } from 'react-native'

import Input from './Input'

const Reveal = ({visible, onAddElement, onCancel}) => {
    return (
        <Modal visible={visible} animationType="slide">
            <Input 
                acceptBtn="Add"
                onAccept={onAddElement}
                onCancel={onCancel}
                placeholder="Element"
            />
        </Modal>
    )
}

const styles = StyleSheet.create({

})

export default Reveal