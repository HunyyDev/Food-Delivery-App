import {StyleSheet} from 'react-native';
import FONT_FAMILY from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.AthensGray,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 60,
  },
  backButton: {
    marginLeft: 41,
  },
  headerContainer: {
    marginLeft: 120,
    marginTop: 1,
  },
  cart: {
    fontFamily: FONT_FAMILY.ProTextSemibold,
    fontStyle: 'normal',
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    lineHeight: 23,
  },
  instruction: {
    marginTop: 55,
    width: '40%',
    height: 32,
    alignSelf: 'center',
  },
  itemsContainer: {
    marginTop: 22,
  },
  item: {
    marginTop: 14,
  },
  buttonContainer: {
    marginTop: 200,
  },
});
