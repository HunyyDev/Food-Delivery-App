import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from './src/constants/colors';
import {IMG_Logo, IMG_Background} from './src/assets/images';
import FONT_FAMILY from './src/constants/fonts';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Logo */}
      <>
        <View style={styles.logoContainer}>
          <Image source={IMG_Logo} style={styles.logo} resizeMode={'contain'} />
        </View>
      </>
      {/* Title */}
      <>
        <Text style={styles.title}>{'Food for \nEveryone'}</Text>
      </>
      {/* Image */}
      <>
        <View style={styles.backgroundContainer}>
          <ImageBackground
            source={IMG_Background}
            style={styles.background}
            resizeMode={'contain'}>
            <>
              <View style={styles.button}>
                <Text style={styles.buttonComment}>{'Get started'}</Text>
              </View>
            </>
          </ImageBackground>
        </View>
      </>
      {/* Button */}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetColor,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    width: 73,
    height: 73,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    backgroundColor: CUSTOM_COLOR.white,
    overflow: 'hidden',
    marginTop: 56,
    marginLeft: 49,
  },
  title: {
    fontSize: 65,
    fontFamily: FONT_FAMILY.Heavy,
    color: CUSTOM_COLOR.White,
    marginLeft: 49,
  },
  backgroundContainer: {},
  background: {
    width: Dimensions.get('window').width,
    height: 540,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: CUSTOM_COLOR.White,
    height: 70,
    width: 314,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonComment: {
    fontSize: 17,
    fontFamily: FONT_FAMILY.ProTextSemibold,
    color: CUSTOM_COLOR.Vermilion,
  },
});
