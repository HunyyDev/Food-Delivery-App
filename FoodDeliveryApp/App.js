import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/auth/LoginScreen';
// import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';

const App = props => {
  return (
    <View style={styles.container}>
      {/* <OnboardingScreen {...props} /> */}
      <LoginScreen {...props} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
