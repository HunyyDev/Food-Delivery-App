<<<<<<< HEAD
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
=======
/* eslint-disable prettier/prettier */
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import CUSTOM_COLOR from './src/constants/colors';
// import {IMG_Logo} from './src/assets/images';
import {IMG_Background} from './src/assets/images';
import FONT_FAMILY from './src/constants/fonts';
import scale from './src/constants/responsive';
// import Onboarding from './screens/Onboarding/Onboarding';
// import SignIn from './screens/Login/Login';
import Home from './screens/HomeScreen/Home';
import MainNavigator from './navigation/navigation';
// const Login = 'Login';
// const signUp = 'Sign-up';
const Stack = createNativeStackNavigator();
const App = () => {
  // const [page, setPage] = useState(Login);
  return (
    // <Onboarding />
    // <SignIn />
    <MainNavigator />
    // <Home />
  );
};
export default App;
>>>>>>> Tournesol/dev
