import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {ICON_CHEVRON} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
  },
  headerContainer: {
    height: Dimensions.get('window').height * 0.103,
    backgroundColor: CUSTOM_COLOR.Transparent,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleContainer: {
    height: Dimensions.get('window').height * 0.14,
    backgroundColor: CUSTOM_COLOR.Transparent,
    paddingLeft: 50,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  AddressDetails: {
    height: Dimensions.get('window').height * 0.08,
    backgroundColor: CUSTOM_COLOR.Transparent,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 50,
  },
  BoxContainer: {
    height: Dimensions.get('window').height * 0.22,
    backgroundColor: CUSTOM_COLOR.Transparent,
    paddingLeft: 50,
    paddingRight: 49,
  },
  TotalContainer: {
    backgroundColor: CUSTOM_COLOR.Transparent,
    height: Dimensions.get('window').height * 0.13,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ButtonContainer: {
    height: Dimensions.get('window').height * 0.22,
    backgroundColor: CUSTOM_COLOR.Transparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TotalText: {
    fontSize: 17,
    // fontWeight: 400,
    fontFamily: FONT_FAMILY.TextBold,
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
    left: 50,
  },
  priceText: {
    fontSize: 22,
    fontFamily: FONT_FAMILY.TextBold,
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
    right: 49,
  },
  DeliveryMethod: {
    height: Dimensions.get('window').height * 0.08,
    backgroundColor: CUSTOM_COLOR.Transparent,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 50,
    marginBottom: 20,
  },
  Checkout: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.TextBold,
    color: CUSTOM_COLOR.Black,
  },
  Chevron: {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 2,
    left: 50,
    top: 66,
  },
  DeliveryText: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 34,
    color: CUSTOM_COLOR.Black,
  },
  AddressText: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 17,
    color: CUSTOM_COLOR.Black,
  },
  changeText: {
    fontSize: 15,
    color: CUSTOM_COLOR.Tahiti_Gold,
    fontFamily: FONT_FAMILY.TextRegular,
    position: 'absolute',
    right: 57,
  },
  whiteBox: {
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
  Box: {
    height: '50%',
    borderBottomWidth: 0.5,
    backgroundColor: CUSTOM_COLOR.Transparent,
    // borderColor: CUSTOM_COLOR.Black,
    borderRadius: 20,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 28,
    flexDirection: 'row',
  },
  Underline: {
    borderColor: CUSTOM_COLOR.Transparent,
  },
  borderRadio: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: CUSTOM_COLOR.SunsetOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderNoPress: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: CUSTOM_COLOR.Silver,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doorDelivery: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.TextRegular,
    color: CUSTOM_COLOR.Black,
    marginLeft: 15,
  },
  radio: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  rectangle: {
    width: Dimensions.get('window').width * 0.12,
    height: Dimensions.get('window').width * 0.12,
    backgroundColor: CUSTOM_COLOR.Tahiti_Gold,
    marginLeft: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rectangleColor: {
    backgroundColor: CUSTOM_COLOR.French_Rose,
  },
  flex: {
    flex: 1,
  },
  TextBox: {
    borderBottomWidth: 0.5,
    backgroundColor: CUSTOM_COLOR.Transparent,
    borderColor: CUSTOM_COLOR.Black,
    borderRadius: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 30,
    flexDirection: 'row',
  },
  addressText1: {
    fontSize: 17,
    // fontWeight: 400,
    fontFamily: FONT_FAMILY.TextBold,
    color: CUSTOM_COLOR.Black,
  },
  addressText2: {
    fontSize: 15,
    // fontWeight: 400,
    fontFamily: FONT_FAMILY.TextRegular,
    color: CUSTOM_COLOR.Black,
  },
});

export default styles;
