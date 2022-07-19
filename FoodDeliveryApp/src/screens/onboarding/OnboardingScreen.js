import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {IMG_Background, IMG_Logo} from '../../assets/images';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import CustomButton from '../../components/CustomButton';
import CUSTOM_FONT from '../../constants/fonts';

export class OnboardingScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* headerSection */}
        <>
          <View style={styles.headerSection}>
            <Image
              source={IMG_Logo}
              style={styles.logo}
              resizeMode={'contain'}
            />
            <Text style={styles.headerText}>{'Food for \nEveryone'}</Text>
          </View>
        </>

        {/* centerSection */}
        <>
          <View style={styles.centerSection}>
            <Image
              source={IMG_Background}
              style={styles.centerImage}
              resizeMode={'contain'}
            />
          </View>
        </>

        {/* buttonSection */}
        <>
          <View style={styles.buttonSection}>
            <CustomButton type={'primary'} text={'Get Started'} />
          </View>
        </>
      </View>
    );
  }
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
  },

  headerSection: {
    marginLeft: scale(49),
    marginTop: scale(56),
  },

  logo: {},

  headerText: {
    marginTop: 30,
    fontSize: scale(65),
    color: CUSTOM_COLOR.White,
    lineHeight: scale(65),
    fontFamily: CUSTOM_FONT.Black,
  },

  centerSection: {},

  centerImage: {
    width: Dimensions.get('window').width,
    position: 'absolute',
  },
  buttonSection: {
    marginTop: 420,
  },
});
