import Screens from '../constants/screen';
import Onboarding from '../screens/Onboarding';
import LoginScreen from '../screens/Auth';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

export const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <>
      <Stack.Navigator
        initialRouteName={Screens.ONBOARDING}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={Screens.LOGIN} component={LoginScreen} />
      </Stack.Navigator>
    </>
  );
};

export default AuthNavigator;
