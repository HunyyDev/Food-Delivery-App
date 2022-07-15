import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import React, {Component} from 'react';
import CUSTOM_COLOR from '../../constant/color';
import {IMG_Logo} from '../../assets/images';

export default class LonginScreen extends Component {
  render() {
    return (
      <ScrollView>
        {/* Top */}
        <View style={styles.containerTop}>
          <Image source={IMG_Logo} style={styles.image}></Image>
        </View>
        {/* Body */}
        <View></View>
        {/* Bottom */}
        <View></View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerTop: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '200',
    width: '200',
  },
});
