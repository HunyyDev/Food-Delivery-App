import {StyleSheet} from 'react-native';
import React from 'react';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import HomeScreen from './src/screens/home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = props => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShow: false}}>
          <Stack.Screen name="Onboarding" options={{headerShown: false}}>
            {props => <OnboardingScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Login" options={{headerShown: false}}>
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Home" options={{headerShown: false}}>
            {props => <HomeScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
