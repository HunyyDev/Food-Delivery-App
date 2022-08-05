import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from '../screens/auth';
import Drawer from '../screens/drawer';
import HomeScreen from '../screens/home';
import {default as History, default as noInternet} from '../screens/noInternet';
import notFound from '../screens/notFound';
import OnboardingScreen from '../screens/onboarding';

const RootNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={OnboardingScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Drawer"
            component={Drawer}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="History"
            component={History}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NotFound"
            component={notFound}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NoInternet"
            component={noInternet}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RootNavigator;
