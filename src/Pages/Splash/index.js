import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyLogo } from '../../Assets/dummy'

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace ('Login')    
        }, 3000);
    }, [])
    return (
        <View style = {styles.page} >
            <DummyLogo/>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
            backgroundColor: '#FFEFD9',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
    }
})
