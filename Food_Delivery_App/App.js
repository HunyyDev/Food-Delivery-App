import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';

import LonginScreen from './src/screens/auth';
import OnBoardingScreen from './src/screens/onboarding';
import HomeScreen from './src/screens/home';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = props => {
  return (
    <NavigationContainer>
      {/* <OnBoardingScreen {...props} /> */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Onboarding"
          component={OnBoardingScreen}
          options={{title: 'Wellcome'}}
        />
        <Stack.Screen name="Login" component={LonginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
