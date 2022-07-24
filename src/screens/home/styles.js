import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Concrete,
    flexDirection: 'column',
  },
  MenuContainer: {
    height: Dimensions.get('window').height * 0.1,
    width: '100%',
    backgroundColor: CUSTOM_COLOR.Concrete,
    flexDirection: 'column',
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  TextContainer: {
    height: Dimensions.get('window').height * 0.22,
    width: '100%',
    backgroundColor: CUSTOM_COLOR.Concrete,
    padding: 30,
    paddingLeft: 50,
  },
  SearchContainer: {
    height: Dimensions.get('window').height * 0.08,
    width: '100%',
    backgroundColor: CUSTOM_COLOR.Concrete,
    paddingLeft: 50,
    paddingRight: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TitleContainer: {
    padding: 10,
    marginTop: 36,
    paddingHorizontal: 75,
    backgroundColor: CUSTOM_COLOR.Concrete,
    flex: 1,
  },
  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    gap: 41,
  },
  ImageContainer: {
    height: Dimensions.get('window').height * 0.5,
    width: '100%',
    backgroundColor: CUSTOM_COLOR.Black,
  },
  HomeContainer: {
    height: Dimensions.get('window').height * 0.15,
    width: '100%',
    backgroundColor: 'red',
  },
  IconMenu: {
    marginLeft: 50,
  },
  IconShop: {
    position: 'absolute',
    left: '82%',
    alignSelf: 'flex-end',
  },
  Text: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.RoundedHeavy,
    fontSize: 34,
  },
  Search: {
    width: '100%',
    height: '100%',
    backgroundColor: CUSTOM_COLOR.Gallery,
    flexDirection: 'row',
    borderRadius: 40,
    alignItems: 'center',
  },
  IconSearch: {
    margin: 21,
    marginLeft: 35,
  },
  TextSearch: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
    fontSize: 17,
  },
  productWrapper: {
    flexDirection: 'row',
    paddingBottom: 50,
    paddingHorizontal: 30,
    marginTop: 40,
    // backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  productItem: {
    width: 220,
    height: 330,
    marginHorizontal: 15,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    // backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  productInfo: {
    width: '100%',
    height: '80%',
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 30,
    shadowColor: CUSTOM_COLOR.Black,
    shadowOffset: {
      width: 0,
      height: -30,
    },
    shadowOpacity: '0.8',
    justifyContent: 'flex-end',
  },
  imageWrapper: {
    position: 'absolute',
    left: 31,
    bottom: 160,
    height: 164,
    width: 164,
    zIndex: 5,
    elevation: 5,
    borderRadius: 9999,
    padding: 0,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  titleText: {
    fontFamily: FONT_FAMILY.RoundedBold,
    color: CUSTOM_COLOR.Black,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 45,
  },
  priceText: {
    fontFamily: FONT_FAMILY.RoundedBold,
    color: CUSTOM_COLOR.SunsetOrange,
    textAlign: 'center',
    fontSize: 15,
    margin: 30,
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 50,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  chosenIcon: {
    shadowColor: CUSTOM_COLOR.SunsetOrange,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  SeeMore: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 30,
    marginBottom: -50,
    paddingRight: 41,
    width: Dimensions.get('window').width,
  },
  TextSeeMore: {
    fontFamily: FONT_FAMILY.RoundedRegular,
    fontSize: 15,
    color: CUSTOM_COLOR.SunsetOrange,
  },
});

export default styles;
