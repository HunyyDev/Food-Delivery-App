import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import LoadingScreen from './src/screens/loading/LoadingScreen';
import RootNavigator from './src/routes/RootNavigator';
import DrawerNavigator from './src/routes/DrawerNav';

const App = props => {
  // return <RootNavigator {...props} />;
  return <DrawerNavigator {...props} />;
};

export default App;
const styles = StyleSheet.create({});
