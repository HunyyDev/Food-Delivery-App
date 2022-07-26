/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import OnboardingScreen from './src/screens/onboarding';
import HomeScreen from './src/screens/home';
import RootNavigator from './src/routers/RootNavigator';
//import LoginScreen from './src/screens/auth';
import CustomButton from './src/Components/CustomButton';
//import cu
const App = props => {
  return <RootNavigator></RootNavigator>;
  //return <HomeScreen></HomeScreen>;
  //return <LoginScreen></LoginScreen>;
  //return <CustomButton title="Login" type="Primary"></CustomButton>;
};

export default App;
