import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAME from '../assets/constants/screens';
import OnBoardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/auth';
import LoaderScreen from '../screens/loader';
// import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN_NAME.LOADING_SCREEN}
          component={LoaderScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.ONBOARDING_SCREEN}
          component={OnBoardingScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.LOGIN_SCREEN}
          component={LoginScreen}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

// const styles = StyleSheet.create({});
