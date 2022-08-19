// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import OnBoardingScreen from './src/onBoarding/OnBoardingScreen';
// import LoginScreen from './src/auth/LoginScreen';
// import HomeScreen from './src/home/HomeScreen';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import Screens14 from './src/screens/Screens14';
// import {IMG_BackButton, IMG_Background} from './src/assets/images/index';

// const Stack = createNativeStackNavigator();

// const App = props => {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Onboarding" options={{headerShown: false}}>
//             {props => <OnBoardingScreen {...props} />}
//           </Stack.Screen>
//           <Stack.Screen name="Login" options={{headerShown: false}}>
//             {props => <LoginScreen {...props} />}
//           </Stack.Screen>
//           <Stack.Screen name="Home" options={{headerShown: false}}>
//             {props => <HomeScreen {...props} />}
//           </Stack.Screen>
//           <Stack.Screen
//             name="Checkout"
//             component={Screens14}
//             options={{
//               title: 'Checkout',
//               headerTitleAlign: 'center',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//               },
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// };

// export default App;

import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CUSTOM_COLOR from './src/constants/colors';
import RootNavigator from './src/routes/RootNavigator';

const App = props => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Screen19 /> */}
      {/* <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Check out"
            component={Screens13}
            options={{
              headerShown: false,
              title: 'Checkout',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerBackTitle: 'call back',
              headerBackTitleStyle: {
                fontSize: 1000,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}
      <RootNavigator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
  },
  HeadeStyles: {},
});
