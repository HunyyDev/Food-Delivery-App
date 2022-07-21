import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from './src/screens/auth';

const App = props => {
  return (
    <>
      <View style={styles.container}>
        <LoginScreen {...props} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
