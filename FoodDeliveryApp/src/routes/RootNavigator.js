import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/CartScreen';
import LoadingScreen from '../screens/loading/LoadingScreen';
import PaymentScreen from '../screens/payment/PaymentScreen';
// import ScartScreen from './src/screens/cart/ScartScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{headerShown: true}}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{headerShown: true}}
          />

          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
