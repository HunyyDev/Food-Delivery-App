import React from 'react';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import CustomButton from './src/components/CustomButton';
import {SafeAreaView, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomButton
        title={'Login'}
        alert={"Login button's event handle"}
        type={'secondary'} //type=[‘primary’, ‘secondary’
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    // alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default App;
