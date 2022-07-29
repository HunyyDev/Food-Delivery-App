import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../constants/colors';

const RadioButton = () => {
  const [value, setValue] = useState(0);
  return (
    <View>
      <TouchableOpacity
        style={styles.radioCircle({value})}
        onPress={() => {
          value === 0 ? setValue(1) : setValue(0);
        }}>
        {value === 1 && <View style={styles.selectedRb} />}
      </TouchableOpacity>
    </View>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  borderNoPress: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: COLORS.Silver,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircle: ({value}) => ({
    height: 24,
    width: 24,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: value ? COLORS.Vermilion : COLORS.Silver,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  selectedRb: {
    width: 12,
    height: 12,
    borderRadius: 50,
    backgroundColor: COLORS.Vermilion,
  },
});
