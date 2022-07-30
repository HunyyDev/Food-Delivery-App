import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../../../constants/color';
import scale from '../../../../../responsive';
import {IMG_LINE} from '../../../../assets/images';

const Custom_DeliveryMethod = props => {
  const [isSelect, setIsSelect] = useState('0');
  return (
    <View style={styles.viewContainer(props)}>
      <TouchableOpacity
        onPress={() => {
          setIsSelect('1');
        }}
        style={styles.touchContainer1}>
        <View style={styles.selectBorder}>
          <View
            backgroundColor={
              isSelect === '1' ? CUSTOM_COLOR.SunsetOrange : 'transparent'
            }
            style={styles.select}
          />
        </View>
        <Text style={styles.selectText1}>{props.selectText1}</Text>
      </TouchableOpacity>
      <Image source={IMG_LINE} style={styles.lineContainer} />
      {/* <View  style={styles.lineContainer}/> */}
      <TouchableOpacity
        onPress={() => {
          setIsSelect('2');
        }}
        style={styles.touchContainer2}>
        <View style={styles.selectBorder}>
          <View
            backgroundColor={
              isSelect === '2' ? CUSTOM_COLOR.SunsetOrange : 'transparent'
            }
            style={styles.select}
          />
        </View>
        <Text style={styles.selectText2}>{props.selectText2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Custom_DeliveryMethod;

const styles = StyleSheet.create({
  viewContainer: props => ({
    flexDirection: 'column',
    backgroundColor: CUSTOM_COLOR.White,
    width: scale(315),
    borderRadius: scale(20),
    ...props.style,
  }),
  touchContainer1: {
    marginHorizontal: scale(30),
    position: 'absolute',
    left: scale(21),
    top: scale(20),
    width: scale(262),
    height: scale(45),
    backgroundColor: CUSTOM_COLOR.White,
    flexDirection: 'row',
  },
  lineContainer: {
    width: scale(200),
    left: scale(75),
    top: scale(75),
  },
  touchContainer2: {
    marginHorizontal: scale(30),
    position: 'absolute',
    left: scale(21),
    top: scale(90),
    width: scale(90),
    height: scale(40),
    backgroundColor: CUSTOM_COLOR.White,
    flexDirection: 'row',
  },
  selectBorder: {
    top: scale(15),
    width: scale(15),
    height: scale(15),
    borderRadius: 360,
    borderColor: CUSTOM_COLOR.SunsetOrange,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  select: {
    width: scale(7),
    height: scale(7),
    borderRadius: 360,
  },
  selectText1: {
    fontSize: scale(17),
    fontWeight: '400',
    color: CUSTOM_COLOR.Black,
    lineHeight: scale(20),
    left: scale(25),
    top: scale(10),
  },
  selectText2: {
    fontSize: scale(17),
    fontWeight: '400',
    color: CUSTOM_COLOR.Black,
    lineHeight: scale(20),
    left: scale(25),
    top: scale(10),
  },
});
