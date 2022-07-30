import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../../../constants/color';
import scale from '../../../../../responsive';
import {IMG_LINE} from '../../../../assets/images';

const Custom_PaymentMethod = props => {
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
        <View style={styles.selectImageView1}>
          <Image source={props.img1} style={styles.selectImage} />
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
        <View style={styles.selectImageView2}>
          <Image source={props.img2} style={styles.selectImage} />
        </View>
        <Text style={styles.selectText2}>{props.selectText2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Custom_PaymentMethod;

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
    left: scale(21),
    top: scale(30),
    width: scale(262),
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
    left: scale(21),
    top: scale(100),
    width: scale(190),
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
  selectImageView1: {
    position: 'absolute',
    width: scale(40),
    height: scale(40),
    left: scale(30),
    backgroundColor: '#F47B0A',
    borderRadius: 10,
  },
  selectImageView2: {
    position: 'absolute',
    width: scale(40),
    height: scale(40),
    left: scale(30),
    backgroundColor: '#EB4796',
    borderRadius: 10,
  },
  selectImage: {
    position: 'absolute',
    left: scale(13),
    top: scale(13),
    fill: CUSTOM_COLOR.White,
  },
  selectText1: {
    fontSize: scale(17),
    fontWeight: '400',
    color: CUSTOM_COLOR.Black,
    //fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    lineHeight: scale(20),
    left: scale(81),
    top: scale(10),
  },
  selectText2: {
    fontSize: scale(17),
    fontWeight: '400',
    color: CUSTOM_COLOR.Black,
    //fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    lineHeight: scale(20),
    left: scale(81),
    top: scale(10),
  },
});
