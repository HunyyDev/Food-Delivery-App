import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {IC_Back} from '../assets/icons';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';

export default class CustomHeaderGoBack extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.onPress}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
          <Image source={IC_Back} />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
        <View style={styles.blank} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blank: {
    flex: 1,
  },
  text: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
  },
});
