import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';

const NoInternetScreen = () => {
  return <View style={styles.container}>Item</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default NoInternetScreen;
