import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';

import OnBoarding from './src/screens/OnBoarding/OnBoarding';
import Authentication from './src/screens/Authentication/Authentication';
import Home from './src/screens/Home/Home';

import COLORS from './src/constants/colors';
import FONT_FAMILY from './src/constants/fonts';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Authentication" component={Authentication} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  BackGround: {
    backgroundColor: COLORS.SUNSET_ORANGE,
    flex: 1,
  },
  ImageLogo: {
    width: 67,
    height: 77,
    marginLeft: 49,
    marginTop: 56,
  },
  Text: {
    fontFamily: FONT_FAMILY.SF_PRO_ROUNDED_BOLD,
    width: 275,
    fontSize: 53,
    color: COLORS.WHITE,
    marginLeft: 51,
    marginTop: 31,
  },
  ImageBackground: {
    marginTop: 92,
    marginLeft: 0,
  },
});

export default App;
