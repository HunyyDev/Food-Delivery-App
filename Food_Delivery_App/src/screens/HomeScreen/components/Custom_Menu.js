import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import Login from './src/screens/auth/Login';
import HomeScreen from './src/screens/HomeScreen';
import FoodInfoScreen from './src/screens/foodinfo';
import MyProScreen from './src/screens/myprofile/MyProfile';
import HistoryScreen from './src/screens/history';
import CartScreen from './src/screens/Cart';
import SearchScreen from './src/screens/search';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={OnBoardingScreen} />
        <Drawer.Screen name="Notifications" component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
