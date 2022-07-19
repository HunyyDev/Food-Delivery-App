import {StyleSheet} from 'react-native';
import COLORS from '../../constants/colors';

const styles = StyleSheet.create({
  background: {
    marginBottom: 46,
  },
  title: {
    color: COLORS.BLACK,
    opacity: 0.4,
    fontWeight: 'bold',
  },
  textInput: {
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1.5,
    color: COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default styles;
