import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: COLORS.SILVER,
  },
  navigationBar: {
    marginTop: 74,
    marginLeft: 54,
    marginRight: 42,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerWrapper: {
    marginTop: 43,
    marginLeft: 50,
    width: 220,
  },
  headerText: {
    color: COLORS.BLACK,
    fontSize: 34,
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
  },
  searchWrapper: {
    borderRadius: 30,
    marginTop: 28,
    marginHorizontal: 50,
    height: 60,
    backgroundColor: COLORS.GALLERY,
    paddingHorizontal: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchIcon: {},
  searchInput: {
    flex: 1,
    marginLeft: 16,
    paddingTop: 20,
    fontFamily: FONT_FAMILY.SF_Pro_Rounded,
    fontSize: 17,
    color: COLORS.BLACK,
    opacity: 0.5,
  },
  categoryWrapper: {
    marginTop: 36,
    marginHorizontal: 75,
    flexDirection: 'row',
  },
  categoryItem: {
    padding: 20,
    fontSize: 17,
  },
  categoryText: isChoosing => ({
    color: isChoosing ? COLORS.SUNSET_ORANGE : COLORS.MANATEE,
    fontSize: 17,
  }),
  productWrapper: {
    flexDirection: 'row',
    paddingBottom: 50,
    paddingHorizontal: 30,
    marginTop: 40,
  },
  productItem: {
    width: 220,
    height: 330,
    marginHorizontal: 15,
  },
  productInfo: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 50,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: -30,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 20,
    width: 220,
    height: 270,
    marginTop: 60,
    paddingTop: 145,
  },
  imageWrapper: {
    position: 'absolute',
    left: 31,
    height: 164,
    width: 164,
    zIndex: 5,
    elevation: 5,
    borderRadius: 9999,
    padding: 0,
  },
  titleText: {
    fontFamily: FONT_FAMILY.SF_Pro_Rounded_Secondary,
    color: COLORS.BLACK,
    textAlign: 'center',
    fontSize: 20,
    marginHorizontal: 45,
  },
  priceText: {
    fontFamily: FONT_FAMILY.SF_Pro_Rounded_Secondary,
    color: COLORS.SUNSET_ORANGE,
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 45,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
    marginBottom: 50,
  },
  chosenIcon: {
    shadowColor: COLORS.SUNSET_ORANGE,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
});

export default styles;
