import {StyleSheet} from 'react-native';
import React from 'react';
import RootNavigator from './src/routes/RootNavigator';

const App = props => {
  return <RootNavigator {...props} />;
};

export default App;

const styles = StyleSheet.create({});
