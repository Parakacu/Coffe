import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../Pages/Splash';
import Login from '../Pages/Login';
import Daftar from '../Pages/Daftar';
import { BottomNavigator } from '../Components/Atom';
import { Home, Notif, Profile, Search } from '../Pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <Tab.Navigator tabBar = {props => <BottomNavigator {...props} />} >
            <Tab.Screen name = "Home" component = {Home} />
            <Tab.Screen name = "Search" component = {Search} />
            <Tab.Screen name = "Notif" component = {Notif} />
            <Tab.Screen name = "Profile" component = {Profile} />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = "Splash"
                component = {Splash}
                options = {{headerShown: false}}
            />
            <Stack.Screen 
                name = "Login"
                component = {Login}
                options = {{headerShown: false}}
            />
            <Stack.Screen 
                name = "Daftar"
                component = {Daftar}
                options = {{headerShown: false}}
            />
            <Stack.Screen 
                name = "App"
                component = {App}
                options = {{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router;
