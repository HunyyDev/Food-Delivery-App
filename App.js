import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
// import CUSTOM_COLOR from './src/constants/colors.js';
// import FONT_FAMILY from './src/constants/fonts.js';
import LoginScreen from './src/screens/auth/index.js';
import OnboardingScreen from './src/screens/onboarding/index.js';
import HomeScreen from './src/screens/home/index.js';

const App = props => {
  // return <LoginScreen {...props} />;
  // return <OnboardingScreen />;
  return <HomeScreen {...props} />;
};

const styles = StyleSheet.create({});

export default App;
