import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../constant/color';

const CustomMenubar = ({label, isChoosing, onPress}) => {
  console.log('isChoosingMenu', isChoosing);
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.button({isChoosing})}>
        <Text style={styles.text({isChoosing})}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default CustomMenubar;

const styles = StyleSheet.create({
  text: ({isChoosing}) => ({
    width: 80,
    height: '100%',
    marginTop: 7,
    marginLeft: 30,
    fontSize: 20,
    //alignSelf: 'center',
    color: isChoosing ? CUSTOM_COLOR.Red : CUSTOM_COLOR.Black,
  }),
  container: {
    flex: 1,
    marginLeft: 20,
  },
  button: ({isChoosing}) => ({
    //borderWidth: 3,
    borderBottomWidth: 3,
    width: '100%',
    height: '100%',
    borderBottomColor: isChoosing ? CUSTOM_COLOR.SunsetOrange : 'transparent',
  }),
});
