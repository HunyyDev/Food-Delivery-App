import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';

//Usage: <CustomDish source={'image_path'} name={'name'} cost={'cost'}/>
const CustomDish = props => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.cost}>{props.cost}</Text>
      </View>
      <View style={styles.dishContainer}>
        <Image source={props.source} resizeMode="center" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: scale.scaleWidth(220),
    height: scale.scaleWidth(321),
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginHorizontal: scale.scaleWidth(15),
  },
  boxContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale.scaleWidth(30),
    width: scale.scaleWidth(220),
    height: scale.scaleWidth(270),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    elevation: scale.scaleWidth(12),
  },
  dishContainer: {
    position: 'absolute',
    width: scale.scaleWidth(164.16),
    height: scale.scaleWidth(164.16),
    borderRadius: scale.scaleWidth(164.16 / 2),
    backgroundColor: 'white',
    overflow: 'hidden',
    top: 0,
    elevation: scale.scaleWidth(10),
  },
  cost: {
    fontSize: scale.scaleWidth(17),
    color: CUSTOM_COLOR.Vermilion,
    alignSelf: 'center',
    marginBottom: scale.scaleWidth(39),
    fontFamily: 'SF-Pro-Rounded-Bold',
  },
  name: {
    fontSize: scale.scaleWidth(22),
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
    fontFamily: 'SF-Pro-Rounded-Semibold',
    textAlign: 'center',
  },
});

export default CustomDish;
