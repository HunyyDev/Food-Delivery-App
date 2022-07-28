import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/auth';
import SignUpScreen from '../screens/auth/sign-up';
import HomeScreen from '../screens/home';
import SCREEN_NAME from '../constants/screen';
import ProductList from '../screens/products/ProductList';
import ProductDetail from '../screens/products/ProductDetail';

//const {Navigator, Screen} = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  return (
    // <OnboardingScreen />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={SCREEN_NAME.PRODUCT_DETAIL}>
        <Stack.Screen
          name={SCREEN_NAME.ONBOARDING}
          component={OnboardingScreen}
        />
        <Stack.Screen name={SCREEN_NAME.LOGIN} component={LoginScreen} />
        <Stack.Screen name={SCREEN_NAME.SIGNUP} component={SignUpScreen} />
        <Stack.Screen name={SCREEN_NAME.HOME} component={HomeScreen} />
        <Stack.Screen name={SCREEN_NAME.PRODUCT_LIST} component={ProductList} />
        <Stack.Screen
          name={SCREEN_NAME.PRODUCT_DETAIL}
          component={ProductDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
