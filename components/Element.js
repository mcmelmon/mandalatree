import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Element = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
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