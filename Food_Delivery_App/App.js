import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';

import LonginScreen from './src/screens/auth';
import OnBoardingScreen from './src/screens/onboarding';
import HomeScreen from './src/screens/home';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAME from './src/constant/screens';
import HistoryScreen from './src/screens/bottomBar/HistoryScreen';
import OderScreen from './src/screens/oder/OderScreen';
import ProfileScreen from './src/screens/bottomBar/ProfileScreen';
import InfomationScreen from './src/screens/profile/InfomationScreen';
import ProductDetail from './src/screens/products/ProductDetail';
import LikedProductScreen from './src/screens/bottomBar/LikedProductScreen';

const Stack = createNativeStackNavigator();

const App = props => {
  return (
    <NavigationContainer>
      {/* <OnBoardingScreen {...props} /> */}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={SCREEN_NAME.Onbroading}
          component={OnBoardingScreen}
          options={{title: 'Wellcome'}}
        />
        <Stack.Screen name={SCREEN_NAME.Login} component={LonginScreen} />
        <Stack.Screen name={SCREEN_NAME.Home} component={HomeScreen} />
        <Stack.Screen name={SCREEN_NAME.History} component={HistoryScreen} />
        <Stack.Screen name={SCREEN_NAME.Oder} component={OderScreen} />
        <Stack.Screen name={SCREEN_NAME.Profile} component={ProfileScreen} />
        <Stack.Screen name={SCREEN_NAME.Infor} component={InfomationScreen} />
        <Stack.Screen
          name={SCREEN_NAME.ProductDetail}
          component={ProductDetail}
        />
        <Stack.Screen name={SCREEN_NAME.Liked} component={LikedProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
