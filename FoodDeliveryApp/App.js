import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';
import LoginScreen from './src/screens/auth/LoginScreen';

const App = props => {
  return (
    <View style={styles.container}>
      <LoginScreen {...props}/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
