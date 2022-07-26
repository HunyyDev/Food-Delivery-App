import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  headerContainer: {
    marginTop: 60,
    flexDirection: 'row',
  },
  backButton: {
    marginLeft: 50,
  },
  orderTextContainer: {
    marginLeft: 110,
    width: 63,
    height: 21,
  },
  ordersText: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 18,
    lineHeight: 21,
  },
  bigShoppingCart: {
    marginTop: 190,
    marginLeft: 120,
  },
  defaultOrderContainer: {
    marginTop: 38,
    justifyContent: 'center',
  },
  defaultOrder: {
    fontFamily: FONT_FAMILY.ProTextBold,
    fontSize: 28,
    fontStyle: 'normal',
    lineHeight: 33,
    color: CUSTOM_COLOR.Black,
    textAlign: 'center',
  },
  detailsTextContainer: {
    marginTop: 17,
    marginLeft: 90,
    width: 240,
    height: 40,
    justifyContent: 'center',
  },
  detailsText: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: FONT_FAMILY.ProTextSemibold,
    lineHeight: 20,
    opacity: 0.57,
    color: CUSTOM_COLOR.Black,
  },
  orderButtonContainer: {
    marginTop: 125,
    marginBottom: 40,
  },
});
export default styles;
