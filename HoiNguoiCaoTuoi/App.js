import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from './src/screens/auth';
import HomeScreen from './src/screens/home';
import OnboardingScreen from './src/screens/onboarding';

// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// const App = props => {
//   return (
//     <>
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{headerShow: false}}>
//           <Stack.Screen name="Onboarding" options={{headerShown: false}}>
//             {props => <OnboardingScreen {...props} />}
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

const App = props => {
  return (
    <>
      <View style={styles.container}>
        <HomeScreen {...props} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
