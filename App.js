import React from 'react';
import LoginScreen from './src/screens/auth/index.js';
import OnboardingScreen from './src/screens/onboarding/index.js';
import HomeScreen from './src/screens/home/index.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
