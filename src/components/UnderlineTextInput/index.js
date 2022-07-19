import React from 'react';

import {Text, TextInput, View} from 'react-native';

import styles from './styles';

const UnderlineTextInput = React.forwardRef((props, ref) => {
  const {label, ...otherProps} = props;

  return (
    <View style={styles.background}>
      <Text style={styles.title}>{label}: </Text>
      <TextInput style={styles.textInput} {...otherProps} ref={ref} />
    </View>
  );
});

export default UnderlineTextInput;
