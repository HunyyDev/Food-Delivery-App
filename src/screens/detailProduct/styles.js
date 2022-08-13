import {StyleSheet, Dimensions} from 'react-native';
import COLORS from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';

const styles = StyleSheet.create({
  outer: {
    position: 'relative',
  },
  container: {
    minHeight: Dimensions.get('window').height,
    paddingTop: 80,
   paddingBottom: 160,
  },
  header: {
    position: 'absolute',
    top: 66,
    paddingHorizontal: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
  },
  scrollViewContainer: {
    alignItems: 'center',
    marginBottom: 70,
  },
  scrollView: {
    width: 250,
    height: 250,
    borderRadius: 9999,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 9999,
  },
  infoContainer: {
    alignItems: 'center',
    marginBottom: 43,
  },
  infoTitle: {
    fontSize: 28,
    color: COLORS.Black,
    marginBottom: 10,
  },
  infoPrice: {
    fontSize: 22,
    color: COLORS.SunsetOrange,
  },
  descriptionContainer: {
    paddingHorizontal: 50,
  },
  description: {
    marginVertical: 10,
  },
  descriptionTitle: {
    color: COLORS.Black,
    fontFamily: FONT_FAMILY.TextBold,
    fontSize: 17,
  },
  descriptionContent: {
    color: COLORS.Black,
    fontFamily: FONT_FAMILY.TextRegular,
    fontSize: 15,
  },
  addToCartButton: {
    position: 'absolute',
    bottom: 40,
  },
});

export default styles;
