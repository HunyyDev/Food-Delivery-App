import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  headerTextContainer: {
    flexDirection: 'row',
    marginTop: 60,
  },
  backButton: {
    marginLeft: 41,
    width: 24,
    height: 24,
  },
  headerText: {
    marginLeft: 96,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 18,
    lineHeight: 21,
    width: 90,
    height: 25,
    color: CUSTOM_COLOR.Black,
  },
  screenTheme: {
    marginTop: 45,
    width: 150,
    height: 45,
    marginLeft: 50,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 34,
    lineHeight: 41,
    color: CUSTOM_COLOR.Black,
  },
  leftUnderTheme: {
    marginTop: 50,
    marginLeft: 50,
    fontFamily: FONT_FAMILY.ProTextBold,
    width: 150,
    height: 55,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  detailContainer: {
    marginTop: 22,
    backgroundColor: CUSTOM_COLOR.White,
    width: 315,
    marginHorizontal: 50,
    borderRadius: 20,
    shadowRadius: 40,
    shadowOffset: {width: 0, height: 10},
    shadowColor: CUSTOM_COLOR.Black,
    shadowOpacity: 0.03,
  },
  box1Height: {
    height: 205,
  },
  detailName: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  detailNumber: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 15,
    lineHeight: 18,
  },
  option: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
    marginTop: 42,
    marginLeft: 56,
  },
  option1Container: {
    flexDirection: 'row',
    position: 'absolute',
    left: 21,
    right: 32,
    width: 262,
    height: 55,
  },
  cardOptionContainerPosition: {
    top: 20,
  },
  creditCardContainer: {
    marginLeft: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  creditCardBackground: {
    backgroundColor: CUSTOM_COLOR.TahitiGold,
  },
  cardOptionPosition: {
    marginLeft: 11,
    marginTop: 10,
    marginBottom: 25,
  },
  bankBackground: {
    backgroundColor: CUSTOM_COLOR.FrenchRose,
  },
  box2Height: {
    height: 156,
  },
  option1: {
    opacity: 1,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  doorDeliveryOptionPosition: {
    position: 'absolute',
    marginTop: 30,
  },
  doorDeliveryTextPosition: {
    marginLeft: 31,
  },
  underline: {
    marginLeft: 52,
    marginRight: 32,
    height: 0,
    borderWidth: 0.5,
    opacity: 0.3,
  },
  underline1: {
    marginTop: 75,
  },
  option2Position: {
    marginLeft: 21,
    marginTop: 15,
  },
  option2Container: {
    flexDirection: 'row',
    height: 81,
    width: 262,
    borderRadius: 20,
  },
  option2: {
    paddingTop: 25,
    paddingLeft: 52,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  paymentContainer: {
    flexDirection: 'row',
    marginTop: 67,
    marginHorizontal: 50,
    height: 30,
  },
  paymentText: {
    marginTop: 5,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 17,
    lineHeight: 20,
    color: CUSTOM_COLOR.Black,
  },
  paymentNumber: {
    marginLeft: 200,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 22,
    lineHeight: 26,
    color: CUSTOM_COLOR.Black,
  },
  buttonContainer: {
    marginHorizontal: 50,
    marginVertical: 50,
  },
});

export default styles;
