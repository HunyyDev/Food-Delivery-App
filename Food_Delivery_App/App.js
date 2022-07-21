import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import React from 'react';
import CustomButton from './src/components/CustomButton';
import LoginScreen from './src/screens/auth/Login';
import {IMG_VEGGIE} from './src/assets/images';
import {IMG_BACKGROUND} from './src/assets/images';

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
