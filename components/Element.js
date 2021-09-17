import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Element = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onDelete(props.element.key)}>
            <View style={styles.listItem}>
                <Text>{props.element.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
      }
})

export default Element