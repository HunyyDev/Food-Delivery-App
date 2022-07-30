import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.Porcelain,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    top: 10,
    height: 50,
    marginBottom: 55,
  },
  backButton: {
    alignSelf: 'flex-start',
    width: 6,
    height: 12,
    marginTop: 18,
    marginLeft: 25,
    marginRight: 50,
  },
  header: {
    marginTop: 4,
    marginLeft: 55,
    fontFamily: FONT_FAMILY.Bold,
    color: CUSTOM_COLOR.Black,
    fontSize: 18,
  },
  infoContainer: {
    marginTop: 12,
    backgroundColor: CUSTOM_COLOR.White,
    height: 150,
    marginLeft: 50,
    marginRight: 49,
    marginBottom: 40,
    borderRadius: 20,
    flexDirection: 'row',
  },
  profilePic: {
    marginTop: 20,
    marginLeft: 16,
  },
  infoBox: {
    marginTop: 17,
    marginLeft: 15,
    width: 145,
  },
  nameInfo: {
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.ProTextBold,

    fontSize: 12,
  },
  info: {
    marginTop: 17,
    color: CUSTOM_COLOR.Black,
    fontFamily: FONT_FAMILY.ProTextRegular,
    fontSize: 10,
    opacity: 0.5,
  },
  optionContainer: {
    backgroundColor: CUSTOM_COLOR.White,
    width: '76%',
    marginLeft: '12.8%',
    height: 225,
    borderRadius: 20,
  },
  buttonView: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: ({pressed}) => ({
    backgroundColor: CUSTOM_COLOR.SunsetYellow,
    opacity: pressed ? 0.4 : 1,
    height: 70,
    width: 314,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    alignSelf: 'center',
    marginHorizontal: 136,
    marginBottom: 18,
  }),
  buttonText: {
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 18,
  },
});
export default styles;
