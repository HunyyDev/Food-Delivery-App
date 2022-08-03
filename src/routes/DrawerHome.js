import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/home';
import CustomDrawer from '../components/CustomDrawer';
import SCREEN_NAME from '../constants/screens';

const Drawer = createDrawerNavigator();

const DrawerHome = props => {
  return (
    // <NavigationContainer>
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="MainScreen" component={HomeScreen} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default DrawerHome;

const styles = StyleSheet.create({});
