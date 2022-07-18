import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';

import COLORS from '../constants/colors';

const ButtonHome = ({children, isChoosing, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.background({isChoosing})}>
      <Text style={styles.text({isChoosing})}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  background: ({isChoosing}) => ({
    borderBottomWidth: 2,
    borderBottomColor: isChoosing ? CUSTOM_COLOR.SunsetOrange : 'transparent',
    width: 100,
    // position: 'absolute',
    // bottom: 0,
  }),
  text: ({isChoosing}) => ({
    color: isChoosing ? CUSTOM_COLOR.SunsetOrange : CUSTOM_COLOR.Manatee,
    padding: 15,
    fontWeight: '400',
    fontSize: 18,
    alignSelf: 'center',
  }),
});

export default ButtonHome;
