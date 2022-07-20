import {SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from './src/components/CustomButton';

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
  },
});

export default App;
