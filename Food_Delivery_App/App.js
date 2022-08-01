
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import Login from './src/screens/auth/Login';
import HomeScreen from './src/screens/HomeScreen';
import FoodInfoScreen from './src/screens/foodinfo';
import MyProScreen from './src/screens/myprofile/MyProfile';
import HistoryScreen from './src/screens/history';
import CartScreen from './src/screens/Cart';
import SearchScreen from './src/screens/search';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{headerShown: false}} 
      >
        <Stack.Screen name="OBS" component={OnBoardingScreen} />
        <Stack.Screen name="LG" component={Login} />
        <Stack.Screen name="HS" component={HomeScreen} />
        <Stack.Screen name="FIS" component={FoodInfoScreen}/>
        <Stack.Screen name="MPS" component={MyProScreen}/>
        <Stack.Screen name="HIS" component={HistoryScreen}/>
        <Stack.Screen name="CS" component={CartScreen}/>
        <Stack.Screen name="SS" component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;