import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAME from '../constants/screens';
import HomeScreen from '../screens/home/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import OnBoardingScreen from '../screens/onBoarding/OnBoardingScreen';

const RootNavigator = (props) => {
    const Stack = createNativeStackNavigator()
  return (
    <>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={SCREEN_NAME.ONBOARD} 
                    component={OnBoardingScreen} 
                    options={{headerShown:false}} />
                <Stack.Screen 
                    name={SCREEN_NAME.LOGIN} 
                    component={LoginScreen} 
                    options={{headerShown:false}} />
                <Stack.Screen 
                    name={SCREEN_NAME.HOME} 
                    component={HomeScreen} 
                    options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    </>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})