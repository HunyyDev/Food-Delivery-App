/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';
import scale from '../../src/constants/responsive';
import CUSTOM_COLOR from '../../src/constants/colors';
import FONT_FAMILY from '../../src/constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: CUSTOM_COLOR.SilverSand,
  },
  Scroll_View: {
    position: 'absolute',
    top: scale(430),
    flexDirection: 'row',
    width: '100%',
    height: scale(270),
    overflow: 'visible',
  },
  Item: {
    flex: 1,
    width: scale(220),
    height: scale(270),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.White,
    marginLeft: scale(15),
    marginRight: scale(15),
    alignItems: 'center',
    top: scale(60),
  },
  Scroll_View_Container: {
    height: scale(330),
  },
  Image_Container: {
    position: 'absolute',
    top: scale(-60),
    zIndex: 3,
  },
  shadowProps: {
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 30, height: 30},
  },
  Text: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.9,
    fontSize: scale(22),
    fontWeight: '600',
    alignItems: 'center',
  },
  Text2: {
    position: 'absolute',
    top: scale(215),
    color: CUSTOM_COLOR.SunsetOrange,
    opacity: 0.9,
    fontSize: 17,
    fontWeight: '700',
    fontFamily: FONT_FAMILY.Bold,
  },
  TextContainer: {
    position: 'absolute',
    top: scale(130),
    alignItems: 'center',
    fontFamily: FONT_FAMILY.Bold,
  },
  SideBarAndCart: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    top: scale(74),
  },
  SideBarContainer: {
    color: CUSTOM_COLOR.Black,
    marginLeft: 54.6,
  },
  Cart: {
    marginRight: 25,
  },
  TextTitleContainer: {
    position: 'absolute',
    top: scale(132),
    left: scale(50),
  },
  TextTitle: {
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 41,
    color: CUSTOM_COLOR.Black,
  },
  SearchButtonContainer: {
    position: 'absolute',
    top: scale(242),
    left: scale(50),
    width: scale(314),
    height: scale(60),
    backgroundColor: CUSTOM_COLOR.Search,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  SearchButtonIcon: {
    position: 'absolute',
    width: scale(18),
    height: scale(18),
    left: scale(35),
  },
  SearchButtonText: {
    position: 'absolute',
    left: scale(69),
    fontWeight: '600',
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
  },
  Navigation_UnderLine: {
    width: scale(87),
    height: scale(3),
    borderRadius: scale(30),
  },
  NavigationText: {
    marginBottom: scale(10),
    fontWeight: '400',
    fontSize: scale(17),
    lineHeight: 20,
  },
  Scroll_View_Item: {
    position: 'relative',
    top: scale(348),
    alignItems: 'center',
    height: 30,
  },
  Scroll_View_Navigation: {
    marginLeft: scale(75),
  },
  HightLightText: {
    color: CUSTOM_COLOR.SunsetOrange,
  },
  HightLightLine: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },
  SeeMoreText: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.Light,
    position: 'absolute',
    top: scale(400),
    left: scale(315),
    fontSize: scale(15),
  },
  NavigationBottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: scale(50),
    marginRight: scale(52),
    alignItems: 'center',
  },
  HomeStyle: {
    marginTop: 3,
    width: 56,
    height: 56,
  },
  HeartStyle: {
    width: scale(24),
    height: 24,
  },
  UserStyle: {
    width: 24,
    height: 24,
  },
  HistoryStyle: {
    width: 24,
    height: 24,
  },
});

export default styles;
