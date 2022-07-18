import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../constants/colors';
import FONT_FAMILY from '../../constants/fonts';
import {IMG_Background, IMG_LOGO} from '../../assets/images';

const OnboardingScreen = () => {
  const [backgroundColor, setBackgroundColor] = useState(
    CUSTOM_COLOR.SunsetOrange,
  );
  const changeColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.floor(Math.random() * 256);
    setBackgroundColor(`rgba(${r}, ${g}, ${b}, ${a})`);
  };

  return (
    <View style={[styles.container, {backgroundColor: `${backgroundColor}`}]}>
      <View style={styles.header}>
        <Image source={IMG_LOGO} style={styles.logo} />
        <Text style={styles.headerText}>{'Food for \nEveryone'}</Text>
      </View>
      <View style={styles.mainImage}>
        <Image source={IMG_Background} style={styles.image} />
      </View>
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.buttonSection.button}
          onPress={changeColor}>
          <Text style={styles.textButton}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  header: {
    height: '25%',
    marginTop: 30,
    marginHorizontal: 35,
  },
  mainImage: {
    // flex: 2,
    height: '60%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonSection: {
    alignItems: 'center',
    color: CUSTOM_COLOR.White,
    button: {
      backgroundColor: CUSTOM_COLOR.White,
      padding: 20,
      width: '70%',
      borderRadius: 25,
      alignItems: 'center',
      fontSize: 16,
    },
  },
  textButton: {
    //fontWeight: '600',
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: FONT_FAMILY.Bold,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },

  headerText: {
    fontFamily: FONT_FAMILY.SFProRounded,
    color: CUSTOM_COLOR.White,
    fontStyle: 'normal',
    fontSize: 55,
    lineHeight: 70,
    letterSpacing: -2,
  },
});
