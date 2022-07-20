import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import scale from '../../responsive';
import CUSTOM_COLOR from '../constants/color';

const CUSTOM_SWITCH_BUTTON = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        top: scale(330),
        position: 'absolute',
        width: scale(414),
      }}>
      <Switch_Button
        text={'Login'}
        topLine={scale(50)}
        leftLine={scale(50)}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{left: scale(89), position: 'absolute'}}
      />
      <Switch_Button
        text={'Sign-Up'}
        topLine={scale(50)}
        leftLine={scale(232)}
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{left: scale(263), position: 'absolute'}}
      />
    </View>
  );
};

export default CUSTOM_SWITCH_BUTTON;

const styles = StyleSheet.create({});

const Switch_Button = props => (
  <TouchableOpacity onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={{
        color: 'black',
        fontSize: 18,
        fontWeight: '600',
        ...props.style,
      }}>
      {props.text}
    </Text>

    <View
      style={{
        position: 'absolute',
        width: scale(134),
        height: scale(3),
        left: props.leftLine,
        backgroundColor: (props.activeTab === props.text ? CUSTOM_COLOR.SunsetOrange : CUSTOM_COLOR.White),
        top: props.topLine,
      }}
    />
  </TouchableOpacity>
);