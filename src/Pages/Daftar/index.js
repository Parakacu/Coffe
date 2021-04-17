import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Bottom, Input } from "../../Components/Atom";
import { Gap } from '../../Components/Molekul'


const Daftar = ({navigation}) => {
    return (
        <View style = {styles.Page} >
            <View style = {styles.content2} >
                <Text style = {styles.title1} >Kopi Gantung</Text>
                <Text style = {styles.title2} >Mari Mengopi Sampai Pagi</Text>
            </View>
            <Gap height = {20}/>
            <Text style = {styles.text} >Daftar</Text>
            <Gap height = {20}/>
            <View style = {styles.content} >
                <Input label = "UsernName" />
                <Gap height = {10}/>
                <Input label = "Email"/>
                <Gap height = {10}/>
                <Input label = "Password"/>
                <Gap height = {10}/>
                <Input label = "Konfirmasi Password"/>
                <Gap height = {20}/>
                <Bottom title = "Create a account" onPress = {() => navigation.replace('App')} />
            </View>
        </View>
    )
}

export default Daftar

const styles = StyleSheet.create({
    Page: {
        backgroundColor: 'white',
        flex: 1,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20
    },
    content: {
        paddingHorizontal: 20
    },
    content2: {
        paddingVertical : 20,
        paddingHorizontal : 30
    },
    title1: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    title2: {
        fontSize: 12,
        fontWeight: "600",
        width: 100
    }

})
