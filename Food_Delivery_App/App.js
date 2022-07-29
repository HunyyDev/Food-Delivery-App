// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import OnBoardingScreen from './src/screens/onBoarding/OnBoardingScreen';
// import LoginScreen from './src/screens/auth/LoginScreen';
// import HomeScreen from './src/screens/home/HomeScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const App = props => {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShown: false}}>
//           <Stack.Screen name="Onboarding" options={{headerShown: false}}>
//             {props => <OnBoardingScreen {...props} />}
//           </Stack.Screen>
//           <Stack.Screen name="Login" options={{headerShown: false}}>
//             {props => <LoginScreen {...props} />}
//           </Stack.Screen>
//           <Stack.Screen name="Home" options={{headerShown: false}}>
//             {props => <HomeScreen {...props} />}
//           </Stack.Screen>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// export default App;

// import React from 'react';
// import RootNavigator from './src/routes/RootNavigator';

// const App = props => {
//   return <RootNavigator {...props} />
// }

// export default App

import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SCREEN_NAME from './src/constants/screens';
import CUSTOM_COLOR from './src/constants/colors';
import FONT_FAMILY from './src/constants/fonts';

import HistoryScreen from './src/screens/history/HistoryScreen';
import OrderScreen from './src/screens/order/OrderScreen';
import NoConnectScreen from './src/screens/noConnect/NoConnectScreen';
import NotFoundScreen from './src/screens/notFound/NotFoundScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* NO HISTORY SCREEN*/}
          {/* <Stack.Screen
            name = 'HistoryScreen'
            component = {HistoryScreen}
            options = {{
              headerShown: false,
            }}
          /> */}

        {/* ORDER SCREEN */}
        {/* <Stack.Screen
          name = 'OrderScreen'
          component = {OrderScreen}
          options = {{
            headerShown: false,
          }}
        /> */}

      {/* NO CONNECT SCREEN */}
      {/* <Stack.Screen
          name = 'NoConnectScreen'
          component = {NoConnectScreen}
          options = {{
            headerShown: false,
          }}
        /> */}

        <Stack.Screen
            name = 'NotFoundScreen'
            component = {NotFoundScreen}
            options = {{
              headerShown: false,
            }}
            
        />

      </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

