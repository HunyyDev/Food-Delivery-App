import React from 'react';
import LoginScreen from './src/screens/auth/index.js';
import OnboardingScreen from './src/screens/onboarding/index.js';
import HomeScreen from './src/screens/home/index.js';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigator from './src/routes/RootNavigator.js';
import DeliveryScreen from './src/screens/checkout/DeliveryScreen.js';
import PaymentScreen from './src/screens/checkout/PaymentScreen.js';

const Stack = createNativeStackNavigator();

const App = props => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    //     <Stack.Screen
    //       name="Login"
    //       component={LoginScreen}
    //       // options={{title: 'Welcome'}}
    //     />
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    //   {/* <RootNavigator {...props} /> */}
    // </NavigationContainer>
    // <DeliveryScreen />
    <PaymentScreen />
  );
};

export default App;
