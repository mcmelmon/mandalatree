import React from 'react'
import { StyleSheet, View } from 'react-native'

const Card = (props) => {
    // The spread operator passes all of the styles to any contained
    // elements.  Because props.styles comes in second, any styles 
    // passed in will override the card styles

    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        fontSize: 24,
        marginBottom: 20,
        padding: 20,
        shadowColor: 'black',
        shadowRadius: 4,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.26,
    }
})

export default Card