import React from 'react';
import LoginScreen from './source/screen/login';
import Onboarding from './source/screen/onboarding';
import HomeScreen from './source/screen/home';
import CartScreen from './source/screen/cart';
import {NavigationContainer, CommonActions} from '@react-navigation/native';
import {createNativeStackNavigator, TransitionSpecs, HeaderStyleInterpolators} from '@react-navigation/native-stack';
// import 'react-native-gesture-handler';
import CheckOut2Screen from './source/screen/checkout/checkout2';
import SearchScreen from './source/screen/search';
import HistoryScreen from './source/screen/history';
import OrderScreen from './source/screen/order';
import NoWifiScreen from './source/screen/nowifi';
import HomeScreen2 from './source/screen/home2';
import LoadingScreen from './source/screen/loading';
import FoodInfoScreen from './source/screen/foodinfo';
import MyInFoScreen from './source/screen/myinfo';
import { Easing } from 'react-native-reanimated';
import { CardStyleInterpolators } from '@react-navigation/stack';
import CheckOut1Screen from './source/screen/checkout/checkout1';
import MyProfileScreen from './source/screen/myprofile';




const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  }
}

const closeConfig = {
  Animation: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  }
}



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" 
      screenOptions={{ headerShown: false,
      gestureEnabled: true,
      gestureDirection: 'horizontal',
      transitionSpec:{open: config, close: closeConfig},
      cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
      }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyInFo" component={MyInFoScreen} />
        <Stack.Screen name="FoodInFo" component={FoodInfoScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="MyProfile" component={MyProfileScreen} />
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="CheckOut1" component={CheckOut1Screen} />
        <Stack.Screen name="CheckOut2" component={CheckOut2Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

