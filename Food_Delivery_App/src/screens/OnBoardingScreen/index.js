import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {IMG_LOGO, IMG_BACKGROUND} from '../../assets/images';
//import CUSTOM_COLORS from "../../constants/colors";
import {SafeAreaView, ScrollView} from 'react-native';
import CUSTOM_COLORS from '../../constants/colors';
import scale from '../../constants/responsive';
import FONT_FAMILY from '../../constants/font';
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{flexGrow: 1}}
        style={styles.scrollView}>
        <View>
          <>{/* Logo */}</>
          <View style={styles.logoContainer}>
            <Image source={IMG_LOGO} style={styles.logo} />
          </View>

          <>{/* Title */}</>
          <Text style={styles.Text}>{'Food for \nEveryone'}</Text>

          <>{/* background */}</>
          <View style={styles.backgroundContainer}>
            <Image source={IMG_BACKGROUND} style={styles.background} />
          </View>

          <>{/* Button */}</>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{'Get started '}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLORS.SunsetOrange,
  },

  logo: {
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logoContainer: {
    backgroundColor: 'white',
    width: scale(73),
    height: scale(73),
    borderRadius: scale(73) / 2,
    marginLeft: scale(49),
    marginTop: scale(56),
  },

  background: {
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  backgroundContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: scale(364),
    position: 'absolute',
  },

  scrollView: {
    backgroundColor: CUSTOM_COLORS.SunsetOrange,
  },

  buttonContainer: {
    width: scale(314),
    height: scale(70),
    backgroundColor: CUSTOM_COLORS.white,
    borderRadius: 30,
    position: 'absolute',
    marginTop: scale(700),
    margin: scale(51),
    justifyContent: 'center',
    alignContent: 'center',
  },

  buttonText: {
    color: CUSTOM_COLORS.SunsetOrange,
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(17),
    fontWeight: '600',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  title: {
    fontSize: 65,
    Colors: CUSTOM_COLORS.white,
  },

  Text: {
    color: 'white',
    fontFamily: FONT_FAMILY.SFBlack,
    fontSize: scale(65),
    marginLeft: scale(51),
    position: 'absolute',
    marginTop: scale(160),
  },
});

export default App;
