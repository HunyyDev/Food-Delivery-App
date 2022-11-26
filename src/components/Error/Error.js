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

import {IMG_BACK, IMG_LINE, IMG_MAGNIFIER} from '../../assets/images';
import Menu from '../../components/Menu/Menu';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import Dish from '../../components/Dish/Dish';
import Back from '../../components/Back/Back';

const Error = props => {
  const {nameError, description, img} = props;

  return (
    <View style={styles.frameMag}>
      <Image style={styles.magnifier} source={img} resizeMode="contain" />
      <Text style={styles.textMag}>{nameError}</Text>
      <Text style={styles.noteMag}>{description}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  frameMag: {
    alignItems: 'center',
  },
  magnifier: {
    height: 81.33,
    width: 81.33,
    opacity: 0.3,
    marginTop: 200.25,
  },
  textMag: {
    fontSize: 28,
    color: COLORS.BLACK,
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_REGULAR,
    marginTop: 63.42,
  },
  noteMag: {
    fontFamily: FONT_FAMILY.SF_PRO_TEXT_REGULAR,
    fontSize: 17,
    opacity: 0.57,
    color: COLORS.BLACK,
    marginTop: 14,
    marginHorizontal: 65,
    textAlign: 'center',
  },
});
export default Error;
