import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({title}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        backgroundColor: 'orange',
        justifyContent: 'center',
        height: 70,
    },
    title: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default Header