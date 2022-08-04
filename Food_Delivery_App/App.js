
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

import { createDrawerNavigator } from '@react-navigation/drawer';
import MyInforScreen from './src/screens/myprofile1';
//import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

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
        <Stack.Screen name="MyInforScreen" component={MyInforScreen}/>  

        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;






// import React from 'react';
// //import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }