/* eslint-disable no-shadow */
import {Onboarding} from './src/screens/onboarding';
import {LoginScreen} from './src/screens/login';
import {WaitingForUpgrade} from './src/screens/WaitingForUpgrade';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens/HomeScreen';
<<<<<<< HEAD
<<<<<<< HEAD
import {OdersScreen} from './src/screens/OdersScreen';
=======
import {OrdersScreen} from './src/screens/OrdersScreen';
>>>>>>> 3d9830577ea761f255b66429cc4b3b1de217c6ae
import NoInternetScreen from './src/screens/noInternet';
import MyProfileScreen from './src/screens/Profile/Information/index';
import HistoryScreen from './src/screens/History';
import Payment from './src/screens/Profile/PaymentMethod/index';

=======
import ProductDetail from './src/screens/ProductDetail';
>>>>>>> 997980b42f3d6ca6110de8ba447273ae163ebc33
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
<<<<<<< HEAD
<<<<<<< HEAD
        <stack.Screen name="OdersScreen" options={{headerShown: false}}>
          {props => <OdersScreen {...props} />}
=======
        <stack.Screen name="OrdersScreen" options={{headerShown: false}}>
          {props => <OrdersScreen {...props} />}
>>>>>>> 3d9830577ea761f255b66429cc4b3b1de217c6ae
        </stack.Screen>
        <stack.Screen name="NoInternetScreen" options={{headerShown: false}}>
          {props => <NoInternetScreen {...props} />}
        </stack.Screen>
        <stack.Screen name="MyProfileScreen" options={{headerShown: false}}>
          {props => <MyProfileScreen {...props} />}
        </stack.Screen>
        <stack.Screen name="Payment" options={{headerShown: false}}>
          {props => <Payment {...props} />}
        </stack.Screen>
        <stack.Screen name="HistoryScreen" options={{headerShown: false}}>
          {props => <HistoryScreen {...props} />}
=======
        <stack.Screen name="ProductDetail" options={{headerShown: false}}>
          {props => <ProductDetail {...props} />}
>>>>>>> 997980b42f3d6ca6110de8ba447273ae163ebc33
        </stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
