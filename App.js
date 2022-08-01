import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import React from 'react';
import FONT_FAMILY from './src/constants/fonts';
import CUSTOM_COLOR from './src/constants/colors';
import {IC_BackButton, IC_BoldHeart} from './src/assets/icons';
import CustomButton from './src/assets/components/CustomButton';
const App = () => {
  return (
    <ScrollView style={styles.backgroundContainer}>
      <View style={styles.iconContainer} />
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 60,
    marginHorizontal: 60,
    backgroundColor: 'red',
    justifyContent: 'space-between',
    flex: 1,
  },
});
