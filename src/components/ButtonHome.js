import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
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
    borderBottomColor: isChoosing ? COLORS.SunsetOrange : 'transparent',
    width: 100,
  }),
  text: ({isChoosing}) => ({
    color: isChoosing ? COLORS.SunsetOrange : COLORS.Manatee,
    padding: 15,
    fontWeight: '400',
    fontSize: 18,
    alignSelf: 'center',
  }),
});

export default React.memo(ButtonHome);
