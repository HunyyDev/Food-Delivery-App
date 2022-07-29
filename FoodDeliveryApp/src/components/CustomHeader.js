import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';
import {IC_Back} from '../assets/icons';

export default class CustomHeader extends Component {
  render() {
    const LeftIcon = this.props.leftIcon;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.left} onPress={this.props.leftOnPress}>
          <Image source={this.props.leftIcon ? this.props.leftIcon : IC_Back} />
        </TouchableOpacity>

        <View style={styles.title}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
        
        <TouchableOpacity
          style={styles.right}
          onPress={this.props.rightOnPress}>
          <Image source={this.props.rightIcon ? this.props.rightIcon : null} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
  },
  text: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scale(18),
    color: CUSTOM_COLOR.Black,
  },
});
