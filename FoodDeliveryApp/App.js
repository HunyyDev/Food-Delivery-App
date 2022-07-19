import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OnboardingScreen from './src/screens/onboarding/OnboardingScreen';

const App = props => {
  return (
    <View style={styles.container}>
      <OnboardingScreen {...props} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
