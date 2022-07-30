import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAME from '../constants/screens';
import OnboardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/login/indexB';
import CartScreen from '../../App';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN_NAME.ONBOARDING}
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREEN_NAME.LOGIN}
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAME.CART}
        component={CartScreen}
        options={{headerShown: false}}
      />
    </NavigationContainer>
  );
};
export default RootNavigator;
