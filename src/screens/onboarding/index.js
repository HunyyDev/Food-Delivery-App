import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const OnboardingScreen = () => {
  return (
    <>
      <View style={styles.contentContainer}>
        <Text style={styles.text}>Config custom font in React Native</Text>
      </View>
    </>
  );
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

export default OnboardingScreen;
