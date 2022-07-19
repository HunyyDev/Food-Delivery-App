import React from 'react';
import {Pressable, Text} from 'react-native';

import styles from './styles';

const UnderlineButton = props => {
  const {isChoosing, onPress, style, textStyle, children} = props;

  return (
    <Pressable onPress={onPress} style={[styles.background(isChoosing), style]}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default UnderlineButton;
