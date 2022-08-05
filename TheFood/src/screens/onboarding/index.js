import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import {scaleX, scaleY} from '../../helperFunction';
import CustomButton from '../../components/CustomButton';
import SCREEN_NAME from '../../assets/constants/screens';
import CUSTOM_COLOR from '../../assets/constants/colors';

const OnBoardingScreen = props => {
  const {navigation} = props;

  const onTransitToLogin = () => {
    navigation.navigate(SCREEN_NAME.LOGIN_SCREEN);
  };
  // const onBack = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={[styles.container]}>
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
          onPress={onTransitToLogin}
          >
          <Text style={[styles.buttonSection.button.text]}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.VERMILION,
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
      backgroundColor: CUSTOM_COLOR.WHITE,
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
        color: CUSTOM_COLOR.VERMILION,
      },
    },
  },
});

export default OnBoardingScreen;
