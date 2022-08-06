import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import SCREEN_NAME from '../constants/screens';
import HomeScreen from '../screens/home';
import {default as ProductList} from '../screens/products/ProductList';
import {default as ProductDetail} from '../screens/products/ProductDetail';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'ProductList'}
            component={ProductList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={'ProductDetail'}
            component={ProductDetail}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
