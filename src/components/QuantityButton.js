import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import COLORS from '../constants/colors';

const QuantityButton = props => {
  const {initialValue, style, ...rest} = props;

  const [value, setValue] = useState(initialValue);

  return (
    <View style={[styles.container, style]} {...rest}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setValue(prev => prev - 1)}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{value}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setValue(prev => prev + 1)}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 9999,
    backgroundColor: COLORS.SunsetOrange,
    flexDirection: 'row',
    //  width: 52,
    //  paddingHorizontal: 10,
    paddingVertical: 2,
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 10,
  },
});

export default QuantityButton;
