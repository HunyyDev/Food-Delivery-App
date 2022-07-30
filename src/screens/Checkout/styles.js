import {StyleSheet} from 'react-native';
import scale from '../../assets/constants/responsive';
import CUSTOM_COLOR from '../../assets/constants/colors';
import FONT_FAMILY from '../../assets/constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    top: scale(30),
    height: scale(40),
    width: '100%',
    position: 'absolute',
  },
  textTitle: {
    marginTop: scale(7),
    fontSize: scale(23),
    fontFamily: FONT_FAMILY.SFProTextBold,
    color: CUSTOM_COLOR.Black,
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  backButton: {
    height: '100%',
    width: scale(50),
    justifyContent: 'center',
    position: 'absolute',
    left: scale(60),
    marginTop: scale(3),
  },
  iconBack: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  SelectionText: {
    color: CUSTOM_COLOR.White,
    fontSize: 15,
    fontFamily: FONT_FAMILY.SFProTextBold,
    alignSelf: 'center',
  },
  buttonSelection: {
    width: scale(314),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    bottom: scale(41),
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  formText: {
    fontFamily: FONT_FAMILY.AbelRe,
    width: scale(160),
    height: scale(50),
    top: scale(105),
    left: scale(80),
    fontSize: scale(43),
    color: CUSTOM_COLOR.Black,
  },
  text1: {
    height: scale(30),
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    marginTop: scale(133),
    marginLeft: scale(80),
  },
  changeButton: {
    height: scale(22),
    width: scale(70),
    marginTop: scale(185),
    marginLeft: scale(385),
    position: 'absolute',
  },
  changeButtonText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: scale(15),
    color: CUSTOM_COLOR.GoldDrop,
  },
  addressContainer: {
    width: scale(375),
    height: scale(160),
    backgroundColor: CUSTOM_COLOR.White,
    marginTop: scale(21),
    alignSelf: 'center',
    borderRadius: 20,
  },
  address: {
    height: '100%',
    width: '80%',
    alignSelf: 'center',
  },
  addressText: {
    padding: scale(6.5),
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    marginTop: scale(7),
  },
  methodText: {
    marginTop: scale(35),
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    marginLeft: scale(80),
  },
  doorOrPickupContainer: {
    alignSelf: 'center',
    height: '100%',
    width: '70%',
    marginLeft: scale(10),
  },
  doorOrPickupText: {
    padding: scale(25),
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    marginTop: scale(3),
  },
  paymentContainer: {
    width: scale(375),
    height: scale(200),
    backgroundColor: CUSTOM_COLOR.White,
    marginTop: scale(21),
    alignSelf: 'center',
    borderRadius: 20,
  },
  payment: {
    height: '100%',
    width: '70%',
    alignSelf: 'center',
    marginLeft: scale(25),
  },
  paymentText: {
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
    marginTop: scale(26),
    marginLeft: scale(55),
  },
  paymentTextView: {
    width: '100%',
    height: scale(75),
  },
  iconView: {
    width: scale(45),
    height: scale(45),
    marginTop: scale(-33),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalContainer: {
    width: '100%',
    height: scale(45),
    marginTop: scale(20),
    justifyContent: 'center',
  },
  total: {
    fontSize: scale(17),
    marginLeft: scale(80),
    color: CUSTOM_COLOR.Black,
  },
  cost: {
    fontSize: scale(22),
    marginLeft: scale(400),
    color: CUSTOM_COLOR.Black,
    position: 'absolute',
  },
});

export default styles;
