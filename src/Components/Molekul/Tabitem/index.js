import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconBuyActive, IconBuyDisable, IconHomeActive, IconHomeDisable, IconNotificationActive, IconNotificationDisable, IconProfileActive, IconProfileDisable } from '../../../Assets/icon'

const Tabitem = ({title, active, onPress}) => {
    const Icon = () => {
        if (title === 'Home') {
            return active ? <IconHomeActive/> : <IconHomeDisable/>
        }
        if (title === 'Search') {
            return active ? <IconBuyActive/> : <IconBuyDisable/>
        }
        if (title === 'Notif') {
            return active ? <IconNotificationActive/> : <IconNotificationDisable/>
        }
        if (title === 'Profile') {
            return active ? <IconProfileActive/> : <IconProfileDisable/>
        }
        return <IconHomeActive/>
    }
    return (
        <TouchableOpacity style = {styles.page} onPress = {onPress} >
            <Icon/>
            <Text style = {styles.text(active)} >{title}</Text>
        </TouchableOpacity>
    )
}

export default Tabitem

const styles = StyleSheet.create({
    page:{
        alignItems: 'center',
    },
    text: (active) => (
        {
            fontSize: 10,
            color: active ? 'white' : 'black',
        }
    ),
})
