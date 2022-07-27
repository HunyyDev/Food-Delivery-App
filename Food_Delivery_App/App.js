import React from 'react';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import Login from './src/screens/auth/Login';
import HomeScreen from './src/screens/HomeScreen';
import {createNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';

import {Text} from 'react-native';

const App = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default App;

// import React from 'react';
// import OnBoardingScreen from './src/screens/OnBoardingScreen';
// import Login from './src/screens/auth/Login';
// import HomeScreen from './src/screens/HomeScreen';
import {NavigationContainer} from 'react-navigation';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//         <Stack.Navigator initialRouteName="Onboarding" screenOptions={{headerShown: false}}>
//           <Stack.Screen name="Onboarding" component={OnBoardingScreen} />
//           <Stack.Screen name="Login" component={Login} />
//           {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
