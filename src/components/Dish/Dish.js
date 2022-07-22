import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import {
  IMG_MAGNIFIER,
  IMG_MENU,
  IMG_TROLLEY,
  IMG_VEGGIE,
  IMG_HEART,
  IMG_HISTORY,
  IMG_HOUSE,
  IMG_USER,
} from '../../assets/images';
import Menu from '../../components/Menu/Menu';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const Dish = props => {
   const {children, price} =props
  return (
    <View style={styles.imgFrame}>
      <Image style={styles.imgVeggie} source={IMG_VEGGIE} resizeMode="cover" />
      <View style={styles.foodFrame}>
        <Text style={styles.foodText}>{children}</Text>
        <Text style={styles.noteText}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgFrame: {
    marginLeft: 50,
    paddingTop: 10,
    alignItems: 'center',
  },
  imgVeggie: {
    zIndex: 10,
    width: 164.16,
    height: 164.16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
  },
  foodFrame: {
    backgroundColor: COLORS.WHITE,
    marginTop: -110,
    height: 270,
    width: 220,
    borderRadius: 30,
  },

  foodText: {
    fontFamily: FONT_FAMILY.SF_PRO_ROUNDED_BOLD,
    color: COLORS.BLACK,
    fontSize: 22,
    marginTop: 130,
    zIndex: 100,
    textAlign: 'center',
  },
  noteText: {
    fontSize: 17,
    zIndex: 9000,
    fontFamily: FONT_FAMILY.SF_PRO_ROUNDED_BOLD,
    color: COLORS.VERMILION,
    textAlign: 'center',
  },
});

export default Dish;
