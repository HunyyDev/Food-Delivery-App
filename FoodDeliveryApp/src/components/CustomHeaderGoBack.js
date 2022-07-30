import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import FONT_FAMILY from '../constants/fonts';
import CUSTOM_COLOR from '../constants/colors';
import scale from '../constants/responsive';
import {IC_Back} from '../assets/icons';

export default class CustomHeaderGoBack extends Component {
  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
        <TouchableOpacity style={styles.left} onPress={this.props.leftOnPress}>
=======
        <TouchableOpacity
          style={styles.left}
          onPress={this.props.leftOnPress}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
>>>>>>> 90518c2a0fc3ae70636c2eafca18b8407cdd2cf1
          <Image
            source={
              this.props.leftIcon !== undefined ? this.props.leftIcon : IC_Back
            }
          />
        </TouchableOpacity>
        <View style={styles.title}>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
        {this.props.rightIcon !== undefined ? (
          <TouchableOpacity
            style={styles.right}
            onPress={this.props.rightOnPress}>
            <Image source={this.props.rightIcon} />
          </TouchableOpacity>
        ) : (
          <View styles={styles.right} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    flex: 2,
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
<<<<<<< HEAD
=======
    justifyContent: 'center',
    alignItems: 'flex-end',
>>>>>>> 90518c2a0fc3ae70636c2eafca18b8407cdd2cf1
  },
  text: {
    fontFamily: FONT_FAMILY.Bold,
    fontSize: scale(18),
    color: CUSTOM_COLOR.Black,
  },
<<<<<<< HEAD
});
=======
});
>>>>>>> 90518c2a0fc3ae70636c2eafca18b8407cdd2cf1
