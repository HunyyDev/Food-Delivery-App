import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';

const RootNavigator = props => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <AuthNavigator {...props} />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
