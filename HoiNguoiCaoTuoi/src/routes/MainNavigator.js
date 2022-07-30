import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SCREEN_NAME from '../constants/screens';
import HomeScreen from '../screens/home';
import ProductList from '../screens/products/ProductList';
import ProductDetail from '../screens/products/ProductDetail';

const MainNavigator = props => {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREEN_NAME.MAIN.HOME}
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={SCREEN_NAME.PRODUCT_LIST}
            component={ProductList}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={SCREEN_NAME.PRODUCT_DETAIL}
            component={ProductDetail}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
