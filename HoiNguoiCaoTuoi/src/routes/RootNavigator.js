import {StyleSheet} from 'react-native';
import React from 'react';
import OnboardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/auth';
import HomeScreen from '../screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
            name="Home"
            component={HomeScreen}
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
