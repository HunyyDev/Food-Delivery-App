
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginScreen from './src/screens/login/index';
import OnBoardingScreen from './src/screens/onboarding/index';
import HomeScreen from './src/screens/auth/index';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

