import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import COLOR from '../constants/colors';
import scale from '../constants/responsive';
import font_family from '../constants/fonts';

const ListButton = props => {
  return (
    <ScrollView
      style={props.style}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: scale.scaleWidth(89)}}>
      {props.values.map(value => (
        <TouchableOpacity
          activeOpacity={1}
          key={value}
          onPress={() => props.setSelectedValue(value)}
          style={styles.button}>
          <Text
            style={[
              styles.buttonLabel,
              props.selectedValue === value && styles.selectedLabel,
            ]}>
            {value}
          </Text>
          {props.selectedValue === value ? (
            <View style={styles.line}></View>
          ) : null}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: scale.scaleWidth(5),
    width: scale.scaleWidth(87),
    height: scale.scaleWidth(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    bottom: 0,
    height: scale.scaleWidth(3),
    backgroundColor: COLOR.vermilion,
    width: scale.scaleWidth(87),
    borderRadius: scale.scaleWidth(40),
  },
  buttonLabel: {
    fontFamily: font_family.SFProText.regular,
    color: COLOR.black,
    fontSize: scale.scaleWidth(17),
  },
  selectedLabel: {
    color: COLOR.vermilion,
  },
});

export default ListButton;
