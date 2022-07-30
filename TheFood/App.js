import React from 'react';
import {View} from 'react-native';
import OnBoardingScreen from './src/screens/onboarding';
import LoginScreen from './src/screens/auth';
// import HomeScreen from './src/screens/home';
import {SafeAreaView} from 'react-native';
import RootNavigator from './src/routes/RootNavigator';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <OnBoardingScreen /> */}
      {/* // <LoginScreen /> */}
      {/* <HomeScreen /> */}
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;
