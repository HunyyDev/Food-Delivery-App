/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './src/screens/home/index';
import LoginScreen from './src/screens/auth/index';

const App = props => {
  //return <OnboardingScreen {...props} />;
  return <LoginScreen />;
};

export default App;
