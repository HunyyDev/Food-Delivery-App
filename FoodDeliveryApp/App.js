import React from 'react';
import LoginScreen from './source/screen/login';
import Onboarding from './source/screen/onboarding';
import HomeScreen from './source/screen/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FoodInfoScreen from './source/screen/foodinfo';
import MyInFoScreen from './source/screen/myinfo';

const Stack = createNativeStackNavigator();

const App = () => {
  return <MyInFoScreen />;
};
export default App;
