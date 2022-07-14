import React from 'react';
import {StyleSheet} from 'react-native';
import LoginScreen from './src/screens/auth';

const App = props => {
  return <LoginScreen {...props} />;
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  text: {
    fontFamily: 'Montserrat-Black',
    fontSize: 20,
  },
});

export default App;
