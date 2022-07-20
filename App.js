import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import FONT_FAMILY from './src/constants/fonts';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <View style={styles.foodTextContainer}>
        <Text style={styles.foodText}>Delicious food for you</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#C5C4C4',
  },
  foodTextContainer: {
    position: 'absolute',
    width: 187,
    height: 82,
    left: 50,
    top: 132,
    backgroundColor: 'red',
  },
  foodText: {
    fontFamily: FONT_FAMILY.Regular,
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 34,
    lineHeight: 40.57,
    color: '#000000',
  },
});
