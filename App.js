import React from 'react';
import LoginScreen from './src/screens/auth';
import OnboardingScreen from './src/screens/onboarding';
import HomeScreen from './src/screens/home';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const App = props => {
  return (
    <>
      <OnboardingScreen {...props} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
