import {StyleSheet} from 'react-native';

import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  background: isChoosing => ({
    borderBottomWidth: 3,
    borderBottomColor: isChoosing ? COLORS.SUNSET_ORANGE : 'transparent',
  }),
  text: {
    color: COLORS.BLACK,
    padding: 15,
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default styles;
