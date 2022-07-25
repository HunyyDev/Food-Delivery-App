import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import scale from '../../responsive';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';
import { IC_Home } from '../assets/icons';

export default class CustomPicker extends Component {
  state = {
    selected: false,
    check: this.props.label,
    check2: this.props.page,
  };

  render() {
    return (
      <View>
        {this.props.label === this.props.page
          ? (this.state.selected = true)
          : (this.state.selected = false)}
        {this.state.selected === true ? (
          <IC_Home style={styles.selectedLabel}> {this.props.label}</Text>
        ) : (
          <Text style={styles.nonselectedLabel}> {this.props.label}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  touchContainer: {},
  selectedLabel: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.SunsetOrange,
    fontWeight: 'bold',
  },
  nonselectedLabel: {
    fontSize: scale(17),
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.Grey,
  },
});
