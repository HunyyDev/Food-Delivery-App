/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LINKS from './src/constants/links';
import HomeScreen from './src/screens/Home';
import AuthenticationScreen from './src/screens/Authentication';
import OnBoardingScreen from './src/screens/OnBoarding';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={LINKS.ON_BOARDING} component={OnBoardingScreen} />
        <Stack.Screen
          name={LINKS.AUTHENTICATION}
          component={AuthenticationScreen}
        />
        <Stack.Screen name={LINKS.HOME} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
