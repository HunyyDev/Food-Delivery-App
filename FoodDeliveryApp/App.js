import {StyleSheet} from 'react-native';
import React from 'react';
<<<<<<< HEAD
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import LoginScreen from './src/screens/auth/loginScreen';
import HomeScreen from './src/screens/home/homeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
=======
import RootNavigator from './src/routes/RootNavigator';
>>>>>>> bf0d160f29d09d88eb522925be63e2d22f7fe022

const App = props => {
  return <RootNavigator {...props} />;
};

export default App;
const styles = StyleSheet.create({});
