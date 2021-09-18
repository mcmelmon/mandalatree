import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Element = ({onDelete, element}) => {
    return (
        <TouchableOpacity onPress={() => onDelete(element.key)}>
            <View style={styles.element}>
                <Text>{element.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    element: {
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10
      }
})

export default Element