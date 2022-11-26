import React from 'react';
import {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
} from 'react-native';

import {IMG_BACK, IMG_LINE} from '../../assets/images';
import COLORS from '../../constants/colors';

const Back = props => {
  const navigation = props.navigation;
  const navigateGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{backgroundColor: COLORS.WHITE}}>
      <Pressable onPress={navigateGoBack}>
        <Image style={styles.back} source={IMG_BACK} resizeMode="contain" />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  back: {
    width: 28,
    height: 28,
    marginTop: 25,
    marginLeft: 25,
    backgroundColor: COLORS.WHITE,
    opacity: 0.4,
  },
});
export default Back;
