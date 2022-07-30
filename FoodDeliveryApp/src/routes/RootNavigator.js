import {StyleSheet} from 'react-native';
import React from 'react';
import OnboardingScreen from '../screens/onboarding/OnboardingScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/cart/CartScreen';
import LoadingScreen from '../screens/loading/LoadingScreen';
import PaymentScreen from '../screens/payment/PaymentScreen';
<<<<<<< HEAD
import MyProfileScreen from '../screens/profile/MyProfileScreen';

=======
import DetailProduct from '../screens/product/DetailProduct';
import MyProfileScreen from '../screens/profile/MyProfileScreen';
>>>>>>> 90518c2a0fc3ae70636c2eafca18b8407cdd2cf1
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <NavigationContainer>
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
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Loading"
            component={LoadingScreen}
            options={{headerShown: false}}
          />

          <Stack.Screen
<<<<<<< HEAD
=======
            name="DetailProduct"
            component={DetailProduct}
            options={{headerShown: false}}
          />

          <Stack.Screen
>>>>>>> 90518c2a0fc3ae70636c2eafca18b8407cdd2cf1
            name="Profile"
            component={MyProfileScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
