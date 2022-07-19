import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {scaleX, scaleY} from '../../helperFunction.js';

const OnBoardingScreen = () => {
  const [mainColor, setMainColor] = useState('rgba(255,75,58,255)');

  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.floor(Math.random() * 256);
    setMainColor(`rgba(${r}, ${g}, ${b}, ${a})`);
  };

  return (
    <View style={[styles.container, {backgroundColor: `${mainColor}`}]}>
      <View style={styles.headerSection}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.headerSection.logoHeader}
        />
        <Text style={styles.headerSection.textHeader}>Food for Everyone</Text>
      </View>
      <View style={styles.imageSection}>
        <Image
          source={require('../../assets/images/background.png')}
          resizeMode="cover"
          style={styles.imageSection.img}
        />
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.buttonSection.button}
          onPress={changeColor}>
          <Text
            style={[styles.buttonSection.button.text, {color: `${mainColor}`}]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerSection: {
    flex: 3,
    paddingTop: scaleY(56),
    marginLeft: scaleX(51),

    logoHeader: {
      width: Math.min(scaleX(73), scaleY(73)),
      height: Math.min(scaleX(73), scaleY(73)),
    },

    textHeader: {
      fontSize: 60,
      color: '#fff',
      fontFamily: 'FontsFree-Net-SF-Pro-Rounded-Bold',
      marginTop: scaleY(31),
      lineHeight: 56.44,
      letterSpacing: -0.05,
    },
  },

  imageSection: {
    flex: 6,
    img: {
      width: '100%',
      height: '100%',
    },
  },

  buttonSection: {
    flex: 1,
    alignItems: 'center',
    overflow: 'visible',
    marginHorizontal: scaleY(51),

    button: {
      backgroundColor: '#fff',
      paddingHorizontal: scaleX(105),
      paddingVertical: scaleY(25),
      width: '100%',
      borderRadius: 30,
      alignItems: 'center',
      fontSize: 17,
      position: 'absolute',
      bottom: scaleY(36),

      text: {
        fontWeight: '600',
      },
    },
  },
});

export default OnBoardingScreen;
