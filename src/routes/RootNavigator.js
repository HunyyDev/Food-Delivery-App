import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import SCREEN_NAME from '../constants/screens';

import LoginScreen from '../screens/auth';
import CartScreen from '../screens/checkout/CartScreen';
import DeliveryScreen from '../screens/checkout/DeliveryScreen';
import PaymentScreen from '../screens/checkout/PaymentScreen';
import HomeScreen from '../screens/home';
import OnboardingScreen from '../screens/onboarding';
import FirstTimeScreen from '../screens/onboarding/FirstTimeScreen';
import InformationScreen from '../screens/profile/InformationScreen';
import MyProfileScreen from '../screens/profile/MyProfileScreen';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  return (
    // <SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SCREEN_NAME.FIRST_TIME}
          component={FirstTimeScreen}
        />
        <Stack.Screen
          name={SCREEN_NAME.ONBOARDING}
          component={OnboardingScreen}
        />
        <Stack.Screen name={SCREEN_NAME.LOGIN} component={LoginScreen} />
        <Stack.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREEN_NAME.DELIVERY} component={DeliveryScreen} />
        <Stack.Screen name={SCREEN_NAME.PAYMENT} component={PaymentScreen} />
        <Stack.Screen
          name={SCREEN_NAME.INFORMATION}
          component={InformationScreen}
        />
        <Stack.Screen
          name={SCREEN_NAME.MY_PROFILE}
          component={MyProfileScreen}
        />
        <Stack.Screen name={SCREEN_NAME.CART} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default RootNavigator;
