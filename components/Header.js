import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Colors from '../constants/colors'


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
        backgroundColor: Colors.primary,
        justifyContent: 'center',
        height: 70,
    },
    title: {
        color: Colors.accent,
        fontSize: 24,
        fontWeight: 'bold'
    }
})

export default Header