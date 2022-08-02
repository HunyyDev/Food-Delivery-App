<<<<<<< HEAD
import {StyleSheet, Text, View} from 'react-native';
=======
>>>>>>> 5845717fc457df84f8cd9c78a691baf700e45c7e
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import SCREEN_NAME from '../constants/screens';
import HomeScreen from '../screens/home';
import ProductList from '../screens/products/ProductList';
import ProductDetail from '../screens/products/ProductDetail';

const MainNavigator = props => {
<<<<<<< HEAD

    const Stack = createNativeStackNavigator();
=======
  const Stack = createNativeStackNavigator();
>>>>>>> 5845717fc457df84f8cd9c78a691baf700e45c7e

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
<<<<<<< HEAD

const styles = StyleSheet.create({});
=======
>>>>>>> 5845717fc457df84f8cd9c78a691baf700e45c7e
