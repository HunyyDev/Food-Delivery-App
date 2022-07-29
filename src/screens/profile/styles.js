import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

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
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: CUSTOM_COLOR.Transparent,
    paddingLeft: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  AddressDetails: {
    height: Dimensions.get('window').height * 0.08,
    backgroundColor: CUSTOM_COLOR.Transparent,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 50,
  },
  BoxContainer: {
    height: Dimensions.get('window').height * 0.18,
    backgroundColor: CUSTOM_COLOR.Transparent,
    paddingLeft: 50,
    paddingRight: 49,
  },
  PaymentBoxContainer: {
    height: Dimensions.get('window').height * 0.35,
    backgroundColor: CUSTOM_COLOR.Transparent,
    paddingLeft: 50,
    paddingRight: 49,
    marginBottom: 110,
  },
  TotalContainer: {
    backgroundColor: CUSTOM_COLOR.Transparent,
    height: Dimensions.get('window').height * 0.13,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ButtonContainer: {
    height: Dimensions.get('window').height * 0.2,
    backgroundColor: CUSTOM_COLOR.Transparent,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  profileText: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.TextBold,
    color: CUSTOM_COLOR.Black,
  },
  ChevronIcon: {
    alignSelf: 'flex-start',
    position: 'absolute',
    bottom: 2,
    left: 50,
    top: 66,
  },
  InformationText: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 17,
    color: CUSTOM_COLOR.Black,
  },
  PersonalText: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 17,
    color: CUSTOM_COLOR.Black,
    marginBottom: 8,
  },
  whiteBox: {
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
  MarvisIMG: {
    marginTop: 25,
    marginLeft: 16,
    width: 60,
    height: 60,
  },
  TextBox: {
    // marginLeft: 15,
    // alignItems: 'center',
    justifyContent: 'flex-start',
    // marginTop: 20,
    position: 'absolute',
    left: 91,
    top: 20,
    right: 33,
  },
  MarvisText: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.TextBold,
    color: CUSTOM_COLOR.Black,
  },
  otherText: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
    fontFamily: FONT_FAMILY.TextRegular,
    fontSize: 13,
    marginTop: 8,
  },
  Box: {
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
  PaymentMethod: {
    height: Dimensions.get('window').height * 0.08,
    backgroundColor: CUSTOM_COLOR.Transparent,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 50,
    marginBottom: 20,
  },
  PaymentText: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.TextBold,
    color: CUSTOM_COLOR.Black,
  },
  flex: {
    flex: 1,
  },
  radioText: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.TextRegular,
    color: CUSTOM_COLOR.Black,
    marginLeft: 15,
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
  rectangleColorBlue: {
    backgroundColor: CUSTOM_COLOR.Blue_Ribbon,
  },
  MyProfileText: {
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 34,
    color: CUSTOM_COLOR.Black,
  },
  changeText: {
    fontSize: 15,
    color: CUSTOM_COLOR.Tahiti_Gold,
    fontFamily: FONT_FAMILY.TextRegular,
    position: 'absolute',
    right: 57,
    bottom: 10,
  },
});

export default styles;
