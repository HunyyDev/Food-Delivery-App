import React from 'react';
import LoginScreen from './source/screen/login';
import Onboarding from './source/screen/onboarding';
import HomeScreen from './source/screen/home';
<<<<<<< HEAD
import CartScreen from './source/screen/cart';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
=======
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CheckOut2Screen from './source/screen/checkout/checkout2';
import SearchScreen from './source/screen/search';

>>>>>>> e07150a4ec0dbe8f84ec6e71449a1df89ec1eab2

const Stack = createNativeStackNavigator();

const App = () => {
  return (
<<<<<<< HEAD
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    // <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown: false}}>
    //       <Stack.Screen name="Onboarding" component={Onboarding} />
    //       <Stack.Screen name="Login" component={LoginScreen} />
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //     </Stack.Navigator>
    // </NavigationContainer>
    <CheckOut2Screen></CheckOut2Screen>
>>>>>>> e07150a4ec0dbe8f84ec6e71449a1df89ec1eab2
  );
};

export default App;
