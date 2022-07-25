import LoginScreen from './src/auth/LoginScreen';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/home/HomeScreen';

const App = props => {
  return (
    <View style={styles.container}>
      <LoginScreen {...props} />
      {/* <HomeScreen {...props} /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
