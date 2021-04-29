import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './screens/HomeScreen/Home';
import AuthBar from './components/AppBar/AppBar';
import {theme} from "./theme"
 
const Stack = createStackNavigator();
const Checker = ()=>{
    return(<View><Text>Checker</Text></View>)
}

const Navigation = ()=>{
    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Home"
            headerMode="screen"
            >
                <Stack.Screen
                 name="Home"
                 component={LandingScreen}
                 options ={{
                     header:()=>(<AuthBar 
                        title="Ucity"
                        titleStyle={{ fontSize: 30, fontWeight: 'bold', alignSelf: "center" }}
                        headerStyles={{ backgroundColor: theme.colors.primary, elevation: 0 }}
                        />)
                 }}


                />

            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Navigation;