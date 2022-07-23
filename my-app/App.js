import {View, Text} from 'react-native';
import React from 'react';
import OnboardingScreen from './src/screens/onboarding';
import LoginScreen from './src/screens/auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const {Navigator, Screen} = createNativeStackNavigator();
const App = props => {
  return (
    <>
      <NavigationContainer>
        <Navigator initialRouteName="OnBoardingScreen">
          <Screen name="OnBoardingScreen" component={OnboardingScreen} />
          <Screen name="LoginScreen" component={LoginScreen} />
          {/* <Screen name="SignUpScreen" component={SignUpScreen} /> */}
        </Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
