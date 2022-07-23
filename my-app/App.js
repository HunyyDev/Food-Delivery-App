import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/onboarding';
import LoginScreen from './src/screens/auth';
import SignUpScreen from './src/screens/auth/sign-up';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    // <OnboardingScreen />
    <NavigationContainer>
      <Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="OnBoardingScreen">
        <Screen name="OnBoardingScreen" component={OnboardingScreen} />
        <Screen name="LoginScreen" component={LoginScreen} />
        <Screen name="SignUpScreen" component={SignUpScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
