import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';
import {IMG_Veggie_tomato_mix} from '../../../assets/images';
import scale from '../../../constants/responsive';
import CUSTOM_COLOR from '../../../constants/colors';
import FONT_FAMILY from '../../../constants/fonts';

const CustomOrderedItem = props => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.imgSection}>
        <Image style={styles.img} source={props.img} resizeMode="contain" />
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.foodName}>{props.text}</Text>
        <Text style={styles.price}>#{props.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomOrderedItem;

const styles = StyleSheet.create({
  container: {
    height: scale(102),
    width: scale(305),
    backgroundColor: CUSTOM_COLOR.White,
    overflow: 'hidden',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: scale(14),
  },
  imgSection: {
    height: '90%',
    width: '40%',
    borderRadius: 20,
    alignItems: 'center',
  },
  img: {
    height: '100%',
    width: '70%',
    borderRadius: 40,
  },
  infoSection:{
    height: '90%',
    justifyContent:'center',
  },
  foodName:{
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scale(17),
  },
  price:{
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.Vermilion,
    fontSize: scale(15),
  },
});
