import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LonginScreen from './src/screens/auth';
import OnBoardingScreen from './src/screens/onboarding';

const App = props => {
  return (
    <>
      <OnBoardingScreen {...props} />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
