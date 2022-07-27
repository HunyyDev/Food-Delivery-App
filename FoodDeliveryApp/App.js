import React from 'react';
import LoginScreen from './source/screen/login';
import Onboarding from './source/screen/onboarding';
import HomeScreen from './source/screen/home';
import CartScreen from './source/screen/cart';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckOut2Screen from './source/screen/checkout/checkout2';
import SearchScreen from './source/screen/search';
import HistoryScreen from './source/screen/history';
import OrderScreen from './source/screen/order';
import NoWifiScreen from './source/screen/nowifi';
import HomeScreen2 from './source/screen/home2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown: false}}>
    //       <Stack.Screen name="Onboarding" component={Onboarding} />
    //       <Stack.Screen name="Login" component={LoginScreen} />
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //     </Stack.Navigator>
    // </NavigationContainer>
    <HomeScreen2></HomeScreen2>
  );
};

export default App;
