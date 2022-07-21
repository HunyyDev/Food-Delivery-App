import React from 'react';
import OnBoardingScreen from './src/screens/onboarding';
import {View} from 'react-native';
import Login from './src/screens/auth';
import {SafeAreaView} from 'react-native';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <OnBoardingScreen /> */}
      <Login />
    </SafeAreaView>
  );
};

export default App;
