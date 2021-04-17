import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Bottom = ({title, onPress}) => {
    return (
        <TouchableOpacity style = {styles.page} onPress = {onPress} >
            <Text style = {styles.text} > {title} </Text>
        </TouchableOpacity>
    )
}

export default Bottom

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#7FFFD4",
        paddingVertical: 20,
        borderRadius: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})
