import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
    <MainStack.Navigator
    //headerMode="none"
    initialRouteName="Home"
    >
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false}} />
        <MainStack.Screen name="Options" component={Options} />
    </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
    <ModalStack.Navigator>
        <ModalStack.Screen
         name="CurrencyList" 
         component={CurrencyList}
         options={({ route }) => ({
             title: route.params && route.params.title //route.params && checks that routes exist before trying to call properties on it
         })} 
         />
    </ModalStack.Navigator>
)

export default () => (
    <NavigationContainer>
        <ModalcdStackScreen />
    </NavigationContainer>
)