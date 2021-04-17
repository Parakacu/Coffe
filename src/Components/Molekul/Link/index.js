import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Link = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress = {onPress} >
            <Text style = {styles.text} > {title} </Text>
        </TouchableOpacity>
    )
}

export default Link;

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontSize: 10,
        fontWeight: '600'
    }
})
