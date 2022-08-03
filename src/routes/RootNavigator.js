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
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerHome from './DrawerHome';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const getInfo = async () => {
    const name = await AsyncStorage.getItem('USERNAME');
    const pass = await AsyncStorage.getItem('PASSWORD');
    setUsername(name);
    setPassword(pass);
  };
  useEffect(() => {
    getInfo();
  }, [username, password]);
  return (
    <NavigationContainer>
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
