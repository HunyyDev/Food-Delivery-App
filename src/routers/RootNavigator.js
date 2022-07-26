import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Navigation,
} from 'react-native';
import React from 'react';
import SCREEN_NAME from '../constants/SCREEN_NAME';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import OnboardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/auth';
const stack = createNativeStackNavigator();

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName={SCREEN_NAME.onBoarding}
        defaultScreenOptions={{headerShow: false}}>
        <stack.Screen
          name={SCREEN_NAME.onBoarding}
          component={OnboardingScreen}
          options={{headerShown: false}}></stack.Screen>
        <stack.Screen
          name={SCREEN_NAME.homeScreen}
          options={{headerShow: false}}
          component={HomeScreen}></stack.Screen>
        <stack.Screen
          name={SCREEN_NAME.Auth}
          options={{headerShow: false}}
          component={LoginScreen}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
