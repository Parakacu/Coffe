import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { DummyLogo } from '../../Assets/dummy'
import { Bottom, Input } from '../../Components/Atom'
import { Gap, Link } from "../../Components/Molekul";

const Login = ({navigation}) => {
    return (
        <View style = {styles.page} >
            <Gap height = {15}/>
            <DummyLogo style = {styles.image} />
            <Gap height = {20}/>
            <Text style = {styles.textLogin} >Login</Text>
            <Gap height = {20}/>
            <View style = {styles.textinputan} >
                <Input label = "UserName"/>
                <Gap height = {15}/>
                <Input label = "Password"/>
                <Gap height = {15}/>
                <Bottom title = "Login" />
            </View>
            <Gap height = {15}/>
            <View style = {styles.link} >
                <Text> Belum Punya Akun ? </Text>
                <Link title = "Daftar" onPress = {() => navigation.navigate('Daftar')} />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FFEFD9",
        flex: 1,
    },
    image: {
        alignItems: 'center',
        justifyContent : 'center',
        marginLeft: 25
    },
    textLogin: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textinputan: {
        paddingHorizontal: 20
    },
    link: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})