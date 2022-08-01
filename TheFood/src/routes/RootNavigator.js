import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAME from '../assets/constants/screens';
import OnBoardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/auth';
import LoaderScreen from '../screens/loader';
import NoFoundItemScreen from '../screens/notFoundItem';
import NoInternetScreen from '../screens/noInternet';
import CartScreen from '../screens/cart';
import colors from '../assets/constants/colors';
// import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN_NAME.CART_SCREEN}
          component={CartScreen}
          options={{
            // title: 'Cart',
            // headerStyle: {
            //   backgroundColor: colors.ATHENS_GRAY,
            // },
            // headerTintColor: '#000',
            // headerTitleStyle: {
            //   fontWeight: 'normal',
            //   fontFamily: 'FontsFree-Net-Abel-Regular'
            // },
            // headerTitleAlign: 'center',
            // headerShadowVisible: false,
            headerShown: false,
          }}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.ONBOARDING_SCREEN}
          component={OnBoardingScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.NO_INTERNET}
          component={NoInternetScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.NO_FOUND_ITEM_SCREEN}
          component={NoFoundItemScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.LOADING_SCREEN}
          component={LoaderScreen}
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