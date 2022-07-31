import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';

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
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const getInfo = async () => {
    const name = await AsyncStorage.getItem('USERNAME');
    const pass = await AsyncStorage.getItem('PASSWORD');
    console.log('name', name);
    console.log('pass', pass);
    setUsername(name);
    setPassword(pass);
    console.log('username', username);
    console.log('password', password);
  };
  useEffect(() => {
    getInfo();
  }, [username, password]);
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
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
      </Stack.Navigator> */}
      {username != undefined && password != undefined ? (
        <MainNavigator {...props} />
      ) : (
        <AuthNavigator {...props} />
      )}
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default RootNavigator;
