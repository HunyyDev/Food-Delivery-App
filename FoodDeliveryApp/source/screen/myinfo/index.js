import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import scale from '../../../responsive';
import CUSTOM_COLOR from '../../constants/color';
import FONT_FAMILY from '../../constants/fonts';
import Custom_ButtonOne from '../../components/Custom_ButtonOne';
import IMG_AVATAR from '../../assets/images';

function MyInFoScreen(navigation) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.content}>My profile</Text>
        <Text style={styles.header1}>Information</Text>
        <View style={styles.viewInside1}>
          <Text style={styles.description2}>Marvis Ighedosa</Text>
          <Text style={styles.description1}>dosamarvis@gmail.com</Text>
          <Text style={styles.description1}>
            {'No 15 uti street off ovie palace road \neffurun delta state'}
          </Text>
        </View>
        <View>
          <Text style={styles.header2}>Payment Method</Text>
          <View style={styles.viewInside2}>
            <Text style={styles.payment}>Card</Text>
            <Text style={styles.payment}>Bank Account</Text>
            <Text style={styles.payment}>Paypal</Text>
          </View>
        </View>
      </View>
      <Custom_ButtonOne 
        text="Update"
        fontSize={17}
        color={CUSTOM_COLOR.SunsetOrange}
        textColor={CUSTOM_COLOR.White} />
    </SafeAreaView>
  );
}

export default MyInFoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  content:{
    top: scale(40),
    left: scale(161),
    position: 'absolute',
    fontSize: scale(18),
    color: CUSTOM_COLOR.Black,
  },
  viewInside1: {
    top: scale(130),
    left: scale(50),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(30),
    width: scale(315),
    height: scale(133),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  viewInside2: {
    top: scale(190),
    left: scale(50),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(30),
    width: scale(315),
    height: scale(231),
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    overflow: 'hidden',
  },
  header1: {
    top: scale(120),
    left: scale(53),
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    color: CUSTOM_COLOR.Black,
  },
  header2: {
    top: scale(190),
    left: scale(53),
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    color: CUSTOM_COLOR.Black,
  },
  description1: {
    top: scale(10),
    left: scale(53),
    fontSize: scale(13),
    opacity: scale(0.5),
    color: CUSTOM_COLOR.Black,
    width: scale(297),
  },
  description2: {
    top: scale(-5),
    left: scale(53),
    fontSize: scale(13),
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    color: CUSTOM_COLOR.Black,
    width: scale(297),
  },
  payment: {
    top: scale(50),
    left: scale(53),
    fontSize: scale(17),
    opacity: scale(0.5),
    color: CUSTOM_COLOR.Black,
    width: scale(297),
  }
});
