import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import scale from '../../../../../responsive';
import CUSTOM_COLOR from '../../../../constants/color';

const Custom_ViewButton = props => {
  const [isSelect, setIsSelect] = useState('0');
  return (
    <>
      <>
        <TouchableOpacity
          onPress={() => {
            setIsSelect(props.text1);
          }}
          style={{
            left: scale(21),
            top: props.top1,
            width: scale(262),
            height: scale(45),
            justifyContent: 'flex-start',
          }}>
          <View style={styles.Circle}>
            <View
              style={{
                width: scale(10),
                height: scale(10),
                borderRadius: 360,
                backgroundColor:
                  isSelect === props.text1
                    ? CUSTOM_COLOR.SunsetOrange
                    : 'transparent',
              }}
            />
          </View>
          <Text
            style={{
              left: scale(31),
              fontWeight: '400',
              width: scale(150),
              height: scale(20),
              color: CUSTOM_COLOR.Black,
            }}>
            {props.text1}
          </Text>
        </TouchableOpacity>
      </>
      <>
        <TouchableOpacity
          onPress={() => {
            setIsSelect(props.text2);
          }}
          style={{
            left: scale(21),
            top: props.top2,
            width: scale(262),
            height: scale(45),
            justifyContent: 'flex-start',
          }}>
          <View style={styles.Circle}>
            <View
              style={{
                width: scale(10),
                height: scale(10),
                borderRadius: 360,
                backgroundColor:
                  isSelect === props.text2
                    ? CUSTOM_COLOR.SunsetOrange
                    : 'transparent',
              }}
            />
          </View>
          <Text
            style={{
              left: scale(31),
              fontWeight: '400',
              width: scale(150),
              height: scale(20),
              color: CUSTOM_COLOR.Black,
            }}>
            {props.text2}
          </Text>
        </TouchableOpacity>
      </>
    </>
  );
};

export default Custom_ViewButton;

const styles = StyleSheet.create({
  Circle: {
    top: scale(15),
    width: scale(15),
    height: scale(15),
    borderRadius: 360,
    borderColor: CUSTOM_COLOR.SunsetOrange,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: props => ({
    width: scale(10),
    height: scale(10),
    borderRadius: 360,
    backgroundColor:
      props.isSelect === props.text ? CUSTOM_COLOR.SunsetOrange : 'transparent',
  }),
});