import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
export class LoginScreen extends Component {
  render() {
    return <SafeAreaView style={styles.Container}></SafeAreaView>;
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AntiFlashWhite,
  },
});
