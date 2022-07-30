import {Onboarding} from './src/screens/onboarding';
import {LoginScreen} from './src/screens/login';
import {WaitingForUpgrade} from './src/screens/WaitingForUpgrade';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
import ProductDetail from './src/screens/ProductDetail';
const stack = createNativeStackNavigator();

const App = props => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Onboarding" options={{headerShown: false}}>
          {props => <Onboarding {...props} />}
        </stack.Screen>
        <stack.Screen name="LoginScreen" options={{headerShown: false}}>
          {props => <LoginScreen {...props} />}
        </stack.Screen>
        <stack.Screen name="WaitingForUpgrade" options={{headerShown: false}}>
          {props => <WaitingForUpgrade {...props} />}
        </stack.Screen>
        <stack.Screen name="HomeScreen" options={{headerShown: false}}>
          {props => <HomeScreen {...props} />}
        </stack.Screen>
        <stack.Screen name="ProductDetail" options={{headerShown: false}}>
          {props => <ProductDetail {...props} />}
        </stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
