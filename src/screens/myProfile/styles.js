import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  backButtonContainer: {
    marginTop: 60,
    marginLeft: 41,
  },
  textMyProfileContainer: {
    height: 41,
    marginLeft: 50,
    marginTop: 40,
  },
  textMyProfile: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 34,
    fontWeight: 'bold',
    lineHeight: 41,
    color: CUSTOM_COLOR.Black,
  },
  textPersonalDetailsContainer: {
    flexDirection: 'row',
    height: 21,
    marginTop: 44,
    justifyContent: 'space-around',
  },
  textPersonalDetail: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontWeight: 'bold',
    lineHeight: 21,
    fontSize: 18,
    fontStyle: 'normal',
    color: CUSTOM_COLOR.Black,
  },
  textChange: {
    fontFamily: FONT_FAMILY.ProTextSemibold,
    fontSize: 15,
    fontStyle: 'normal',
    lineHeight: 18,
    color: CUSTOM_COLOR.Vermilion,
  },
  idContainer: {
    width: 315,
    height: 197,
    borderRadius: 20,
    backgroundColor: CUSTOM_COLOR.White,
    marginLeft: 42,
    marginTop: 11,
    shadowRadius: 20,
    shadowOpacity: 0.03,
    shadowOffset: {width: 0, height: 10},
    shadowColor: CUSTOM_COLOR.Black,
  },
  idPicture: {
    position: 'absolute',
    top: 18,
    left: 16,
    right: 208,
    bottom: 79,
  },
  nameContainer: {
    position: 'absolute',
    top: 26,
    left: 123,
  },
  name: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontStyle: 'normal',
    fontSize: 18,
    fontWeight: 'bold',
    color: CUSTOM_COLOR.Black,
    lineHeight: 21,
  },
  emailContainer: {
    position: 'absolute',
    top: 53,
    left: 122,
    bottom: 119,
    right: 10,
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomWidth: 0.5,
  },
  detailsText: {
    fontFamily: FONT_FAMILY.ProTextSemibold,
    fontSize: 15,
    opacity: 0.5,
    lineHeight: 18,
  },
  phoneNumberContainer: {
    position: 'absolute',
    top: 85,
    left: 122,
    bottom: 87,
    right: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: CUSTOM_COLOR.Black,
  },
  addressContainer: {
    position: 'absolute',
    top: 117,
    left: 122,
    right: 11,
    bottom: 26,
  },
  optionButton: {
    marginTop: 27,
    marginLeft: 42,
  },
  updateButtonContainer: {
    marginTop: 59,
    marginBottom: 58,
  },
});
export default styles;
