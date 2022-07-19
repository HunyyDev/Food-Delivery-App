import {Dimensions, StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: COLORS.SILVER,
  },
  header: {
    height: 382,
    backgroundColor: COLORS.WHITE,
  },
  heroImageWrapper: {
    flex: 1,
  },
  heroImage: {
    width: 131,
    height: 162,
    resizeMode: 'contain',
    flex: 1,
    alignSelf: 'center',
  },
  navigationBar: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  formWrapper: {
    flex: 1,
    marginTop: 62,
    marginHorizontal: 50,
    paddingBottom: 20,
    justifyContent: 'space-between',
  },
  forgot: {
    color: COLORS.SUNSET_ORANGE,
    fontWeight: 'bold',
  },
  buttonView: {
    marginTop: 100,
  },
  underlineButton: {
    width: 134,
  },
});

export default styles;
