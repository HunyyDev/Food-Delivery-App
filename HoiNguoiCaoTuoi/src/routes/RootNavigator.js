import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from '../screens/auth';
import Drawer from '../screens/drawer';
import HomeScreen from '../screens/home';
import {default as NoInternet} from '../screens/noInternet';
import {default as History} from '../screens/history';
import {default as NotFound} from '../screens/notFound';
import OnboardingScreen from '../screens/onboarding';
import {default as ProductList} from '../screens/products/ProductList';
import {default as ProductDetail} from '../screens/products/ProductDetail';
import {default as ProductItem} from '../screens/products/components/ProductItem';
import {default as ForgotPasswordScreen} from '../screens/auth/ForgotPasswordScreen';

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
            component={NotFound}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="NoInternet"
            component={NoInternet}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'ProductList'}
            component={ProductList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'ProductDetail'}
            component={ProductDetail}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'ProductItem'}
            component={ProductItem}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'ForgotPasswordScreen'}
            component={ForgotPasswordScreen}
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
