import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screens/auth';
import OnboardingScreen from '../screens/onboarding';
import HomeScreen from '../screens/home';
import DeliveryScreen from '../screens/checkout/DeliveryScreen';
import PaymentScreen from '../screens/checkout/PaymentScreen';
import InformationScreen from '../screens/profile/InformationScreen';
import MyProfileScreen from '../screens/profile/MyProfileScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name={'Delivery'} component={DeliveryScreen} />
        <Stack.Screen name={'Payment'} component={PaymentScreen} />
        <Stack.Screen name="Information" component={InformationScreen} />
        <Stack.Screen name="MyProfile" component={MyProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
