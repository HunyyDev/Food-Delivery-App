import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/auth/Login';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    resizeMode: 'cover',
  },
});

export default App;
