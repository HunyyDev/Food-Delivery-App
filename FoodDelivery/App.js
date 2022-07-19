import {Onboarding} from './src/screens/onboarding';
import {Login} from './src/screens/login';
import {WaitingForUpgrade} from './src/screens/WaitingForUpgrade';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

const App = props => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Onboarding" options={{headerShown: false}}>
          {props => <Onboarding {...props} />}
        </stack.Screen>
        <stack.Screen name="Login" options={{headerShown: false}}>
          {props => <Login {...props} />}
        </stack.Screen>
        <stack.Screen name="WaitingForUpgrade" options={{headerShown: false}}>
          {props => <WaitingForUpgrade {...props} />}
        </stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
