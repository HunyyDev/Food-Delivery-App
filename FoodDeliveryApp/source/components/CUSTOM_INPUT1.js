import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import CUSTOM_COLOR from '../constants/color';
import scale from '../../responsive';

class CUSTOM_INPUT1 extends React.Component {
    constructor(props) {
        super(props);
      }
    render(){
  return (
    <>
      <View style={styles.viewContainer(this.props)}>
        <Text style={styles.textContainer}>{this.props.text}</Text>
        <TextInput
          style={styles.textInputContainer}
          placeholder={this.props.placeHolderText}
          placeholderTextColor={this.props.placeholderTextColor}
          secureTextEntry={this.props.entry}
        />
      </View>
    </>
  );
    }
};

export default CUSTOM_INPUT1;

const styles = StyleSheet.create({
    viewContainer: props =>({
        top: props.top,
        left: props.left,
        position: props.position,
        borderBottomWidth: 0.5,
        width: scale(314),
        height: scale(59),
        borderBottomColor: CUSTOM_COLOR.Black,
      }),
  textContainer: {
    color: CUSTOM_COLOR.Black,
    fontWeight: '600',
    fontSize: scale(15),
    opacity: scale(0.4),
  },
  textInputContainer: {
    fontSize: scale(17),
    fontWeight: '600',
    marginTop: scale(-8),
    color: CUSTOM_COLOR.Black,
  },
});