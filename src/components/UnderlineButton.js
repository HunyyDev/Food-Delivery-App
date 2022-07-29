import React, {Component} from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';

const UnderlineButton = ({children, isChoosing, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.background({isChoosing})}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: ({isChoosing}) => ({
    borderBottomWidth: 3,
    borderBottomColor: isChoosing ? CUSTOM_COLOR.SunsetOrange : 'transparent',
    width: 134,
  }),
  text: {
    color: CUSTOM_COLOR.Black,
    padding: 15,
    fontWeight: '700',
    fontSize: 18,
    alignSelf: 'center',
  },
});

export default React.memo(UnderlineButton);
