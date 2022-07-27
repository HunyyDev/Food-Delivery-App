import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/auth';
import OnboardingScreen from '../screens/onboarding';
import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator;

const RootNavigator = props => {
  return (
    // <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        // options={{title: 'Welcome'}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default RootNavigator;
