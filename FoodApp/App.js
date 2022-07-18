import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginScreen from './src/screens/auth';
import CUSTOM_COLOR from './src/constants/colors';
// import OnboardingScreen from './src/screens/onboarding';

const App = props => {
  return (
    <View style={styles.container}>
      <>
        <LoginScreen {...props} />
        {/* <OnboardingScreen {...props} /> */}
      </>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
});

export default App;
