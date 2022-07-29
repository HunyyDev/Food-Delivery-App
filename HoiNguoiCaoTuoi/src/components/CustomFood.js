import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import scaleWidth from '../constants/responsive';
import FONT_FAMILY from '../constants/fonts';

const CustomFood = props => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.name}> {props.name} </Text>
        <Text style={styles.cost}> {props.cost} </Text>
      </View>
      <View style={styles.food}>
        <Image source={props.source} resizeMode="center" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: scaleWidth(22),
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.Bold,
    textAlign: 'center',
  },
  container: {
    width: scaleWidth(220),
    height: scaleWidth(321),
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: scaleWidth(15),
  },
  box: {
    width: scaleWidth(220),
    height: scaleWidth(270),
    backgroundColor: CUSTOM_COLOR.White,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    borderRadius: scaleWidth(30),
    elevation: scaleWidth(12),
  },
  food: {
    width: scaleWidth(164.16),
    height: scaleWidth(164.16),
    backgroundColor: CUSTOM_COLOR.White,
    position: 'absolute',
    borderRadius: scaleWidth(164.16 / 2),
    overflow: 'hidden',
    top: 0,
    elevation: scaleWidth(10),
  },

  cost: {
    fontSize: scaleWidth(22),
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
    fontFamily: FONT_FAMILY.Bold,
    textAlign: 'center',
  },
});

export default CustomFood;
